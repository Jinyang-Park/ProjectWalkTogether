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
import { FilterSelectedDate } from '../../Rocoil/Atom';
import { useRecoilState, useRecoilValue } from 'recoil';

// interface Date {
//   setfilterSelectedDate: React.Dispatch<React.SetStateAction<string>>;
// }
const Category = () => {
  //state를 받아옴 필터 네임을 받아ㄴ옴 (초기값)
  const { state } = useLocation();
  const [postings, setPostings] = useState<any>([]);
  // console.log(category);
  const [show, setShow] = useState<any>(false);
  const [TextChange, setTextChange] = useState('카테고리');

  // const [Date, setDate] = useRecoilState<any>(FilterDate);
  // 카테고리 useState
  const [category, setCategory] = useState(state);

  // 조회순
  const [viewCount, setViewCount] = useState('최신순');

  const [filteredDate, setFilteredDate] = useState('');
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
  console.log('SelectedDate', SelectedDate);

  useEffect(() => {
    const q = query(
      collection(dbService, 'Post'),
      // 카테고리를 만들어줌
      where('Category_Posting', '==', category),
      orderBy('createdAt', 'desc')
    );
    onSnapshot(q, (snapshot) => {
      const getCategoryList = snapshot.docs.map((doc) => {
        const CategoryList = {
          id: doc.id,
          ...doc.data(),
        };
        return CategoryList;
      });
      setPostings(getCategoryList);
    });
    return () => {
      setMeetDate('');
    };
  }, [category]);

  console.log(postings);

  // console.log(post.RsvDate_Posting.slice(0, 4));

  // 클릭한 카테고리 날짜와 내가 클릭한 달력 날짜가 일치하는 친구들만 필터로 걸러준다.
  // FiltetedDate를 가지고 리턴문에서 map을 돌리면 아무것도 뜨지 않는다.
  // SelectedDate과 '/1' 불일치하면 postings.filter((post: any) => post.RsvDate_Posting.slice(0, 4) === SelectedDate) 을 보여주고 아니면 포스팅
  // useEffect(() => {
  //   SelectedDate.length < 14
  //     ? setFilteredDate(
  //         postings.filter((post: any) => post.RsvDate_Posting === SelectedDate)
  //       )
  //     : setFilteredDate(postings);
  //   console.log(filteredDate);
  // }, [SelectedDate]);

  // console.log(SelectedDate.length);

  const FilteredDate =
    // SelectedDate !== 'NaN/undefined'
    SelectedDate.length < 14
      ? postings.filter((post: any) => post.RsvDate_Posting === SelectedDate)
      : postings;

  const DoubledFilterDate =
    viewCount === '조회순'
      ? [...FilteredDate].sort((a, b) => b.View - a.View)
      : FilteredDate;

  useEffect(() => {
    setFilteredDate(SelectedDate);
  }, [postings]);

  console.log(filteredDate);
  // console.log(SelectedDate !== 'NaN/undefined');
  // console.log(postings);

  // console.log(FilteredDate);
  // console.log(category);

  return (
    <CommonStyles>
      <S.CategoryTitleWrapper>
        <S.CategoryTitle>{category}</S.CategoryTitle>
        {/*이미지는 DropFilterCategory에서 atom 사용해서 가져와보자! */}
        <S.CategoryImg>{category.img}</S.CategoryImg>
      </S.CategoryTitleWrapper>
      <S.FilterArea>
        <S.CategoryFilter>
          {/*카테고리영역 */}
          <S.CategoryFilterWarpper onClick={() => setShow(true)}>
            <S.FilterCategory>{TextChange}</S.FilterCategory>
            <S.FilterCalendarIcon />
          </S.CategoryFilterWarpper>
          {show && (
            <DropdownFilterCategory
              setShow={setShow}
              setTextChange={setTextChange}
              setCategory={setCategory}
              TextChange={TextChange}
            />
          )}
          {/*달력영역 */}
          {/* <S.CategoryFilterWarpper>
            <S.FilterCategory>3월 23일</S.FilterCategory>
            <S.FilterCalendarIcon />
          </S.CategoryFilterWarpper> */}
          <AntCalendarMap />
        </S.CategoryFilter>
        {/*최신순 / 조회순 / 좋아요순*/}
        <S.FilterSortWrapper>
          <S.FilterNewest onClick={() => setViewCount('최신순')}>
            최신순
            <S.FilterAreaLine></S.FilterAreaLine>
          </S.FilterNewest>
          <S.FilterNewest onClick={() => setViewCount('조회순')}>
            조회순
            <S.FilterAreaLine></S.FilterAreaLine>
          </S.FilterNewest>
          <S.FilterNewest>좋아요순</S.FilterNewest>
        </S.FilterSortWrapper>
      </S.FilterArea>
      <S.LikedListItem>
        {/* 여기서 내가 클릭한 filter나 if문을 사용해된다. */}

        {DoubledFilterDate.map((post: any) => {
          return <CardSection key={post.id} post={post} />;
        })}
      </S.LikedListItem>
    </CommonStyles>
  );
};

export default Category;
