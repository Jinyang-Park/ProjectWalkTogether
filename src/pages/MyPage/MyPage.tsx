import MyPageBanner from './banner/MyPageBanner';
import MyPageProfile from './mypageProfile/MyPageProfile';
import MyPageReview from './mypageReview/MyPageReView';
import MyPageWrite from './mypageWrite/MyPageWrite';
import CommonStyles from '../../styles/CommonStyles';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { kakaoUserState, currentUserUid, isLoggedIn } from '../../Rocoil/Atom';
import { useRecoilValue } from 'recoil';
import MypageTabbar from './tabbar/MypageTabbar';
import MyPageLike from './likepage/MyPageLike';
import styled from 'styled-components';

const MyPage = () => {
  let { uid } = useParams();
  const navigate = useNavigate();

  const [id, setId] = useState<string>(uid || '');
  const [currentPage, setCurrentPage] = useState('Post');

  const kakaoUser = useRecoilValue(kakaoUserState);
  const loggedIn = useRecoilValue(isLoggedIn);
  const userUid = useRecoilValue(currentUserUid);

  useEffect(() => {
    if (id === '') {
      if (loggedIn) {
        setId(userUid);
      } else {
        // 로그아웃 상태 시 로그인 페이지로 보냄
        navigate('/login');
      }
    }
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
    <CommonStyles>
      {id !== '' && (
        <MyPageWrap>
          <MyPageBanner uid={id} />
          <MyPageProfile uid={id} />
          {/* <MyPageReview /> */}
          <MypageTabbar
            currentpage={currentPage}
            setCurrentPage={setCurrentPage}
          />

          <TabContent />
        </MyPageWrap>
      )}
    </CommonStyles>
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
