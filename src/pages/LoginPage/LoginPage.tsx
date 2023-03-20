import React from 'react';
import * as S from './LoginPage.style';
import { useState } from 'react';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  setPersistence,
  browserSessionPersistence,
  getAuth,
  signOut,
} from 'firebase/auth';

import { useNavigate } from 'react-router-dom';
import { apiKey, dbService, authService } from '../../common/firebase';
import { emailRegex, pwdRegex } from '../../utils/UserInfoRegex';

import CommonStyles from './../../styles/CommonStyles';
import MessageWindow, {
  MessageWindowLogoType,
  MessageWindowProperties,
  messageWindowPropertiesAtom,
} from '../../messagewindow/MessageWindow';
import LogoF from '../../assets/LoginPage/logof.svg';
import LogoG from '../../assets/LoginPage/logog.svg';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { isLoggedIn } from '../../Recoil/Atom';

const LoginPage = (): JSX.Element => {
  const [disabled, setDisabled] = useState(false);
  const [buttonColor, setButtonColor] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  const [passinputType, setPassInputType] = useState<string>('password');
  const navigate = useNavigate();

  const SAVE_EMAIL_ID_KEY = 'SAVE_EMAIL_ID_KEY';
  const SAVE_EMAIL_ID_CHECKED_KEY = 'SAVE_EMAIL_ID_CHECKED_KEY';

  const setState = useSetRecoilState<MessageWindowProperties>(
    messageWindowPropertiesAtom
  );

  const handleToggleInputType = () => {
    setPassInputType(passinputType === 'password' ? 'text' : 'password');
  };

  const deletepassinput = () => {
    setPassword('');
  };
  const deletemailinput = () => {
    setEmail('');
  };

  const [checkedSaveEmail, setCheckedSaveEmail] = useState<boolean | string>(
    false
  );
  //onchange로 값을 저장.
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (email.length > 5) {
      setDisabled(true);
      if (emailRegex.test(email) === false) {
        setButtonColor(false);
        setDisabled(false);
      } else {
        // setValidateEmail(' 올바른 형식의 이메일 주소입니다.');
        setDisabled(false);
        setButtonColor(true);
      }
    }
    if (email.length === 0) {
      setDisabled(true);
    }
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (password.length < 0) {
      setDisabled(true);
    } else {
      if (pwdRegex.test(password) === false) {
        setButtonColor(false);
        setDisabled(true);
      } else {
        //setValidatePw(' 올바른 형식의 비밀번호 입니다.');
        setDisabled(false);
        setButtonColor(true);
      }
    }
  };

  //firebase
  const handleSubmitClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    return (
      signInWithEmailAndPassword(authService, email, password)
        .then((data) => {
          const user = authService;
          sessionStorage.setItem('id', data.user.displayName);
          sessionStorage.setItem('email', data.user.email);

          // navigate('/', { replace: true });

          if (user.currentUser?.emailVerified) {
            localStorage.setItem(
              SAVE_EMAIL_ID_CHECKED_KEY,
              checkedSaveEmail as string
            );
            if (checkedSaveEmail) {
              localStorage.setItem(SAVE_EMAIL_ID_KEY, email);
            }
            sessionStorage.setItem(
              apiKey as string,
              authService.currentUser?.uid as string
            );

            navigate('/');
          } else {
            // alert('인증되지 않은 사용자입니다.');

            MessageWindow.showWindow(
              new MessageWindowProperties(
                true,
                '이메일 인증을 해주세요',
                '',
                [
                  {
                    text: '확인',
                    callback: () => {
                      if (authService.currentUser !== null) {
                        signOut(authService).then(() => navigate('/login'));
                      }
                    },
                  },
                ],
                MessageWindowLogoType.Perplex
              ),
              setState
            );
          }
        })
        //모달만들기

        .catch((error) => {
          const errorMessage = error.message;
          if (errorMessage.includes('user-not-found')) {
            //return alert('가입되지않은 회원입니다');

            MessageWindow.showWindow(
              new MessageWindowProperties(
                true,
                '가입되지 않은 회원입니다',
                '',
                [
                  {
                    text: '확인',
                    callback: () => {
                      return;
                    },
                  },
                ],
                MessageWindowLogoType.Perplex
              ),
              setState
            );
          } else if (errorMessage.includes('wrong-password')) {
            MessageWindow.showWindow(
              new MessageWindowProperties(
                true,
                '비밀번호를 확인해주세요',
                '',
                [
                  {
                    text: '확인',
                    callback: () => {
                      return;
                    },
                  },
                ],
                MessageWindowLogoType.Perplex
              ),
              setState
            );
          }
        })
    );
  };

  useEffect(() => {
    if (email) {
      if (email.match(emailRegex) === null) {
        return alert('이메일 형식을 확인해주세요.');
      }
    }
  }, [setEmail]);

  //비밀번호 찾기
  const findPwd = (e: any) => {
    e.preventDefault();
    navigate('/find');
  };

  //소셜로그인 페이스북
  const signInWithFacebook = () => {
    setPersistence(authService, browserSessionPersistence)
      .then(() => {
        const provider = new FacebookAuthProvider();
        const auth = getAuth();
        return signInWithPopup(authService, provider).then((data) => {
          setValue(data.user.email);
          sessionStorage.setItem('id', data.user.displayName);
          navigate('/');
        });
      })
      .catch((error) => {});
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

  const userLoggedIn = useRecoilValue(isLoggedIn);
  useEffect(() => {
    userLoggedIn ? navigate('/') : navigate('/login');
  }, []);

  return (
    <CommonStyles>
      <S.InputLayout>
        <form onSubmit={handleSubmitClick}>
          <S.InputBox>
            {/* <S.leftBox /> */}
            <S.InputBoxContent>
              <S.LoginLogo>
                <S.LogoText>같이 걸어요</S.LogoText>
              </S.LoginLogo>
              <S.Inputholder>
                <S.Input
                  type='email'
                  value={email}
                  name='아이디'
                  placeholder='이메일을 입력해주세요'
                  onChange={onChangeEmail}
                ></S.Input>

                {email && (
                  <S.CheckEmailBox>
                    <S.DeleteEmailBtn onClick={deletemailinput}>
                      <S.CheckIconright
                        src={
                          require('../../assets/ChattingIcon/clearbtn.svg')
                            .default
                        }
                        alt='Show password'
                      />
                    </S.DeleteEmailBtn>
                  </S.CheckEmailBox>
                )}
              </S.Inputholder>
              <S.Inputholder>
                <S.Input
                  type={passinputType}
                  value={password}
                  name='비밀번호'
                  placeholder='비밀번호를 입력해주세요'
                  onChange={onChangePassword}
                ></S.Input>

                {password && (
                  <S.CheckPassBox>
                    {passinputType === 'password' ? (
                      <S.CheckBtn onClick={handleToggleInputType}>
                        <S.CheckIconright
                          src={
                            require('../../assets/LoginPage/No-eye.svg').default
                          }
                          alt='Show password'
                        />
                      </S.CheckBtn>
                    ) : (
                      <S.CheckOpenBtn onClick={handleToggleInputType}>
                        <S.Checkeye
                          src={
                            require('../../assets/LoginPage/openeye.svg')
                              .default
                          }
                          alt='Hide password'
                        />
                      </S.CheckOpenBtn>
                    )}

                    <S.DeletePassBtn onClick={deletepassinput}>
                      <S.CheckIconright
                        src={
                          require('../../assets/ChattingIcon/clearbtn.svg')
                            .default
                        }
                        alt='Show password'
                      />
                    </S.DeletePassBtn>
                  </S.CheckPassBox>
                )}
              </S.Inputholder>

              <S.ButtonBox>
                <S.LoginBtn
                  disabled={disabled}
                  state={buttonColor}
                  type='submit'
                >
                  로그인
                </S.LoginBtn>
              </S.ButtonBox>

              <S.OrText>SNS로 간편하게 시작하기</S.OrText>

              <S.SocialBox>
                <S.Facebook onClick={() => signInWithFacebook()} src={LogoF} />
                <S.Google onClick={() => signInWithGoogle()} src={LogoG} />
                {/* <KakaoLoginButton /> */}
                {/* <S.Naver src='assets/naver.png' /> */}
              </S.SocialBox>
              <S.ThirdBox>
                <S.ResisterText>
                  아직 계정이 없으신가요?
                  <S.RegisterBtnWrapper>
                    <S.RegisterBtn
                      type='button'
                      onClick={() => navigate('/agreement')}
                    >
                      이메일로 빠르게 회원가입 하기
                    </S.RegisterBtn>
                    <S.ButtonIcon
                      src={
                        require('../../assets/Mainpage/chevronleft.svg').default
                      }
                    />
                  </S.RegisterBtnWrapper>
                </S.ResisterText>
              </S.ThirdBox>
              <S.FindBox>
                <S.ToFindPage onClick={findPwd}>비밀번호 찾기</S.ToFindPage>
              </S.FindBox>
            </S.InputBoxContent>
          </S.InputBox>
        </form>
      </S.InputLayout>
    </CommonStyles>
  );
};

export default LoginPage;
