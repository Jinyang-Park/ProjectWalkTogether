import MyPageBanner from './banner/MyPageBanner';
import MyPageProfile from './mypageProfile/MyPageProfile';
import MyPageReview from './mypageReview/MyPageReView';
import MyPageWrite from './mypageWrite/MyPageWrite';
import CommonStyles from '../../styles/CommonStyles';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { kakaoUserState, currentUserUid, isLoggedIn } from '../../Recoil/Atom';
import { useRecoilValue } from 'recoil';
import MypageTabbar from './tabbar/MypageTabbar';
import MyPageLike from './likepage/MyPageLike';
import styled from 'styled-components';
import Footer from './../../layout/Footer/Footer';

interface ReviewItem {
  count: number;
  option: string;
}

interface UserInfo {
  email: string | null;
  id: string;
  nickname: string;
  profileImg: string;
  review: ReviewItem[];
  uid: string;
  reviewcount: number;
}

const MyPage = () => {
  let { uid } = useParams();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState('Post');
  const [userInfo, setUserInfo] = useState<UserInfo | null>();

  const loggedIn = useRecoilValue(isLoggedIn);
  const userUid = useRecoilValue(currentUserUid);

  const id = uid || userUid;

  //현재유저가 마이페이지 새로고침시 로그인페이지로 이동하는 오류가 있었다.
  //atom에서 isLoggedIn,currentUserUid,username을 persist를 사용하였으나
  //로그인페이지로 이동되어 기존의 const [id, setId] = useState<string>(uid || '');
  //  const id = uid || userUid; 로 수정,

  // useEffect(() => {
  //   if (id === '') {
  //     if (loggedIn) {
  //       setId(userUid);
  //     } else {
  //       // 로그아웃 상태 시 로그인 페이지로 보냄
  //       navigate('/login');
  //     }
  //   }
  // }, [loggedIn]);을 아래 useEffect 함수로 수정하였더니 마이페이지에서 새로고침시
  //로그인페이지로 넘어가지는 오류를 방지할 수 있었다.

  useEffect(() => {
    if (!uid && !loggedIn) navigate('/login');
  }, [loggedIn]);

  const TabContent = () => {
    switch (currentPage) {
      case MyPageName.Post:
        return <MyPageWrite uid={id} />;
      case MyPageName.Interest:
        return <MyPageLike uid={id} />;
      default:
        return <MyPageWrite uid={id} />;
    }
  };

  return (
    <>
      <CommonStyles>
        {id !== '' && (
          <MyPageWrap>
            <MyPageBanner uid={id} />
            <MyPageProfile uid={id} setUserInfo={setUserInfo} />
            <MyPageReview userInfo={userInfo} />
            <MypageTabbar
              uid={id}
              currentpage={currentPage}
              setCurrentPage={setCurrentPage}
            />

            <TabContent />
          </MyPageWrap>
        )}
      </CommonStyles>
      <Footer />
    </>
  );
};
export default MyPage;

const MyPageWrap = styled.div`
  /* width: 868px; */
  margin: auto;
`;

export enum MyPageName {
  Post = 'Post',
  Interest = 'Interest',
}
