import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  currentKakaoId,
  currentUserUid,
  isLoggedIn,
  username,
  userForChat,
  ThumbnailUpload,
} from '../../Rocoil/Atom';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { ref } from 'firebase/storage';
import { authService, dbService } from '../../common/firebase';
import { useNavigate } from 'react-router-dom';

export default function AuthStateListener() {
  const navigate = useNavigate();

  const setIsLoggedIn = useSetRecoilState(isLoggedIn);
  const setCurrentUserUid = useSetRecoilState(currentUserUid);
  const setUsername = useSetRecoilState(username);

  // 테스트용
  const a = useRecoilValue(ThumbnailUpload);
  useEffect(() => {
    console.log('썸네일이 변경되없습니다', a);
  }, [a]);

  const setCurrentKakaoId = useSetRecoilState(currentKakaoId);

  const setUserForChat = useSetRecoilState(userForChat);

  const cacheDataToUserDatabase = async (
    // kakaoId: string,
    uid: string,
    email: string,

    nickname: string,
    profileImg: string
  ) => {
    const docSnap = await getDoc(doc(dbService, 'user', uid));
    // const kakaoSnap = await getDoc(doc(dbService, 'kakaoData', `${kakaoId}`));

    if (docSnap.exists()) {
      // Already exists
      const res = await updateDoc(doc(dbService, 'user', uid), {
        email: email,
        nickname: nickname,
        profileImg: profileImg,
        uid: uid,
      });
    } else {
      const res = await setDoc(doc(dbService, 'user', uid), {
        email: email,
        nickname: nickname,
        profileImg: profileImg,
        uid: uid,
        id: uid,
      });
    }
  };

  // await setDoc(doc(dbService, 'kakaoData', `${kakaoId}`), {
  //   login: true,
  //   name: nickname,
  //   date: connectedAt,
  //   email: email,
  //   image: image,
  // });

  // 최상위에 있는 이유
  //
  // onAuthStateChanged = 옵저버
  // 서버에서 authState가 바뀌었을 때 호출되는 함수
  // login, logout 시 호출
  //
  // login, logout을 할 때 이 컴포넌트가 존재해야 됨
  // 모든 페이지에서 존재하는 게 좋음

  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      // console.log('AuthState observer has been called');
      if (user) {
        // User is logged in
        console.log(user);

        // alert('로그인되었습니다. -알레한드로');
        const useruid = user.uid;
        const myporfile = user.photoURL;
        const mynickname = user.displayName;
        const nowuser: any = {
          useruid,
          myporfile,
          mynickname,
        };
        console.log(user.uid);
        //첫로그인
        setIsLoggedIn(true);
        setCurrentUserUid(user.uid);
        console.log(user.displayName);
        setUsername(user.displayName);
        setUserForChat(nowuser);

        cacheDataToUserDatabase(
          // user.kakaoId,
          user.uid,
          user.email,
          user.displayName,
          user.photoURL
        );
      } else {
        // User is logged out
        // alert('로그아웃되었습니다. 안녕히 잘가세요ㅋ -알레한드로');
        setIsLoggedIn(false);
        setCurrentUserUid('');
        // setCurrentKakaoId('');
        setUsername('');
        navigate('/');
      }
    });
  }, []);

  return <></>;
}
