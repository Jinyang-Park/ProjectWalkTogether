import React from 'react';
import * as S from './Category.style';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  query,
  collection,
  where,
  orderBy,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';
import { dbService } from '../../common/firebase';

const Category = () => {
  const { category } = useParams();
  const [postings, setPostings] = useState<any>([]);
  console.log(category);

  useEffect(() => {
    const q = query(
      collection(dbService, 'Post'),
      // Category_Posting이 파람스로 넘겨준 애들과 같은 애들만 뿌려줘라
      where('Category_Posting', '==', category),
      orderBy('RsvDate_Posting', 'desc')
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
  }, []);
  // console.log(postings);
  //
  return (
    <S.LikedListItem>
      {postings.map((post) => {
        return (
          <>
            <S.ListItemWrapper>
              <S.ListItemThumnail src={'/assets/hodu.jpg'} />
            </S.ListItemWrapper>
            <S.ListItemThumnailTitle>
              {post.Title_Posting}
            </S.ListItemThumnailTitle>
            <S.ListItemContainer>
              <S.LikedHeartFlex>
                <S.ListItemAddress>서울특별시 강남구 청담동</S.ListItemAddress>
                <S.LikeBtnLine />
              </S.LikedHeartFlex>
              <S.ListItemDate>2/9(목) 19:40</S.ListItemDate>
            </S.ListItemContainer>
          </>
        );
      })}
    </S.LikedListItem>
  );
};

export default Category;
