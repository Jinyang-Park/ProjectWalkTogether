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

  //! 함수를 리코일에 담기 위해서는 Selector를 사용해야 한다.

  // 카테고리 필터링
  const CategoryFilter = (e) => {
    if (e.target.checked) {
      setSelectedCategory([...SelectedCategory, e.target.value]);
    } else {
      setSelectedCategory(
        SelectedCategory.filter((category) => category !== e.target.value)
      );
    }
  };

  // 날짜 필터링
  const DateFilter = (e) => {
    if (e.target.checked) {
      setSelectedDate([...SelectedDate, e.target.value]);
    } else {
      setSelectedDate(SelectedDate.filter((date) => date !== e.target.value));
    }
  };

  // 위치 필터링
  const LocationFilter = (e) => {
    if (e.target.checked) {
      setSelectedLocation([...SelectedLocation, e.target.value]);
    } else {
      setSelectedLocation(
        SelectedLocation.filter((location) => location !== e.target.value)
      );
    }
  };

  // 카테고리 필터링
  const CategoryFilterFunc = (post) => {
    if (SelectedCategory.length === 0) {
      return true;
    } else {
      return SelectedCategory.includes(post.CategoryName_Posting);
    }
  };

  // 날짜 필터링
  const DateFilterFunc = (post) => {
    if (SelectedDate.length === 0) {
      return true;
    } else {
      return SelectedDate.includes(post.Date_Posting);
    }
  };

  // 위치 필터링
  const LocationFilterFunc = (post) => {
    if (SelectedLocation.length === 0) {
      return true;
    } else {
      return SelectedLocation.includes(post.Location_Posting);
    }
  };

  // 날짜 정렬
  const DateSortFunc = (a, b) => {
    if (DateSort) {
      return a.Date_Posting < b.Date_Posting ? 1 : -1;
    } else {
      return a.Date_Posting > b.Date_Posting ? 1 : -1;
    }
  };

  // 조회수 정렬
  const ViewSortFunc = (a, b) => {
    if (ViewSort) {
      return a.View_Posting < b.View_Posting ? 1 : -1;
    } else {
      return a.View_Posting > b.View_Posting ? 1 : -1;
    }
  };

  // 최신순 정렬 (인자에 있는 a, b는 Post의 요소)
  const NewSortFunc = (a, b) => {
    if (NewSort) {
      return a.PostingID_Posting < b.PostingID_Posting ? 1 : -1;
    } else {
      return a.PostingID_Posting > b.PostingID_Posting ? 1 : -1;
    }
  };

  // 필터링
  const FilterFunc = (post) => {
    return (
      CategoryFilterFunc(post) &&
      DateFilterFunc(post) &&
      LocationFilterFunc(post)
    );
  };

  // 정렬
  const SortFunc = (a, b) => {
    return DateSortFunc(a, b) || ViewSortFunc(a, b) || NewSortFunc(a, b);
  };

  // 검색결과
  const Result = Post.filter(FilterFunc).sort(SortFunc);

  //필터링을 위한 함수
  const Item = ({ item }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handlePress = () => {
      setIsSelected(!isSelected);
      if (isSelected) {
        setSelectedCategory(SelectedCategory.filter((e) => e !== item));
      } else {
        setSelectedCategory([...SelectedCategory, item]);
      }
    };
  };

  // 카테고리 Form Submit 함수
  const CategoryFormSubmit = (e) => {
    e.preventDefault();
    console.log(SelectedCategory);
  };

  // 날짜 Form Submit 함수
  const DateFormSubmit = (e) => {
    e.preventDefault();
    console.log(SelectedDate);
  };

  // 위치 Form Submit 함수
  const LocationFormSubmit = (e) => {
    e.preventDefault();
    console.log(SelectedLocation);
  };

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
