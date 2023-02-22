import React from 'react'
import * as S from './InfoList.style'
import { useState } from 'react'

import { useSearch } from '../../../hooks/useSearch'

const InfoList = ({ Post }) => {
  const [CategoryAll, setCategoryAll] = useState([]) // 카테고리 전체
  const [SelectedCategory, setSelectedCategory] = useState([]) // 선택된 카테고리

  const [DateAll, setDateAll] = useState([]) // 날짜 전체
  const [SelectedDate, setSelectedDate] = useState([]) // 선택된 날짜

  const [LocationAll, setLocationAll] = useState([]) // 위치 전체
  const [SelectedLocation, setSelectedLocation] = useState([]) // 선택된 위치

  // 날짜 순 정렬
  const [DateSort, setDateSort] = useState(false)

  // 조회수 순 정렬
  const [ViewSort, setViewSort] = useState(false)

  // 좋아요 순 정렬
  const [LikeSort, setLikeSort] = useState(false)

  // 최신순 정렬
  const [NewSort, setNewSort] = useState(false)

  // 카테고리 필터링
  const CategoryFilter = (e) => {
    if (e.target.checked) {
      setSelectedCategory([...SelectedCategory, e.target.value])
    } else {
      setSelectedCategory(
        SelectedCategory.filter((category) => category !== e.target.value)
      )
    }
  }
  // 카테고리 필터링 사용 위치
  // <S.FilterCategoryCheckbox
  //   type="checkbox"
  //   value={category.CategoryName}
  //   onChange={CategoryFilter}
  // />

  // 날짜 필터링
  const DateFilter = (e) => {
    if (e.target.checked) {
      setSelectedDate([...SelectedDate, e.target.value])
    } else {
      setSelectedDate(SelectedDate.filter((date) => date !== e.target.value))
    }
  }
  // 날짜 필터링 사용 위치
  // <S.FilterDateCheckbox
  //   type="checkbox"
  //   value={date}
  //   onChange={DateFilter}
  // />

  // 위치 필터링
  const LocationFilter = (e) => {
    if (e.target.checked) {
      setSelectedLocation([...SelectedLocation, e.target.value])
    } else {
      setSelectedLocation(
        SelectedLocation.filter((location) => location !== e.target.value)
      )
    }
  }
  // 위치 필터링 사용 위치
  // <S.FilterLocationCheckbox
  //   type="checkbox"
  //   value={location}
  //   onChange={LocationFilter}

  // 카테고리 필터링
  const CategoryFilterFunc = (post) => {
    if (SelectedCategory.length === 0) {
      return true
    } else {
      return SelectedCategory.includes(post.CategoryName_Posting)
    }
  }

  // 날짜 필터링
  const DateFilterFunc = (post) => {
    if (SelectedDate.length === 0) {
      return true
    } else {
      return SelectedDate.includes(post.Date_Posting)
    }
  }

  // 위치 필터링
  const LocationFilterFunc = (post) => {
    if (SelectedLocation.length === 0) {
      return true
    } else {
      return SelectedLocation.includes(post.Location_Posting)
    }
  }

  // 날짜 정렬
  const DateSortFunc = (a, b) => {
    if (DateSort) {
      return a.Date_Posting < b.Date_Posting ? 1 : -1
    } else {
      return a.Date_Posting > b.Date_Posting ? 1 : -1
    }
  }

  // 조회수 정렬
  const ViewSortFunc = (a, b) => {
    if (ViewSort) {
      return a.View_Posting < b.View_Posting ? 1 : -1
    } else {
      return a.View_Posting > b.View_Posting ? 1 : -1
    }
  }

  // 좋아요 정렬
  const LikeSortFunc = (a, b) => {
    if (LikeSort) {
      return a.Like_Posting < b.Like_Posting ? 1 : -1
    } else {
      return a.Like_Posting > b.Like_Posting ? 1 : -1
    }
  }

  // 최신순 정렬
  const NewSortFunc = (a, b) => {
    if (NewSort) {
      return a.PostingID_Posting < b.PostingID_Posting ? 1 : -1
    } else {
      return a.PostingID_Posting > b.PostingID_Posting ? 1 : -1
    }
  }

  // 필터링
  const FilterFunc = (post) => {
    return (
      CategoryFilterFunc(post) &&
      DateFilterFunc(post) &&
      LocationFilterFunc(post)
    )
  }

  // 정렬
  const SortFunc = (a, b) => {
    return (
      DateSortFunc(a, b) ||
      ViewSortFunc(a, b) ||
      LikeSortFunc(a, b) ||
      NewSortFunc(a, b)
    )
  }

  // 검색결과
  const Result = Post.filter(FilterFunc).sort(SortFunc)

  //필터링을 위한 함수
  const Item = ({ item }) => {
    const [isSelected, setIsSelected] = useState(false)

    const handlePress = () => {
      setIsSelected(!isSelected)
      if (isSelected) {
        setSelectedCategory(SelectedCategory.filter((e) => e !== item))
      } else {
        setSelectedCategory([...SelectedCategory, item])
      }
    }
  }

  return (
    <>
      <S.SearchLineTotalCount>총 n 건의 검색결과</S.SearchLineTotalCount>
      <S.ResultList>
        {Post.map((post) => {
          return (
            <S.ResultListCard key={post.PostingID_Posting}>
              <S.ResultListCardImage
                src={post.ThunmnailURL_Posting}
              ></S.ResultListCardImage>
              <S.ResultListCardTitle>
                {post.Title_Posting}
              </S.ResultListCardTitle>
              <S.ResultListTagList>
                <S.ResultListTag>#음악</S.ResultListTag>
                <S.ResultListTag>#락</S.ResultListTag>
                <S.ResultListTag>#뮤즈파에요</S.ResultListTag>
              </S.ResultListTagList>
              <S.ResultListCardLine />
              <S.ResultListCardLocationTimeDateWrapper>
                <S.ResultListCardLocation>
                  {post.Address_Posting}
                </S.ResultListCardLocation>
                <S.ResultListCardDateTimeLikeWrapper>
                  <S.ResultListCardDateTimeWrapper>
                    <S.ResultListCardDate>
                      {post.RsvDate_Posting}
                    </S.ResultListCardDate>
                    <S.ResultListCardTime>
                      {post.RsvHour_Posting}
                    </S.ResultListCardTime>
                  </S.ResultListCardDateTimeWrapper>
                  <S.ResultListCardLike>♡</S.ResultListCardLike>
                </S.ResultListCardDateTimeLikeWrapper>
              </S.ResultListCardLocationTimeDateWrapper>
            </S.ResultListCard>
          )
        })}
      </S.ResultList>
    </>
  )
}

export default InfoList
