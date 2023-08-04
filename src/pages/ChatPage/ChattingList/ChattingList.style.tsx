import styled, { css } from 'styled-components';

//최상단 div
export const ChattingBox = styled.div`
  border: 1px solid #bec5d7;
  width: 292px;
  height: 564px;
  background-color: white;
  border-radius: 4px;
  @media screen and (max-width: 430px) {
    width: 430px;
    position: relative;
    left: 0px;
    bottom: 25px;
    height: 100%;
    border-radius: 0;
    display: none;
  }
`;

//채팅리스트 메세지 박스
export const ChattingListMessage = styled.div`
  border-bottom: 1px solid #bec5d7;
  width: 292px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 430px) {
    width: 428px;
    border-bottom: 1px solid #bec5d7;
  }
`;

export const ChattingListMessageWord = styled.div`
  width: 50px;
  height: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height */
  /* Dark blue */
  color: #24264e;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ChattingListMessagePhoto = styled.div`
  width: 12px;
  height: 12px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const ChattingListBallon = styled.img``;

// 채팅 리스트에서 최신글/닉네임/이미지를 감싸는 곳
export const ChattingListouter = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  width: 300px;
  height: 509px;
  position: relative;
  @media screen and (max-width: 430px) {
    width: 430px;
    height: 100%;
  }
`;

export const ChattingUserBox = styled.div`
  width: 290px;
  height: auto;
  z-index: 1;
  @media screen and (max-width: 430px) {
    width: 430px;
  }
`;

export const ChattingUserContents = styled.div`
  width: 291px;
  height: auto;
  display: flex;
  @media screen and (max-width: 430px) {
    width: 420px;
    border-right: 1px solid #bec5d7;
  }
`;

export const ChattingUser = styled.div`
  display: flex;
  border-bottom: 1px solid #bec5d7;
  width: 290px;
  height: 63px;
  cursor: pointer;
  :active {
    background-color: #eef1f7;
  }
  @media screen and (max-width: 430px) {
    width: 430px;
  }
`;

export const UserImg = styled.img`
  width: 35.56px;
  height: 35.56px;
  position: relative;
  border-radius: 30px;
`;

export const UserImgCover = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  border-radius: 30px;
  margin: 12px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(53, 100, 187, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserName = styled.div`
  position: relative;
  top: 2px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #24264e;
`;

export const NickNMessage = styled.div`
  position: relative;
  top: 14px;
`;

export const LastConversation = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #7d8bae;
`;

export const GreenLight = styled.div`
  background-color: #1be08d;
  width: 8px;
  height: 8px;
  position: relative;
  right: 30px;
  top: 25px;
  border-radius: 30px;
`;

export const ChatImg = styled.img``;

export const ChattingFooterBox = styled.div`
  position: relative;
  /* top: -1.1px; */
  height: 15px;
  width: 291px;
  border-top: 1px solid #bec5d7;
  z-index: 0;
  @media screen and (max-width: 430px) {
    display: none;
  }
`;
