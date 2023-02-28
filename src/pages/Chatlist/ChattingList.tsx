import React, { useEffect } from 'react';
import styled from 'styled-components';
import CommonStyles from './../../styles/CommonStyles';

const MyChattingList = () => {
  return (
    <CommonStyles>
      <div>
        <Boxcontainer>
          <Boxcontents>
            <TittleBox>채팅 목록</TittleBox>
            <ChattingBox>
              <ChattingList>
                <ProfilePhoto></ProfilePhoto>
                <TextBox>
                  <ProfileName>그루트</ProfileName>
                  <ChattingContents>
                    오늘 6시 시간 가능하신가요?오늘 6시 시간 가능하신가요?오늘
                    6시 시간 가능하신가요?오늘 6시 시간 가능하신가요?오늘 6시
                    시간 가능하신가요?오늘 6시 시간 가능하신가요?
                  </ChattingContents>
                </TextBox>
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
    </CommonStyles>
  );
};
export default MyChattingList;

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
  background-color: wheat;
  width: 1024px;
  height: 80%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 1232px) {
    width: 65%;
    height: 70%;
  }
  @media screen and (max-height: 744px) {
    width: 65%;
    height: 90%;
  }
  /* @media screen and (max-height: 584px) {
        width: 65%;
        height: 90%;
    } */
`;

const TittleBox = styled.div`
  margin: 10px;
  height: 70px;
  width: 100%;
  border-bottom: solid 1px black;
  font-size: 40px;
  /* background-color: aqua; */
  @media screen and (max-width: 1024px) {
    font-size: 30px;
  }

  @media screen and (max-width: 360px) {
    font-size: 25px;
  }
`;

const ChattingBox = styled.div`
  width: 100%;
  height: 80%;
  /* background-color: coral; */
  border: 1px solid black;

  //스크롤
  overflow-y: scroll;
  @media screen and (max-height: 744px) {
    height: 70%;
  }
`;

//채탱의 각 리스트
const ChattingList = styled.div`
  width: 98%;
  height: 20%;
  margin: 0.5%;
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
  width: 15%;
  height: 80%;
  margin: 1%;
  margin-left: 2%;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    width: 18%;
    height: 80%;
  }

  @media screen and (max-width: 360px) {
    position: relative;
    width: 35%;
    height: 80%;
    right: 15px;
    bottom: -5px;
    margin-left: 20px;
  }
`;

const TextBox = styled.div`
  width: 80%;
`;

//채팅 이름
const ProfileName = styled.div`
  width: 40%;
  height: 40%;
  left: 1%;
  top: 15%;
  font-size: 25px;

  margin-right: 3%;

  position: relative;

  overflow: hidden;
  /* background-color: antiquewhite; */
  display: inline-block;
  /* word-break: keep-all; */
  /* text-overflow: ellipsis; */

  /* @media screen and (max-width: 1369px) {
        font-size: 25px;
        height: 38px;
        left: 20px;
        top: 30px;
    }

    @media screen and (max-width: 1232px) {
        left: 20px;
        top: 25px;
    } */
  @media screen and (max-width: 1024px) {
    width: 60%;
    font-size: 19px;
    left: 1%;
    top: 15%;
  }
  @media screen and (max-width: 360px) {
    font-size: 13px;
    width: 50%;
    left: -5%;
    top: 15%;
  }
`;

//채팅 최신글
const ChattingContents = styled.div`
  position: relative;
  width: 90%;
  height: 52%;
  font-size: 20px;
  /* margin-top: 50px; */

  left: 1%;
  position: relative;
  overflow: hidden;
  margin-right: 1%;
  /* background-color: darkolivegreen; */
  /* @media screen and (max-width: 1369px) {
        font-size: 25px;
        height: 38px;
        left: 20px;
        top: -18px;
    }

    @media screen and (max-width: 1232px) {
        left: 20px;
        top: -18px;
    } */
  @media screen and (max-width: 1024px) {
    width: 90%;
    height: 39%;
    font-size: 13.5px;
    left: 1%;
    /* top: -18px; */
  }
  @media screen and (max-width: 360px) {
    font-size: 11px;
    width: 90%;
    height: 55%;
    left: -5%;
    top: -4%;
    /* top: -20px; */
  }
`;

// 채팅 시간
const ChattingTime = styled.div`
  width: 10%;
  height: 10%;
  position: relative;
  font-size: 20px;
  /* margin-top: 50px; */
  top: 41%;
  left: -1%;

  @media screen and (max-width: 1025px) {
    font-size: 15px;
    left: -5%;

    /* top: -20px; */
  }
  @media screen and (max-width: 360px) {
    font-size: 10px;
    left: -7%;

    /* top: -20px; */
  }

  /* background-color: cadetblue; */
`;
