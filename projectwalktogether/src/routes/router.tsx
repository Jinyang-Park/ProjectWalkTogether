import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import MainPage from "../pages/MainPage";
import MyPage from "../pages/MyPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import MapPage from "../pages/MapPage";
import CategoryPage from "../pages/CategoryPage";
import PostPage from "../pages/PostPage";
import DetailPage from "../pages/DetailPage";
import ChattingPage from "../pages/ChattingPage";
import MyChattingList from "../pages/ChattingList";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/catetory" element={<CategoryPage />} />
                <Route path="/postpage" element={<PostPage />} />
                <Route path="/detailpage" element={<DetailPage />} />
                <Route path="/chat" element={<ChattingPage />} />
                <Route path="/chatlist" element={<MyChattingList />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
