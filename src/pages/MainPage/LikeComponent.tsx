import React, { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { authService, dbService } from '../../common/firebase';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as S from './CardSection.style';
import Tag from '../../components/Tag';
import { paramsState } from '../../Rocoil/Atom';
import {
  query,
  collection,
  where,
  orderBy,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';
import CommonStyles from '../../styles/CommonStyles';
import CardSection from '../../components/CardSection/CardSection';
// import { onAuthStateChanged } from 'firebase/auth'

interface postProps {
  post: any;
  Hashtag_Posting: any;
}

//뜨거운 신발
const LikesComponent = () => {
  const setParams = useSetRecoilState(paramsState);
  const { id } = useParams();
  const [postList, setPostList] = useState([]);

  // {value : '신발~' , where :' ' , how:'정렬방법'}
  useEffect(() => {
    const q = query(
      collection(dbService, 'Post'),
      // Category_Posting이 파람스로 넘겨준 애들과 같은 애들만 뿌려줘라
      orderBy('createdAt', 'desc')
      // orderBy('TimeStamp_Posting', 'desc')
    );
    onSnapshot(q, (snapshot) => {
      const getpostList = snapshot.docs.map((doc) => {
        const postList = {
          id: doc.id,
          ...doc.data(),
        };
        return postList;
      });
      setPostList(getpostList);
    });
  }, []);

  console.log(postList);
  // import { useSetRecoilState } from 'recoil
  const navigate = useNavigate();

  //// FilteredDate를 가지고 조회순으로 정렬해주는 함수이다.
  // const DoubledFilterDate =
  //   viewCount === '조회순'
  //     ? [...FilteredDate].sort((a, b) => b.View - a.View)
  //     : viewCount === '좋아요순'
  //     ? [...FilteredDate].sort(
  //         (a, b) => b.LikedUsers.length - a.LikedUsers.length
  //       )
  //     : FilteredDate;

  // switch문 찾아보기

  return (
    <CommonStyles>
      <S.LikedListItem>
        {postList
          .slice(0, 8)
          .sort((a, b) => b.View - a.View)
          .map((post: any) => {
            return <CardSection key={post.id} post={post} />;
          })}
      </S.LikedListItem>
    </CommonStyles>
  );
};
export default LikesComponent;
