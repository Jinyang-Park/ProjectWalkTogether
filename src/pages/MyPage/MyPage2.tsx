import MyPageBanner from './banner/MyPageBanner';
import MyPageProfile from './mypageProfile/MyPageProfile';
import MyPageReView from './mypageReview/MyPageReView';
import MyPageWrite from './mypageWrite/MyPageWrite';
import CommonStyles from '../../styles/CommonStyles';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { authService } from '../../common/firebase';
const MyPage2 = () => {
  let { uid } = useParams();
  const navigate = useNavigate();
  const [id, setId] = useState<string>(uid || '');

  useEffect(() => {
    if (authService.currentUser && id === '') {
      console.log(authService.currentUser.uid);
      setId(authService.currentUser.uid);
    }
    setTimeout(() => {
      console.log(authService.currentUser);

      if (!authService.currentUser.uid) navigate('/login');
    }, 100);
  }, []);
  return (
    <CommonStyles>
      {id !== '' && (
        <>
          <MyPageBanner uid={id} />
          <MyPageProfile uid={id} />
          <MyPageReView />
          <MyPageWrite uid={id} />
        </>
      )}
    </CommonStyles>
  );
};
export default MyPage2;
