import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
// import logoImg from '../../src/assets/shoes.png';
import { useNavigate } from 'react-router-dom';
import useLoginState from '../hooks/useLoginState';
import useDetectClose from '../hooks/useDetectClose';
import KakaoLogoutButton from '../components/Logout/kakaologout';

const Header = () => {
  const navigate = useNavigate();
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  const { isLoggedIn, isAuthorizedInSession, userObjParsed } = useLoginState();
  const handleLogin = () => {
    navigate('login');
  };
  const gotomy = () => {
    navigate('mypage');
  };

  return (
    <NavContainer>
      <Nav>
        <NavUl>
          <NavLi>
            <NavText to="/">Home</NavText>
          </NavLi>
          <NavLi>
            <NavText to="/map">Map</NavText>
          </NavLi>
          <NavLi>
            <NavText to="/chat">chat</NavText>
          </NavLi>
          <NavLi>
            <NavText to="/category">카테고리</NavText>
          </NavLi>
          <NavLi>
            <NavText to="/postpage">글쓰기</NavText>
          </NavLi>
          <NavLi>
            <NavText to="/detailpage">상세</NavText>
          </NavLi>
        </NavUl>
        <NavEtc>
          <Profile onClick={gotomy}>닉네임</Profile>

          <MyPageContainer>
            {isLoggedIn && isAuthorizedInSession ? (
              <DropdownButton onClick={myPageHandler} ref={myPageRef}>
                <LoginButton> {userObjParsed.displayName} </LoginButton>
                <DropNav isDropped={myPageIsOpen}>
                  <Ul>
                    <Li>
                      <Profile onClick={gotomy}>마이페이지</Profile>
                    </Li>
                    <Li>
                      <Profile onClick={gotomy}>닉네임</Profile>
                    </Li>
                    <Li>
                      <KakaoLogoutButton />
                    </Li>
                    <Li>
                      <NavText to="/postpage">글쓰기</NavText>
                    </Li>
                  </Ul>
                </DropNav>
              </DropdownButton>
            ) : (
              <LoginButton onClick={handleLogin}>Login</LoginButton>
            )}
          </MyPageContainer>
        </NavEtc>
      </Nav>
    </NavContainer>
  );
};

export default Header;

const NavContainer = styled.div`
  height: 52px;
  background-color: #e4e4e4;
  width: 100%;
`;

const Nav = styled.div`
  display: flex;
  margin: auto;
  width: 868px;

  align-items: center;
  justify-content: space-between;
`;

const NavUl = styled.ul`
  display: flex;
`;

const NavLi = styled.li`
  list-style: none;
  margin-right: 2.25rem;
  margin-top: 10px;
  text-decoration: none;
`;
const NavText = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 12px;
`;
const LoginButton = styled.button`
  border: none;
  margin: 0 auto;
  margin-top: 10px;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  border-radius: 5px;
  width: 3.25rem;
  background: white;
  font-size: 12px;
  color: black;
`;
const NavEtc = styled.div`
  display: flex;
  margin: 0px;
`;
const Profile = styled.div`
  padding-top: 0.625rem;

  font-size: 12px;
`;
const Logo = styled.img`
  height: 3.125rem;
  cursor: pointer;
`;
const DropdownButton = styled.div`
  cursor: pointer;
`;

const DropdownContainer = styled.div`
  position: relative;
  text-align: center;
`;

const MyPageContainer = styled(DropdownContainer)``;

const Ul = styled.ul`
  & > li {
    margin-bottom: 15px;
  }
  & > li:first-of-type {
    margin-top: 15px;
  }
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Li = styled.li``;

const DropNav = styled.nav<{ isDropped: boolean }>`
  background: #60a5f8;
  position: absolute;
  top: 52px;
  left: 50%;
  width: 100px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;
  &:after {
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom-color: #60a5f8;
  }
  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: 50%;
    `};
`;
const Logout = styled.div``;
