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

import Collection from '../pages/Collection/Collection';
import AuthStateListener from '../components/AuthStateListener/AuthStateListener';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import MessageWindow, {
  MessageWindowLogoType,
  MessageWindowProperties,
  messageWindowPropertiesAtom,
} from '../messagewindow/MessageWindow';
const Router = () => {
  const setState = useSetRecoilState<MessageWindowProperties>(
    messageWindowPropertiesAtom
  );

  return (
    <BrowserRouter>
      <AuthStateListener />
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
