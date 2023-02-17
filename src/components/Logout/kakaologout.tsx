import React from 'react';
import styled from 'styled-components';
import { authService } from '../../common/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
export default function KakaoLogoutButton() {
  const navigate = useNavigate();
  const REST_API_KEY = '06264d97cddc6d0d5ef77a0f28d69af9';
  const REDIRECT_URI = 'http://localhost:3000/';
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const Logout = async () => {
    const AccessToken = window.localStorage.getItem('token_for_kakaotalk');
    console.log(AccessToken);
    const islogout = await fetch('https://kapi.kakao.com/v1/user/logout', {
      headers: {
        Authorization: `Bearer ${AccessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
    }).then((res) => res.json());

    signOut(authService)
      .then(() => {
        console.log('로그아웃 성공');
        navigate('/');
        alert('로그아웃 성공');
      })
      .catch((err) => alert(err));

    localStorage.clear();
    console.log('isLogout', islogout);
  };

  return (
    <>
      <KakaoLogout onClick={Logout}>klogout</KakaoLogout>
    </>
  );
}

const KakaoLogout = styled.div`
  cursor: pointer;
`;
