import React, { useEffect } from 'react';
import * as S from './InfoList.style';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  CategoryAllInput,
  SelectedCategoryInput,
  DateAllInput,
  SelectedDateInput,
  LocationAllInput,
  SelectedLocationInput,
  DateSortInput,
  ViewSortInput,
  LikeSortInput,
  NewSortInput,
  Cetegory,
  FilterSelectedDateForMapPage,
  dateType1ForMapPage,
  viewCountForMapPage,
} from '../../../Rocoil/Atom';

import { useSearch } from '../../../hooks/useSearch';
import {
  query,
  collection,
  where,
  orderBy,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';
import { dbService } from '../../../common/firebase';

import { useParams, useNavigate } from 'react-router-dom';
import { paramsState } from '../../../Rocoil/Atom';
import { useSetRecoilState } from 'recoil';
import CommonStyles from './../../../styles/CommonStyles';
import CardSection from './../../../components/CardSection/CardSection';

const InfoList = ({ Post }) => {
  const navigate = useNavigate();
  const setParams = useSetRecoilState(paramsState);
  const [postings, setPostings] = useState<any>([]);

  const FilterSelectedDate = useRecoilValue(FilterSelectedDateForMapPage);
  // recoilvalue 로 viewCountForMapPage 를 받아온다.
  const viewCount = useRecoilValue(viewCountForMapPage);

  const DateType1 = useRecoilValue(dateType1ForMapPage);
  // console.log('DateType1', DateType1);
  const [SelectedDate, setSelectedDate] = useState('');
  // DateType1 을 받아와서 SelectedDate 에 넣어준다.
  useEffect(() => {
    setSelectedDate(DateType1);
  }, [DateType1]);
  // console.log('SelectedDate', SelectedDate);

  const Category = useRecoilValue(Cetegory);
  const postpostpost =
    Category !== '전체'
      ? Post.filter((x) => x.Category_Posting === Category)
      : Post;

  // 필터링 필요한지 아닌지
  const [meetDate, setMeetDate] = useRecoilState(FilterSelectedDateForMapPage);
  const isDateSpecified = meetDate !== '';

  //! 여기부터 Category에서 가져옴
  useEffect(() => {
    const isAll = Category === '전체';

    // 카테고리에서 전체를 클릭했을때 where 없애는 코드문
    const c = collection(dbService, 'Post');
    const w = where('Category_Posting', '==', Category);
    const o = orderBy('createdAt', 'desc');
    const q = isAll ? query(c, o) : query(c, w, o);

    onSnapshot(q, (snapshot) => {
      const getCategoryList = snapshot.docs.map((doc) => {
        const CategoryList = {
          id: doc.id,
          ...doc.data(),
        };

        return CategoryList;
      });

      // 필터링 필요한지 아닌지
      const isDateSpecified = meetDate !== '';

      // getCategoryList를 리턴함. 필터링할 필요가 있으면 필터링해줌.
      const getListFilteredIfNecessary = () => {
        if (isDateSpecified)
          return getCategoryList.filter(
            (post: any) => post.RsvDate_Posting === SelectedDate
          );

        return getCategoryList;
      };

      // getCategoryList() 호출해서 setPostings()함
      setPostings(getListFilteredIfNecessary());
    });
  }, [Category]);

  // FilterDate는 DoubleFilterDate를 위해 쓰는 코드이다.
  const FilteredDate =
    SelectedDate.length < 14
      ? postings.filter((post: any) => post.RsvDate_Posting === SelectedDate)
      : postings;

  // switch문 찾아보기
  const DoubleFilteredDateFunction = () => {
    switch (viewCount) {
      case '조회순':
        return [...FilteredDate].sort((a, b) => b.View - a.View);
      case '좋아요순':
        return [...FilteredDate].sort(
          (a, b) => b.LikedUsers.length - a.LikedUsers.length
        );
      default:
        return FilteredDate;
    }
  };

  const DoubledFilterDate = DoubleFilteredDateFunction();
  //! 여기까지 Category에서 가져옴

  return (
    <>
      <S.SearchLineTotalCount>
        총 {DoubledFilterDate.length} 건의 검색결과
      </S.SearchLineTotalCount>
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
        {/* {postpostpost.map((post: any) => {
          return <CardSection key={post.id} post={post} />;
        })} */}
      </S.LikedListItem>
    </>
  );
};

export default InfoList;
