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
import CardSection from './../../common/CardSection/CardSection';

const Category = () => {
  const { category } = useParams();
  const [postings, setPostings] = useState<any>([]);
  // console.log(category);

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

  return (
    <S.LikedListItem>
      {postings.map((post: any) => {
        return <CardSection key={post.id} post={post} />;
      })}
    </S.LikedListItem>
  );
};

export default Category;
