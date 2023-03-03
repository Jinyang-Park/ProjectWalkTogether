import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { dbService } from '../../../common/firebase';
import CardSection from '../../../components/CardSection/CardSection';

import S from '../MyPageSharedStyles';

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
    <MyPageWriteWrap>
      <S.PostListWrap>
        {posts.map((post, i) => {
          return <CardSection post={post} key={i} />;
        })}
      </S.PostListWrap>
    </MyPageWriteWrap>
  );
};
export default MyPageLike;

const MyPageWriteWrap = styled.div`
  width: 100%;
  height: 735px;
`;
