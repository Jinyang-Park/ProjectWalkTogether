import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { dbService } from '../../../common/firebase';
import MypageTabbar from '../tabbar/MypageTabbar';

const MyPageWrite = (props: { uid: string }) => {
  const { uid } = props;
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const querySnapshot = await getDocs(
      query(collection(dbService, 'Post'), where('UID', '==', uid))
    );
    setPosts(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <MyPageWriteWrap>
      <MyPageWriteTapContainer>writepost</MyPageWriteTapContainer>
      <div></div>
    </MyPageWriteWrap>
  );
};
export default MyPageWrite;

const MyPageWriteWrap = styled.div`
  width: 868px;
  height: 735px;
  margin: 0 auto 0 95px;
`;
const MyPageWriteTapContainer = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 40px;

  border-bottom: 3px solid #cbcbcb;
`;
