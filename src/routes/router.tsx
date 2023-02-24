import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MainPage from '../pages/MainPage/MainPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import MapPage from '../pages/MapPage/MapPage';
import PostPage from '../pages/PostPage/PostPage';
import DetailPage from '../pages/DetailPage/DetailPage';
import ChattingPage from '../pages/ChatPage/ChattingPage';
import Category from './../pages/Category/Category';
import MyPage2 from '../pages/MyPage/MyPage2';
import { authService, dbService } from '../common/firebase';

import Collection from '../pages/Collection/Collection';
import { useSetRecoilState } from 'recoil';
import { currentUserUid, isLoggedIn } from '../Rocoil/Atom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { ref } from 'firebase/storage';
const Router = () => {
  const [uid, setUid] = useState('');
  useEffect(() => {
    if (authService.currentUser) {
      setUid(authService.currentUser.uid);
    }
  }, []);

  const setIsLoggedIn = useSetRecoilState(isLoggedIn);
  const setCurrentUserUid = useSetRecoilState(currentUserUid);

  const cacheDataToUserDatabase = async (
    uid: string,
    email: string,
    nickname: string,
    profileImg: string
  ) => {
    const docSnap = await getDoc(doc(dbService, 'user', uid));
    if (docSnap.exists()) {
      // Already exists
      const res = await updateDoc(doc(dbService, 'user', uid), {
        email: email,
        nickname: nickname,
        profileImg: profileImg,
        uid: uid,
      });
      console.log(res);
    } else {
      const res = await setDoc(doc(dbService, 'user', uid), {
        email: email,
        nickname: nickname,
        profileImg: profileImg,
        uid: uid,
        id: uid,
      });
      console.log(res);
    }
  };

  // const [gazua, setGazua] = useState<number>(1);

  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log('AuthState observer has been called');
      if (user) {
        // User is logged in
        // alert('로그인되었습니다. -알레한드로');
        setIsLoggedIn(true);
        setCurrentUserUid(user.uid);

        cacheDataToUserDatabase(
          user.uid,
          user.email,
          user.displayName,
          user.photoURL
        );
      } else {
        // User is logged out
        alert('로그아웃되었습니다. 안녕히 잘가세요ㅋ -알레한드로');
        setIsLoggedIn(false);
        setCurrentUserUid('');
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/map' element={<MapPage />} />
        <Route path='/mypage' element={<MyPage2 />} />
        <Route path='/mypage/:uid' element={<MyPage2 />} />
        <Route path='/postpage/' element={<PostPage />} />
        <Route path='/category' element={<Category />} />
        <Route path='/collection/:id' element={<Collection />} />
        <Route path='/detailpage/:id' element={<DetailPage />} />
        <Route path='/chat' element={<ChattingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
