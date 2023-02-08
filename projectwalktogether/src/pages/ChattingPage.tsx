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
`;

//채팅 사진
const ProfilePhoto = styled.div`
    border: 1px solid black;
    border-radius: 50%;
    background-color: #83e4f35f;
    width: 100px;
    height: 80%;
    margin: 10px;
    margin-left: 30px;
    overflow: hidden;
`;

//채팅 이름
const ProfileName = styled.div`
    width: 200px;
    height: 50px;
    left: 30px;
    top: 35px;
    font-size: 40px;
    margin-top: 5px;
    margin-right: 20px;

    position: relative;

    overflow: hidden;
    /* background-color: antiquewhite; */
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
