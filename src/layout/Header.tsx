import React, { useEffect, useState } from 'react';
import * as S from './Header.style';
import { useNavigate, Link, useLocation } from 'react-router-dom';
// import logoImg from '../../src/assets/shoes.png';
import { useRecoilState, useRecoilValue } from 'recoil';
import { authService } from '../common/firebase';
import useDetectClose from '../hooks/useDetectClose';
import KakaoLogoutButton from '../components/Logout/kakaologout';
import { isLoggedIn, kakaoState, username } from '../Rocoil/Atom';

const Header = () => {
  const location = useLocation();
  const history = useNavigate();
  const navigate = useNavigate();
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  const loggedIn = useRecoilValue(isLoggedIn);
  const [kakaoCode, setKakaoCode] = useRecoilState(kakaoState);

  const getKakaoCode = () => {
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      setKakaoCode(code);
      console.log(code);
    }
  };

  const handleLogin = () => {
    navigate('login');
  };
  const gotomy = () => {
    navigate('mypage');
  };
  const sessionId = useRecoilValue(username);
  console.log(sessionId);
  getKakaoCode();
  //const currentUser = authService.currentUser;
  //const userNickName = currentUser?.displayName;
  //localId !== null

  return (
    <S.NavContainer>
      <S.Nav>
        <S.NavUl>
          <S.NavLi>
            <S.NavText to='/'>홈</S.NavText>
          </S.NavLi>
          <S.NavLi>
            <S.NavText to='/map'>지도</S.NavText>
          </S.NavLi>
          {/* <S.NavLi>
            <S.NavText to="/chat">chat</S.NavText>
          </S.NavLi> */}
          <S.NavLi>
            {loggedIn === false ? (
              <S.NavText
                onClick={() => {
                  alert('로그인을 해주세요!');
                }}
                to='/login'
              >
                글 쓰기
              </S.NavText>
            ) : (
              <S.NavText to='/postpage'>글 쓰기</S.NavText>
            )}
          </S.NavLi>
          <S.NavLi>
            {loggedIn === false ? (
              <S.NavText
                onClick={() => {
                  alert('로그인을 해주세요!');
                }}
                to='/login'
              >
                채팅
              </S.NavText>
            ) : (
              <S.NavText to='/chat'>채 팅</S.NavText>
            )}
          </S.NavLi>

          {/* <S.NavLi>
            <S.NavText to="/detailpage">상세</S.NavText>
          </S.NavLi> */}
        </S.NavUl>

        <S.NavEtc>
          {/* <S.Profile onClick={gotomy}>닉네임</S.Profile> */}

          <S.MyPageContainer>
            {loggedIn || kakaoCode ? (
              <S.DropdownButton onClick={myPageHandler} ref={myPageRef}>
                <S.LoginButton> {sessionId} </S.LoginButton>

                <S.DropNav isDropped={myPageIsOpen}>
                  <S.Ul>
                    <S.Li>
                      <S.Profile onClick={gotomy}>마이페이지</S.Profile>
                    </S.Li>
                    <S.Li>
                      <S.Profile onClick={gotomy}>닉네임</S.Profile>
                    </S.Li>
                    <S.Li>
                      <KakaoLogoutButton />
                    </S.Li>
                    <S.Li>
                      <S.NavText to='/postpage'>글쓰기</S.NavText>
                    </S.Li>
                  </S.Ul>
                </S.DropNav>
              </S.DropdownButton>
            ) : (
              <S.LoginButton onClick={handleLogin}>Login</S.LoginButton>
            )}
          </S.MyPageContainer>
        </S.NavEtc>
      </S.Nav>
    </S.NavContainer>
  );
};

export default Header;
