import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { dbService } from '../../../common/firebase';
import CardSection from '../../../components/CardSection/CardSection';
import * as S from './MypageLike.style';

const MyPageLike = (props: { uid: string }) => {
  const { uid } = props;
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const querySnapshot = await getDocs(
      query(
        collection(dbService, 'Post'),
        where('LikedUsers', 'array-contains', uid)
      )
    );
    setPosts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };
  useEffect(() => {
    fetchPosts();
  }, [posts]);

  return (
    <S.MyPageWriteWrap>
      <S.PostListWrap>
        {posts.map((post, i) => {
          return <CardSection post={post} key={i} />;
        })}
      </S.PostListWrap>
    </S.MyPageWriteWrap>
  );
};
export default MyPageLike;
