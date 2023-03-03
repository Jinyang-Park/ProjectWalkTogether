import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FiChevronLeft } from 'react-icons/fi';
import { HiOutlinePlus } from 'react-icons/hi';
import CommonStyles from './../../styles/CommonStyles';
import ChattingList from './ChattingList/ChattingList';
import ChattingBox from './ChattingBox/ChattingBox';

import { useNavigate } from 'react-router-dom';

const ChattingPage = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const re = () => {
  //     navigate('/chat');
  //     re();
  //   };
  // }, []);
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
