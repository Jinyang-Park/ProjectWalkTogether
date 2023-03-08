import React from 'react';
import * as S from './Category.style';
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {
  query,
  collection,
  where,
  orderBy,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';
import { dbService } from '../../common/firebase';
import CardSection from '../../components/CardSection/CardSection';
import CommonStyles from '../../styles/CommonStyles';
import DropdownFilterCategory from './../../components/DropdownFilterCategory/DropdownFilterCategory';
import AntCalendarMap from './Calendar/AntCalendarDate';
import { Cetegory, FilterSelectedDate } from '../../Rocoil/Atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { fontWeight } from '@mui/system';
import { CategorysList } from '../../utils/CategorysList';
import { Post, usePosts } from '../../api/postsApi';

const Category = () => {
  const { category } = useParams();
  console.log(category);
  const postings: Array<Post> = usePosts().filter((post) => {
    if (category === '전체') return true;
    return post.Category_Posting === category;
  });
  // console.log(category);
  const [show, setShow] = useState<any>(false);
  const [TextChange, setTextChange] = useState('카테고리');

  // 조회순
  const [viewCount, setViewCount] = useState('최신 등록순');

  //약속 시간
  const [meetDate, setMeetDate] = useRecoilState(FilterSelectedDate);
  console.log(meetDate);
  const date = (y: number, m: number, d: number) => {
    const D = new Date(y, m, d);

    switch (D.getDay()) {
      case 0:
        return '(일)';
      case 1:
        return '(월)';
      case 2:
        return '(화)';
      case 3:
        return `(수)`;
      case 4:
        return `(목)`;
      case 5:
        return '(금)';
      case 6:
        return `(토)`;
      default:
        return '';
    }
  };

  const y = meetDate.$y;
  const m = meetDate.$M;
  const d = meetDate.$D;
  const month = meetDate.$M + 1;
  console.log(y, m, d);
  // console.log(FilterSelectedDate);
  // 달력

  const SelectedDate = `${month}/${d} ${date(y, m, d)}`;
  // const SelectedDate = `${todayMonth}/${meetDaynum}`;

  // 내가 필터 달력 클릭한 값이 잘 넘어온다.
  // console.log('SelectedDate', SelectedDate);

  // FilterDate는 DoubleFilterDate를 위해 쓰는 코드이다.
  const FilteredDate =
    SelectedDate.length < 14
      ? postings.filter((post: any) => post.RsvDate_Posting === SelectedDate)
      : postings;

  // FilteredDate를 가지고 조회순으로 정렬해주는 함수이다.
  // const DoubledFilterDate =
  //   viewCount === '조회순'
  //     ? [...FilteredDate].sort((a, b) => b.View - a.View)
  //     : viewCount === '좋아요순'
  //     ? [...FilteredDate].sort(
  //         (a, b) => b.LikedUsers.length - a.LikedUsers.length
  //       )
  //     : FilteredDate;

  // switch문 찾아보기
  const DoubleFilteredDateFunction = () => {
    switch (viewCount) {
      case '조회순':
        return [...FilteredDate].sort((a, b) => b.View - a.View);
      case '좋아요 순':
        return [...FilteredDate].sort(
          (a, b) => b.LikedUsers.length - a.LikedUsers.length
        );
      default:
        return FilteredDate;
    }
  };

  const DoubledFilterDate = DoubleFilteredDateFunction();

  return (
    <CommonStyles>
      <S.CategoryWrapper>
        <S.CategoryTitleWrapper>
          {/*useParams 받아온 카테고리 이름과 같으면 해당 img 보여줌*/}
          {CategorysList.map((item) => {
            if (category === item.name) {
              return <S.CategoryImg src={item.img} />;
            }
          })}
          <S.CategoryTitle>{category}</S.CategoryTitle>
        </S.CategoryTitleWrapper>
        <S.FilterArea>
          <S.CategoryFilter>
            {/*카테고리영역 */}
            <S.CategoryFilterWarpper onClick={() => setShow(true)}>
              <S.FilterCategory>{TextChange}</S.FilterCategory>
              {/*카테고리이면 아이콘 보여주고 아니면 block*/}
              <S.FilterCalendarIcon
                style={{
                  display: TextChange === '카테고리' ? 'block' : 'none',
                }}
                src={
                  require('../../assets/CategoryPageIcon/CategoryIcon2.svg')
                    .default
                }
              />
            </S.CategoryFilterWarpper>
            {show && (
              <DropdownFilterCategory
                setShow={setShow}
                setTextChange={setTextChange}
                TextChange={TextChange}
              />
            )}
            {/*달력영역 */}
            <AntCalendarMap />
          </S.CategoryFilter>
          {/*최신순 / 조회순 / 좋아요순*/}

          <S.FilterSortWrapper>
            <S.FilterNewest onClick={() => setViewCount('최신 등록순')}>
              최신 등록순
              <S.FilterAreaLine></S.FilterAreaLine>
            </S.FilterNewest>
            <S.FilterNewest onClick={() => setViewCount('조회순')}>
              조회순
              <S.FilterAreaLine></S.FilterAreaLine>
            </S.FilterNewest>
            <S.FilterNewest onClick={() => setViewCount('좋아요 순')}>
              좋아요 순
            </S.FilterNewest>
          </S.FilterSortWrapper>
        </S.FilterArea>
        <S.LikedListItem>
          {/*검색 조건에 맞는 데이터가 없을 경우*/}
          {DoubledFilterDate.length === 0 ? (
            <S.NoResult>
              <S.NoResultTitle>아쉽지만 해당 게시글이 없어요</S.NoResultTitle>
            </S.NoResult>
          ) : (
            DoubledFilterDate.map((post: any) => {
              return <CardSection key={post.id} post={post} />;
            })
          )}
        </S.LikedListItem>
      </S.CategoryWrapper>
    </CommonStyles>
  );
};

export default Category;
