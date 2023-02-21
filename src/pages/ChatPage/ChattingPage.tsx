import React from 'react';
import styled from 'styled-components';
import { FiChevronLeft } from 'react-icons/fi';
import { HiOutlinePlus } from 'react-icons/hi';
import CommonStyles from './../../styles/CommonStyles';
import ChattingList from './ChattingList/ChattingList';
import ChattingBox from './ChattingBox/ChattingBox';

const ChattingPage = () => {
  return (
    <CommonStyles>
      <div>
        <Boxcontainer>
          <ChattingList />
          <ChattingBox />
        </Boxcontainer>
      </div>
    </CommonStyles>
  );
};
export default ChattingPage;

const Boxcontainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100vh;
`;

// //채팅리스트 박스
// const ChattingListBox = styled.div`
//   border: 1px solid #bec5d7;
//   background-color: white;
//   width: 292px;
//   height: 564px;
//   margin-top: 28px;
//   border-radius: 4px;
// `;

// //채팅리스트 메세지 박스
// const ChattingListMessage = styled.div`
//   border-bottom: 1px solid #bec5d7;
//   width: 292px;
//   height: 40px;
// `;

// const ChattingListouter = styled.div`
//   overflow-y: scroll;
//   width: 292px;
//   height: 509px;
//   position: relative;

//   /* background-color: blue; */
// `;

// const ChattingFooterBox = styled.div`
//   position: relative;
//   /* top: -1.1px; */
//   height: 15px;
//   width: 280px;
//   border-right: 1px solid #bec5d7;
//   border-top: 1px solid #bec5d7;
//   z-index: 0;
// `;

// const ChattingUserBox = styled.div`
//   width: 280px;
//   height: auto;
//   border-right: 1px solid #bec5d7;
//   border-bottom: 1px solid #bec5d7;
//   z-index: 1;
// `;

// const ChattingUser = styled.div`
//   border-bottom: 1px solid #bec5d7;
//   border-bottom: 1px solid #bec5d7;
//   width: 280px;
//   height: 63px;
// `;

// const ChattingBox = styled.div`
//   border: 1px solid #bec5d7;
//   width: 577px;
//   height: 564px;
//   background-color: white;
//   margin-top: 28px;
//   border-radius: 4px;
// `;

// const ChattingNickname = styled.div`
//   box-sizing: border-box;

//   /* Auto layout */

//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   padding: 2px 0px 2px 16px;
//   gap: 8px;

//   position: relative;
//   width: 576px;
//   height: 40px;

//   /* light blue */

//   border-bottom: 1px solid #bec5d7;
// `;
