import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { dbService } from '../../../common/firebase';
import MypageTabbar from '../tabbar/MypageTabbar';
import CardSection from '../../../components/CardSection/CardSection';

const MyPageWrite = (props: { uid: string }) => {
  const { uid } = props;
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const querySnapshot = await getDocs(
      query(collection(dbService, 'Post'), where('UID', '==', uid))
    );
    console.log(querySnapshot.docs[0].data());
    setPosts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };
  useEffect(() => {
    fetchPosts();
  }, [posts]);

  return (
    <MyPageWriteWrap>
      <MyPageWriteTapContainer></MyPageWriteTapContainer>
      <div>
        {posts.map((post, i) => {
          return <CardSection post={post} key={i} />;
        })}
      </div>
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
