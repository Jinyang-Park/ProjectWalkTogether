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

const Category = () => {
  //state를 받아옴 필터 네임을 받아ㄴ옴 (초기값)
  const { state } = useLocation();
  const [postings, setPostings] = useState<any>([]);
  // console.log(category);
  const [show, setShow] = useState<any>(false);
  const [TextChange, setTextChange] = useState('카테고리');

  // 스테이트 하나를 만들었다.
  const [category, setCategory] = useState(state);

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
  // console.log(postings);z

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
          <S.FilterNewest>
            최신순
            <S.FilterAreaLine></S.FilterAreaLine>
          </S.FilterNewest>
          <S.FilterNewest>
            조회순
            <S.FilterAreaLine></S.FilterAreaLine>
          </S.FilterNewest>
          <S.FilterNewest>좋아요순</S.FilterNewest>
        </S.FilterSortWrapper>
      </S.FilterArea>
      <S.LikedListItem>
        {postings.map((post: any) => {
          return <CardSection key={post.id} post={post} />;
        })}
      </S.LikedListItem>
    </CommonStyles>
  );
};

export default Category;
