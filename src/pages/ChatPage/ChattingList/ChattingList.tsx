import React from 'react';
import * as S from '../ChattingList/ChattingList.style';

function ChattingList() {
  return (
    <>
      <S.ChattingBox>
        <S.ChattingListMessage>
          <S.ChattingListMessageWord>메세지</S.ChattingListMessageWord>
          <S.ChattingListMessagePhoto>
            <img src={require('../../../assets/pungsun.png')} />
          </S.ChattingListMessagePhoto>
        </S.ChattingListMessage>
        <S.ChattingListouter>
          <S.ChattingUserBox>
            <S.ChattingUser></S.ChattingUser>
            <S.ChattingUser></S.ChattingUser>
            <S.ChattingUser></S.ChattingUser>
            <S.ChattingUser></S.ChattingUser>
            <S.ChattingUser></S.ChattingUser>
            <S.ChattingUser></S.ChattingUser>
            <S.ChattingUser></S.ChattingUser>
            <S.ChattingUser></S.ChattingUser>
            <S.ChattingUser></S.ChattingUser>
            <S.ChattingUser></S.ChattingUser>
            <S.ChattingUser></S.ChattingUser>
            <S.ChattingUser></S.ChattingUser>
          </S.ChattingUserBox>
        </S.ChattingListouter>
        <S.ChattingFooterBox />
      </S.ChattingBox>
    </>
  );
}

export default ChattingList;
