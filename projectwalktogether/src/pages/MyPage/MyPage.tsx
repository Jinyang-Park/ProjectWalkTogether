import React from 'react';
import styled from 'styled-components';
import LikePage from './LikePost';
import WhatIWorte from './WhatIWrote';
import { AiFillEdit } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';

const MyPage = () => {
    return (
        <>
            <ImgAndNameWrap>
                <ImgAndNameContainer>
                    <ImgWrap>
                        <ImgChange src={'/assets/hodu.jpg'}></ImgChange>
                    </ImgWrap>
                    <NameContainer>
                        <NickNameWrap>
                            <NameChange>강아지</NameChange>
                            <EditIcon />
                        </NickNameWrap>
                    </NameContainer>
                    <div>산책완료 2</div>
                </ImgAndNameContainer>
            </ImgAndNameWrap>
            <MannerWrap>
                <MannerContainer>
                    <ReceiveManner>받은 매너 평가</ReceiveManner>
                    <MannerBox>
                        <MannerDetail>
                            <AccountIcon />
                            <MannerScore>2</MannerScore>
                            <MannerComment>
                                친절하고 매너가 좋아요!
                            </MannerComment>
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
                    </MannerBox>
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

const MyPageWrapper = styled.div`
    margin: 0 auto;
`;

const ImgAndNameContainer = styled.div`
    display: flex;
    /* background-color: #f2d3c9; */
    padding: 50px;
    width: 60%;
    height: 400px;
    margin: 0 auto 50px;
    margin-top: 50px;
`;
const ImgAndNameWrap = styled.div`
    /* background-color: #e5f2c9; */
    height: 600px;
    padding: 10px;
`;
const ImgWrap = styled.div``;
const ImgChange = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin: auto 40px;
`;
const NameContainer = styled.div`
    position: relative;
`;
const NickNameWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 60px;
    margin-left: 20px;
    border-bottom: 1px solid #ddd;
`;
const NameChange = styled.div`
    font-size: 60px;
`;
const EditIcon = styled(AiFillEdit)`
    font-size: 80px;
    margin-left: 200px;
`;
const MannerWrap = styled.div`
    /* background-color: #f5e4b8; */
    width: 100%;
`;
const MannerContainer = styled.div`
    /* background-color: #99f2a6; */
    margin: 0 auto;
    width: 30%;
    /* margin: 30px auto; */
    /* text-align: center; */
`;
const ReceiveManner = styled.p`
    font-size: 60px;
`;
const MannerBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
const MannerDetail = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
`;
const AccountIcon = styled(MdAccountCircle)`
    font-size: 60px;
`;

const MannerScore = styled.p`
    font-size: 30px;
    padding-left: 10px;
    padding-right: 10px;
`;
const MannerComment = styled.div`
    font-size: 20px;
    padding: 10px 30px;
    border-radius: 40px;
    background-color: gray;
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
