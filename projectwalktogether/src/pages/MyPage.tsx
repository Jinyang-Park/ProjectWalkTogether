import React from 'react';
import styled from 'styled-components';
import LikePage from './MyPage/LikePost';
import WhatIWorte from './MyPage/WhatIWrote';
import { AiFillEdit } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';

const MyPage = () => {
  return (
    <>
      <TemporaryHeader>Header</TemporaryHeader>
      <ImgAndNameWrap>
        <ImgAndNameContainer>
          <ImgWrap>
            <ImgChange src={'/assets/hodu.jpg'}></ImgChange>
          </ImgWrap>
          <NameContainer>
            <NameChange>강아지</NameChange>
            <NameChangeBtn>버튼</NameChangeBtn>
          </NameContainer>
        </ImgAndNameContainer>
      </ImgAndNameWrap>
      <MannerWrap>
        <MannerContainer>
          <ReceiveManner>받은 매너 평가</ReceiveManner>
          <MannerDetail>
            <AccountIcon />
            <MannerScore>2</MannerScore>
            <MannerComment>친절하고 매너가 좋아요!</MannerComment>
          </MannerDetail>
          <MannerDetail>
            <AccountIcon />
            <MannerScore>5</MannerScore>
            <MannerComment>재미있어요!</MannerComment>
          </MannerDetail>
          <MannerDetail>
            <AccountIcon />
            <MannerScore>1</MannerScore>
            <MannerComment>자상하고 편안했어요!</MannerComment>
          </MannerDetail>
        </MannerContainer>
      </MannerWrap>
      <MyPageWrapper>
        <LikedWrapper>
          <LikedContainer>
            <LikePostTitle>좋아요한 글</LikePostTitle>
          </LikedContainer>
          <LikePage />
        </LikedWrapper>
        <LikedWrapper>
          <LikedContainer>
            <LikePostTitle>내가 쓴 글</LikePostTitle>
          </LikedContainer>
          <WhatIWorte />
        </LikedWrapper>
      </MyPageWrapper>
    </>
  );
};
export const TemporaryHeader = styled.div`
  height: 120px;
  background-color: aqua;
`;
const MyPageWrapper = styled.div`
  margin: 0 auto;
`;

const ImgAndNameWrap = styled.div`
  background-color: #e5f2c9;
  height: 600px;
  padding: 10px;
`;
const ImgAndNameContainer = styled.div`
  display: flex;
  background-color: #f2d3c9;
  padding: 10px;
  width: 80%;
  height: 500px;
  margin: 30px auto;
`;
const ImgWrap = styled.div``;
const ImgChange = styled.img`
  width: 500px;
  border-radius: 50%;
  margin: auto 40px;
`;
const NameContainer = styled.div`
  display: flex;
`;
const NameChange = styled.div`
  margin-top: 200px;
  font-size: 60px;
`;
const NameChangeBtn = styled.button`
  margin-left: 1300px;
  height: 0px;
  margin-top: 200px;
  font-size: 60px;
`;

const EditIcon = styled(AiFillEdit)`
  margin-top: 30px;
  font-size: 80px;
  margin-left: 400px;
`;
const MannerWrap = styled.div`
  background-color: #f5e4b8;
  width: 100%;
  height: 800px;
`;
const MannerContainer = styled.div`
  background-color: #99f2a6;
  width: 40%;
  height: 600px;
  margin: 30px auto;
  text-align: center;
`;
const ReceiveManner = styled.div`
  font-size: 60px;
`;
const MannerDetail = styled.div`
  display: flex;
`;
const AccountIcon = styled(MdAccountCircle)`
  font-size: 60px;
  margin-left: 380px;
`;

const MannerScore = styled.div`
  font-size: 60px;
`;
const MannerComment = styled.div`
  font-size: 30px;
`;

export const LikedWrapper = styled.div`
  width: 100%;
  padding: 0 1.23rem;
  margin: 0 auto 50px;
`;
export const LikedContainer = styled.div`
  padding: 0 19px;
  margin: 0 auto;
  margin-top: 200px;
  margin-bottom: 50px;
  margin-left: 6rem;
  margin-right: 6rem;
`;
const LikePostTitle = styled.h1`
  margin: 0 0 4px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.46;
  letter-spacing: -0.6px;
  text-align: left;
  color: #212121;
  padding: 0 19px;
`;

export default MyPage;
