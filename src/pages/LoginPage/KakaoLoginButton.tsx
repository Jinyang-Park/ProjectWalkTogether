import axios from 'axios';
import QueryString from 'qs';
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { collection, addDoc, setDoc, doc } from '@firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { dbService } from '../../common/firebase';
import { useRecoilState } from 'recoil';
import { kakaoState, kakaoUserState } from '../../Rocoil/Atom';
import { useSetRecoilState } from 'recoil';
export default function KakaoLoginButton() {
  // const setKakaoUser = useRecoilState(kakaoUserState);
  const setKakao = useSetRecoilState(kakaoUserState);
  const [userId, setUserId] = useState();

  const [profileImage, setProfileImage] = useState();
  const loginHandler = () => {
    window.location.replace(link);
  };

  const navigate = useNavigate();
  const REST_API_KEY = 'f404ec1cc98da21c3bd33a0340e88d16';
  const REDIRECT_URI = 'http://localhost:3000/login';
  const CLIENT_SECRET = 'SLcokwxfNFtWTzKScRBkkkwVLcyMAL0K';

  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  useEffect(() => {
    const newLocation = document.location;
    // console.log(newLocation)

    const PARAMS = new URL(`${newLocation}`).searchParams;
    const KAKAO_CODE = PARAMS.get('code');
    // console.log("KAKAO_CODE : " , KAKAO_CODE )

    getKakaoToken(KAKAO_CODE);
    console.log('getKakaoToken...');
  }, []);

  const getKakaoToken = (KAKAO_CODE: any) => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
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
      .then((data) => {
        if (data.access_token) {
          sessionStorage.setItem('token', data.access_token);
          getUserInfo(data.access_token);
          console.log('getUserInfo...');
        } else {
          navigate('/login');
        }
      });
  };

  const getUserInfo = (token: any) => {
    fetch(`https://kapi.kakao.com/v2/user/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    })
      .then((res) => res.json())
      .then(async (res) => {
        const nickname = res.kakao_account.profile.nickname;
        const kakaoId = res.id;
        const connectedAt = res.connected_at;

        const email =
          res.kakao_account.email_needs_agreement === true
            ? null
            : res.kakao_account.email;

        const profileImg =
          res.kakao_account.profile.is_default_image === true
            ? null
            : res.kakao_account.profile.profile_image_url;

        sessionStorage.setItem('id', res.kakao_account.profile.nickname);
        setProfileImage(res.kakao_account.profile.is_default_imagee);
        sessionStorage.setItem('uid', res.id);
        console.log(res);
        setKakao(res.kakao_account.profile.nickname);
        // setKakaoUser(res.nickname);

        await setDoc(doc(dbService, 'kakaoData', `${kakaoId}`), {
          login: true,
          nickname: nickname,
          date: connectedAt,
          email: email,
          profileImg: profileImg,
        });
      })
      .then(() => {
        //res를 state에 저장한다.

        navigate('/');
      });
  };

  return (
    <>
      <KakaoLogoButton src='assets/kakao.png' onClick={loginHandler} />
    </>
  );
}

const KakaoLogoButton = styled.img`
  width: 40px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
`;
const Logout = styled.div``;
