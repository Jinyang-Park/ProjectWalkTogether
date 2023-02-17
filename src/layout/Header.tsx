import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import logoImg from '../../src/assets/shoes.png';
import { useNavigate } from 'react-router-dom';
import CommonStyles from '../styles/CommonStyles';
const Header = () => {
  const navigate = useNavigate();

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
            <NavText to='/'>Home</NavText>
          </NavLi>
          <NavLi>
            <NavText to='/map'>Map</NavText>
          </NavLi>
          <NavLi>
            <NavText to='/chat'>chat</NavText>
          </NavLi>
          <NavLi>
            <NavText to='/category'>카테고리</NavText>
          </NavLi>
          <NavLi>
            <NavText to='/postpage'>글쓰기</NavText>
          </NavLi>
          <NavLi>
            <NavText to='/detailpage'>상세</NavText>
          </NavLi>
        </NavUl>
        <NavEtc>
          <Profile onClick={gotomy}>닉네임</Profile>
          <LoginButton onClick={handleLogin}>Login</LoginButton>
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
  font-size: 16px;
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
