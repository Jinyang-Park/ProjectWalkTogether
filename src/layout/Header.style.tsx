import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
  height: 52px;
  background-color: #e4e4e4;
  width: 100%;
`;

export const Nav = styled.div`
  display: flex;
  margin: auto;
  width: 868px;

  align-items: center;
  justify-content: space-between;
`;

export const NavUl = styled.ul`
  display: flex;
`;

export const NavLi = styled.li`
  list-style: none;
  margin-right: 2.25rem;
  margin-top: 10px;
  text-decoration: none;
`;
export const NavText = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 16px;
`;
export const LoginButton = styled.button`
  border: none;
  margin: 0 auto;
  padding: 10px;
  margin-top: 10px;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  border-radius: 5px;
  width: max-content;
  background: white;
  font-size: 12px;
  color: black;
`;
export const NavEtc = styled.div`
  display: flex;
  margin: 0px;
`;
export const Profile = styled.div`
  padding-top: 0.625rem;

  font-size: 12px;
`;
export const Logo = styled.img`
  height: 3.125rem;
  cursor: pointer;
`;
export const DropdownButton = styled.div`
  cursor: pointer;
`;

export const DropdownContainer = styled.div`
  position: relative;
  text-align: center;
`;

export const MyPageContainer = styled(DropdownContainer)``;

export const Ul = styled.ul`
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
export const Li = styled.li``;

export const DropNav = styled.nav<{ isDropped: boolean }>`
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
export const Logout = styled.div``;
