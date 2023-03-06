import React from 'react';
import * as S from './LoginPage.style';
import { useState } from 'react';
import {
  signInWithEmailAndPassword,
  isSignInWithEmailLink,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  setPersistence,
  browserSessionPersistence,
  getAuth,
} from 'firebase/auth';
import { doc, setDoc } from '@firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { dbService, authService } from '../../common/firebase';
import { emailRegex, pwdRegex } from '../../utils/UserInfoRegex';
import PassModal from '../LoginPage/PassModal';
import CommonStyles from './../../styles/CommonStyles';
import KakaoLoginButton from './KakaoLoginButton';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');
  const [loginModalopen, setLoginModalopen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  //onchange로 값을 저장.
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (email.length > 5) {
      if (pwdRegex.test(password) === false) {
        setErrorMessage('이메일을 다시 입력해주세요.');
      }
    }
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (password.length > 0) {
      if (pwdRegex.test(password) === false) {
        setErrorMessage('비밀번호를 다시 입력해주세요.');
      }
    }
  };

  //firebase
  const handleSubmitClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setPersistence(authService, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(authService, email, password)
          .then((data) => {
            sessionStorage.setItem('id', data.user.displayName);
            sessionStorage.setItem('email', data.user.email);
            sessionStorage.setItem('id', data.user.displayName);
            sessionStorage.setItem('email', data.user.email);
            navigate('/', { replace: true });
          })

          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            //auth/invalid-tenant-id

            alert('로그인 실패');
            if (email.length === 0) {
              alert('이메일을 입력해 주세요');
            } else if (emailRegex.test(email) === false) {
              alert('이메일을 정확히 입력해 주세요');
            } else if (password.length === 0) {
              alert('비밀번호를 입력해 주세요');
            } else if (pwdRegex.test(password) === false) {
              alert('비밀번호를 정확히 입력해 주세요 ');
            }
          });
      })

      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  //비밀번호 찾기
  const findPwd = (e: any) => {
    e.preventDefault();
    setLoginModalopen(true);
  };

  //소셜로그인 페이스북

  const signInWithFacebook = () => {
    setPersistence(authService, browserSessionPersistence)
      .then(() => {
        const provider = new FacebookAuthProvider();
        const auth = getAuth();
        console.log(auth);
        return signInWithPopup(authService, provider).then((data) => {
          setValue(data.user.email);
          sessionStorage.setItem('id', data.user.displayName);
          console.log(data);
          navigate('/');
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signInWithGoogle = () => {
    setPersistence(authService, browserSessionPersistence)
      .then(() => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        return signInWithPopup(authService, provider).then((data) => {
          setValue(data.user.email);
          sessionStorage.setItem('id', data.user.displayName);
          navigate('/');
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <CommonStyles>
      <S.InputLayout>
        <form onSubmit={handleSubmitClick}>
          <S.InputBox>
            {/* <S.leftBox /> */}
            <S.InputBoxContent>
              <S.LoginLogo>
                <S.LogoText>같이 걸을래?</S.LogoText>
              </S.LoginLogo>
              <S.Inputholder>
                <S.Input
                  type='email'
                  value={email}
                  name='아이디'
                  placeholder='이메일을 입력해주세요'
                  onChange={onChangeEmail}
                ></S.Input>
              </S.Inputholder>
              <S.Inputholder>
                <S.Input
                  type='password'
                  value={password}
                  name='비밀번호'
                  placeholder='비밀번호를 입력해주세요'
                  onChange={onChangePassword}
                ></S.Input>
              </S.Inputholder>

              <S.ButtonBox>
                <S.LoginBtn type='submit'>로그인</S.LoginBtn>

                <S.Validityfontbox>{errorMessage}</S.Validityfontbox>
              </S.ButtonBox>

              <S.OrText>SNS로 간편하게 시작하기</S.OrText>

              <S.SocialBox>
                <S.Facebook
                  onClick={signInWithFacebook}
                  src='/assets/facebook.png'
                />
                <S.Google onClick={signInWithGoogle} src='assets/google.png' />
                {/* <KakaoLoginButton /> */}
                {/* <S.Naver src='assets/naver.png' /> */}
              </S.SocialBox>
              <S.ThirdBox>
                <S.ResisterText>
                  아직 계정이 없으신가요?
                  <S.RegisterBtn
                    type='button'
                    onClick={() => navigate('/agreement')}
                  >
                    이메일로 빠르게 회원 가입 하기
                  </S.RegisterBtn>
                </S.ResisterText>
              </S.ThirdBox>
              <S.FindBox>
                <S.FindBtn onClick={findPwd}>비밀번호찾기</S.FindBtn>
              </S.FindBox>
            </S.InputBoxContent>
          </S.InputBox>
        </form>

        <PassModal
          open={loginModalopen}
          setLoginModalopen={setLoginModalopen}
          onClose={() => setLoginModalopen(false)}
        />
        <PassModal
          open={loginModalopen}
          setLoginModalopen={setLoginModalopen}
          onClose={() => setLoginModalopen(false)}
        />
      </S.InputLayout>
    </CommonStyles>
  );
};

export default LoginPage;
