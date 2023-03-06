import React from 'react';
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
} from '../../../Rocoil/Atom';

import { useSearch } from '../../../hooks/useSearch';

import { useParams, useNavigate } from 'react-router-dom';
import { paramsState } from '../../../Rocoil/Atom';
import { useSetRecoilState } from 'recoil';
import CommonStyles from './../../../styles/CommonStyles';
import CardSection from './../../../components/CardSection/CardSection';

const InfoList = ({ Post }) => {
  const navigate = useNavigate();
  const setParams = useSetRecoilState(paramsState);
  // recoilvalue 로 FilterSelectedDateForMapPage 를 받아온다.
  const FilterSelectedDate = useRecoilValue(FilterSelectedDateForMapPage);
  console.log('FilterSelectedDate', FilterSelectedDate);

  const Category = useRecoilValue(Cetegory);
  const postpostpost =
    Category !== '전체'
      ? Post.filter((x) => x.Category_Posting === Category)
      : Post;

  const [CategoryAll, setCategoryAll] = useRecoilState(CategoryAllInput); // 카테고리 전체
  const [SelectedCategory, setSelectedCategory] = useRecoilState(
    SelectedCategoryInput
  ); // 선택된 카테고리

  const [DateAll, setDateAll] = useRecoilState(DateAllInput); // 날짜 전체
  const [SelectedDate, setSelectedDate] = useRecoilState(SelectedDateInput); // 선택된 날짜

  const [LocationAll, setLocationAll] = useRecoilState(LocationAllInput); // 위치 전체
  const [SelectedLocation, setSelectedLocation] = useRecoilState(
    SelectedLocationInput
  ); // 선택된 위치

  // 날짜 순 정렬
  const [DateSort, setDateSort] = useRecoilState(DateSortInput);

  // 조회수 순 정렬
  const [ViewSort, setViewSort] = useRecoilState(ViewSortInput);

  // 최신순 정렬
  const [NewSort, setNewSort] = useRecoilState(NewSortInput);

  return (
    <CommonStyles>
      <S.SearchLineTotalCount>총 n 건의 검색결과</S.SearchLineTotalCount>
      <S.LikedListItem>
        {postpostpost.map((post: any) => {
          return <CardSection key={post.id} post={post} />;
        })}
      </S.LikedListItem>
    </CommonStyles>
  );
};

export default InfoList;
