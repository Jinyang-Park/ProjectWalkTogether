import axios from 'axios';
import QueryString from 'qs';
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
export default function KakaoLoginButton() {
  const location = useLocation();
  const REST_API_KEY = 'f404ec1cc98da21c3bd33a0340e88d16';
  const navigate = useNavigate();
  const REDIRECT_URI = 'http://localhost:3000/login';

  // 3000/loin을 카카오 디벨로퍼에 사이트 도메인을 동일하게 맞춰줘야된다.(플랫폼)

  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const CLIENT_SECRET = 'SLcokwxfNFtWTzKScRBkkkwVLcyMAL0K';
  const KAKAO_CODE = location.search.split('=')[1];
  const [nickName, setNickName] = useState();
  const [profileImage, setProfileImage] = useState();
  const [accessToken, setAccessToken] = useState();
  const loginHandler = () => {
    window.location.replace(link);
  };
  //kakao로그인을 완료하면 주소창에 code값이 파라미터로 전달이되는데 그 값을 가져오자
  const code = new URL(window.location.href).searchParams.get('code');
  console.log(code);
  console.log(accessToken);
  //accessToken 요청
  const getUser = async () => {
    const ACCESS_TOKEN = await fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: QueryString.stringify({
        //엑세스 토큰을 요청하기위해 필요한 토큰과 key값들
        grant_type: 'authorization_code',
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI, //위쪽에 전부 변수로 지정해주었기에불러오기만 하면된다
        code: KAKAO_CODE,
        client_secret: CLIENT_SECRET,
      }),
    })
      .then((res) => res.json())

      .catch((error) => console.log('error:', error));

    console.log('ACCESS_TOKEN1', ACCESS_TOKEN);
    //state에 accessToken을 넣어주자
    setAccessToken(ACCESS_TOKEN.access_token);
    console.log('ACCESS_TOKEN2', ACCESS_TOKEN.access_token);
    //localStorage에 잘들어가는지 확인해보자
    localStorage.setItem('token_for_kakaotalk', ACCESS_TOKEN.access_token);
    sessionStorage.setItem('token_for_kakaotalk', ACCESS_TOKEN.access_token);
    //kakao user DATA를 get해오자
    const user = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        //access_token이 필요하다
        Authorization: `Bearer ${ACCESS_TOKEN.access_token}`,
      },
    });
    console.log(user.data.id);

    console.log(user);
    //값을가져오면 state에 닉네임과 프로필이미지를 string으로 담아주자
    setNickName(user.data.properties.nickname);
    setProfileImage(user.data.properties.profile_image);
    navigate('/');
  };
  console.log(nickName, profileImage);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <KakaoLogoButton src='assets/kakao.png' onClick={loginHandler} />
    </>
  );
}

const KakaoLogoButton = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin: 1.25rem;
  cursor: pointer;
`;
const Logout = styled.div``;
