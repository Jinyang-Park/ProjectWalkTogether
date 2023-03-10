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
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { dbService } from '../../common/firebase';
import User from '../../types/User';
import { useUser } from '../../api/userApi';

const MyPage = () => {
  let { uid } = useParams();
  const navigate = useNavigate();

  const userUid = useRecoilValue(currentUserUid);
  const loggedIn = useRecoilValue(isLoggedIn);

  const id = uid || userUid;

  useEffect(() => {
    if (!uid && !loggedIn) navigate('/login');
  }, []);

  // Code was fucked up, had to patch it hastily
  // - RIP Alejandro

  const userInfo: User = useUser(id);

  const [currentPage, setCurrentPage] = useState<string>(MyPageName.Post);

  const TabContent = () => {
    if (id) {
      switch (currentPage) {
        case MyPageName.Post:
          return <MyPageWrite uid={userInfo} />;
        case MyPageName.Interest:
          return <MyPageLike uid={userInfo} />;
        default:
          return <MyPageWrite uid={userInfo} />;
      }
    }
  };

  return (
    <CommonStyles>
      <MyPageWrap>
        <MyPageBanner userInfo={userInfo} />
        <MyPageProfile userInfo={userInfo} />
        {/* <MyPageReview /> */}
        <MypageTabbar
          uid={id}
          currentpage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <TabContent />
      </MyPageWrap>
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
