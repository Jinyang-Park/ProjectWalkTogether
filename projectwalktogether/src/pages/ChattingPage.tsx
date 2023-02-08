import React from "react";
import styled from "styled-components";

const ChattingPage = () => {
    return (
        <div>
            <Boxcontainer>
                <Boxcontents>
                    <TittleBox>채팅 목록</TittleBox>
                    <ChattingBox>
                        <ChattingList>
                            <ProfilePhoto></ProfilePhoto>
                            <ProfileName>그루트</ProfileName>
                            <ChattingContents>
                                오늘 6시 시간 가능하신가요?
                            </ChattingContents>
                            <ChattingTime>10:21</ChattingTime>
                        </ChattingList>
                        <ChattingList>
                            <ProfilePhoto></ProfilePhoto>
                            <ProfileName>
                                아이엠그루트아이엠..그루트
                            </ProfileName>
                            <ChattingContents>
                                오늘 6시 시간 가능하신가요?오늘 6시 시간
                                가능하신가요?
                            </ChattingContents>
                            <ChattingTime>10:21</ChattingTime>
                        </ChattingList>
                        <ChattingList>
                            <ProfilePhoto></ProfilePhoto>
                            <ProfileName>억울하게닮은현빈</ProfileName>
                            <ChattingContents>
                                저! 바로가능해요!!!
                            </ChattingContents>
                            <ChattingTime>10:21</ChattingTime>
                        </ChattingList>
                        <ChattingList></ChattingList>
                        <ChattingList></ChattingList>
                        <ChattingList></ChattingList>
                        <ChattingList></ChattingList>
                        <ChattingList></ChattingList>
                    </ChattingBox>
                </Boxcontents>
            </Boxcontainer>
        </div>
    );
};
export default ChattingPage;

const Boxcontainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: blue; */
    width: 100%;
    height: 100vh;
`;

const Boxcontents = styled.div`
    border-radius: 20px;
    /* background-color: wheat; */
    width: 60%;
    height: 80%;
    margin: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const TittleBox = styled.div`
    margin: 10px;
    height: 70px;
    width: 100%;
    border-bottom: solid 1px black;
    font-size: 40px;
    /* background-color: aqua; */
`;

const ChattingBox = styled.div`
    width: 100%;
    height: 80%;
    /* background-color: coral; */
    border: 1px solid black;

    //스크롤
    overflow-y: scroll;
`;

//채탱의 각 리스트
const ChattingList = styled.div`
    width: 95%;
    height: 20%;
    margin: 5px;
    background-color: white;
    border: 1px solid black;
    display: flex;
    overflow: hidden;
`;

//채팅 사진
const ProfilePhoto = styled.div`
    border: 1px solid black;
    border-radius: 50%;
    background-color: #83e4f35f;
    width: 6.25rem;
    height: 80%;
    margin: 10px;
    margin-left: 30px;
    overflow: hidden;
    @media screen and (max-width: 1232px) {
        width: 140px;
        height: 80%;
    }
    @media screen and (max-width: 983px) {
        width: 150px;
        height: 80%;
        margin-left: 10px;
    }
    @media screen and (max-width: 832px) {
        position: relative;
        width: 250px;
        height: 80%;
        right: 20px;
        margin-left: 30px;
    }
    @media screen and (max-width: 557px) {
        position: relative;
        width: 700px;
        height: 80%;
        right: 15px;
        bottom: 5px;
        margin-left: 25px;
    }
`;

//채팅 이름
const ProfileName = styled.div`
    width: 200px;
    height: 50px;
    left: 30px;
    top: 25px;
    font-size: 40px;
    margin-top: 5px;
    margin-right: 20px;

    position: relative;

    overflow: hidden;
    /* background-color: antiquewhite; */

    @media screen and (max-width: 1369px) {
        font-size: 25px;
        height: 38px;
        left: 20px;
        top: 30px;
    }

    @media screen and (max-width: 1232px) {
        left: 20px;
        top: 25px;
    }
    @media screen and (max-width: 1079px) {
        width: 220px;
        font-size: 30px;
        left: 20px;
        top: 25px;
    }
    @media screen and (max-width: 890px) {
        font-size: 20px;
        width: 250px;
        height: 30px;
        left: 5px;
        top: 25px;
    }

    @media screen and (max-width: 557px) {
        font-size: 10px;
        width: 500px;
        height: 14px;
        left: -10px;
        top: 30px;
    }
`;

//채팅 최신글
const ChattingContents = styled.div`
    position: relative;
    width: 500px;
    height: 38px;
    font-size: 25px;
    margin-top: 50px;
    left: 30px;
    position: relative;
    overflow: hidden;
    /* background-color: darkolivegreen; */
    @media screen and (max-width: 1369px) {
        font-size: 25px;
        height: 38px;
        left: 20px;
        top: -18px;
    }

    @media screen and (max-width: 1232px) {
        left: 20px;
        top: -18px;
    }
    @media screen and (max-width: 1079px) {
        width: 220px;
        font-size: 30px;
        left: 20px;
        top: -18px;
    }
    @media screen and (max-width: 890px) {
        font-size: 20px;
        width: 250px;
        height: 30px;
        left: 5px;
        top: -20px;
    }

    @media screen and (max-width: 557px) {
        font-size: 10px;
        width: 500px;
        height: 14px;
        left: -10px;
        top: -14px;
    }
`;

// 채팅 시간
const ChattingTime = styled.div`
    width: 70px;
    height: 40px;
    position: relative;
    font-size: 20px;
    margin-top: 50px;
    left: 80px;
    /* background-color: cadetblue; */
`;
