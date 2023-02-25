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

  //약속 시간
  const meetDate = useRecoilValue(FilterSelectedDate);
  const OTS = meetDate.toString();
  const weeks = OTS.slice(0, 3);
  let todayweek = '';
  switch (
    weeks //요일
  ) {
    case 'Sun':
      todayweek = '(일)';
      break;
    case 'Mon':
      todayweek = '(월)';
      break;
    case 'Tue':
      todayweek = '(화)';
      break;
    case 'Wed':
      todayweek = '(수)';
      break;
    case 'Thu':
      todayweek = '(목)';
      break;
    case 'Fri':
      todayweek = '(금)';
      break;
    case 'Sat':
      todayweek = '(토)';
      break;
  }

  //월
  const meetMonth = OTS.slice(8, 11);
  let todayMonth = '';
  switch (meetMonth) {
    case 'Jan':
      todayMonth = '1';
      break;
    case 'Feb':
      todayMonth = '2';
      break;
    case 'Mar':
      todayMonth = '3';
      break;
    case 'Apr':
      todayMonth = '4';
      break;
    case 'May':
      todayMonth = '5';
      break;
    case 'Jun':
      todayMonth = '6';
      break;
    case 'July':
      todayMonth = '7';
      break;
    case 'Aug':
      todayMonth = '8';
      break;
    case 'Sep':
      todayMonth = '9';
      break;
    case 'Oct':
      todayMonth = '10';
      break;
    case 'Nov':
      todayMonth = '11';
      break;
    case 'dec':
      todayMonth = '12';
      break;
  }

  //날자
  let meetDaynum: any = '';

  const meetDay = OTS.slice(5, 7);
  if (Number(meetDay) < 10) {
    meetDaynum = Number(meetDay.slice(1, 2)) + 1;
  } else {
    meetDaynum = Number(meetDay) + 1;
  }

  // console.log(FilterSelectedDate);
  // 달력
  const SelectedDate = `${todayMonth}/${meetDaynum}`;

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
  }, [category]);

  // console.log(postings);
  // console.log(post.RsvDate_Posting.slice(0, 4));
  // 기본값이면 필터를 해주지 말고 기본값이 아니면 필터를 해줘라

  const FilteredDate =
    SelectedDate !== '/1'
      ? postings.filter(
          (post: any) => post.RsvDate_Posting.slice(0, 4) === SelectedDate
        )
      : postings;

  // 알고리즘 많이 풀기
  const DoubledFilterDate =
    viewCount === '조회순'
      ? [...FilteredDate].sort((a, b) => b.View - a.View)
      : FilteredDate;
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
