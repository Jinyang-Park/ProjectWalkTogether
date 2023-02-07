import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
const {
  MainPage,
  LoginPage,
  SignUpPage,
  MapPage,
  MyPage,
  CategoryPage,
  DetailPage,
  PostPage,
  ChattingPage,
} = require('../pages');
const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/map' element={<MapPage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/catetory' element={<CategoryPage />} />
        <Route path='/postpage' element={<PostPage />} />
        <Route path='/detailpage' element={<DetailPage />} />
        <Route path='/chat' element={<ChattingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
