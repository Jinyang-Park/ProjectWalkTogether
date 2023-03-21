import React from 'react';
import styled from 'styled-components';

const NotFoundPage = () => {
  return (
    <ErrBackground>
      <ErrLayout>
        <ErrImg src={require('../../assets/messageWindow/Rocket.png')} />
        <ErrText>페이지를 찾을 수 없습니다.</ErrText>
      </ErrLayout>
    </ErrBackground>
  );
};

export default NotFoundPage;

const ErrBackground = styled.div`
  display: flex;
  align-items: center;
  /* align-items: center; */
  justify-content: center;
  min-height: calc(100vh - 292px);

  position: relative;
`;
const ErrImg = styled.img`
  width: 172px;
  height: 172px;
  margin: 80px 0;
  margin: auto;
`;
const ErrText = styled.p`
  font-size: 50px;
  text-align: center;
  font-family: 'SUITERegular';
  font-weight: 600;
  font-size: 24px;
`;
const ErrLayout = styled.div`
  width: 868px;
`;
