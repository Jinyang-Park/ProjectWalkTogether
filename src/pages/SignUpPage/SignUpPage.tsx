import React, { useEffect, useState } from 'react';

import * as S from './SignUpPage.style';

import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../common/firebase';
import { emailRegex, nicknameRegex, pwdRegex } from '../../utils/UserInfoRegex';
import CommonStyles from './../../styles/CommonStyles';
import { useSetRecoilState } from 'recoil';
import MessageWindow, {
  MessageWindowLogoType,
  MessageWindowProperties,
  messageWindowPropertiesAtom,
} from '../../messagewindow/MessageWindow';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setCnfirmPwd] = useState('');
  const [displayname, setDisplayname] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  //유효성검사
  const [validateEmail, setValidateEmail] = useState('');
  const [validateEmailColor, setValidateEmailColor] = useState(false);
  const [validatePw, setValidatePw] = useState('');
  const [validatePwColor, setValidatePwColor] = useState(true);
  const [validatePwconfirm, setValidatePwconfirm] = useState('');
  const [validatePwconfirmColor, setValidatePwconfirmColor] = useState(true);
  const [validateDisplayname, setValidateDisplayname] = useState('');
  const [validateDisplaynameColor, setValidateDisplayColor] = useState(true);

  const setState = useSetRecoilState<MessageWindowProperties>(
    messageWindowPropertiesAtom
  );

  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://domainprojectwalk.page.link/verification',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios',
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12',
    },
    dynamicLinkDomain: 'example.page.link',
  };
  //onchange로 값을 저장한다.
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (email.length > 5) {
      if (emailRegex.test(email) === false) {
        setValidateEmail(' 옳바른 형식을 입력해 주십시오.');
        setValidateEmailColor(false);
      } else {
        // setValidateEmail(' 올바른 형식의 이메일 주소입니다.');
        setValidateEmailColor(true);
      }
    }
  };
  // password값을 저장하고 유효성검사를 실시한다.
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    //비밀번호 유효성 검사
    if (password.length > 0) {
      if (pwdRegex.test(password) === false) {
        setValidatePw(' 옳바른 형식을 입력해 주십시오.');
        setValidatePwColor(false);
      } else {
        setValidatePw(' 올바른 형식의 비밀번호 입니다.');
        setValidatePwColor(true);
      }
    }
  };

  //passowrd를 동기적으로 처리하기 위해서 useeffect를 사용
  useEffect(() => {
    if (confirmPwd.length > 0) {
      if (password === confirmPwd) {
        setValidatePwconfirm('비밀번호와 일치합니다.');
        setValidatePwconfirmColor(true);
      } else {
        setValidatePwconfirm('비밀번호와 일치하지 않습니다.');
        setValidatePwconfirmColor(false);
      }
    }
  }, [confirmPwd]);

  const onChangeconfirmPwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCnfirmPwd(e.target.value);
  };

  //닉네임
  const onChangeDisplayname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayname(e.target.value);
    //유효성검사
    if (displayname.length > 0) {
      if (nicknameRegex.test(displayname) === false) {
        setValidateDisplayname(
          '한글,영문,숫자 포함 1자 이상 7자 이하로 작성해 주세요.'
        );
        setValidateDisplayColor(false);
      } else {
        setValidateDisplayname('옳바른 형식의 닉네임 입니다.');
        setValidateDisplayColor(true);
      }
    }
  };

  // submit & firebase
  const handleSubmitClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //패스워드와 패스워드 확인이 일치하고 패스워드의 유효성 검사를 통과하고 닉네임을 작성해야만 로그인이 가능하다.
    if (
      nicknameRegex.test(displayname) === true &&
      password === confirmPwd &&
      pwdRegex.test(password) === true &&
      emailRegex.test(email) === true
    ) {
      await createUserWithEmailAndPassword(authService, email, password)
        .then(async (response) => {
          await updateProfile(response.user, {
            displayName: displayname,
          });
          // alert('회원가입 완료');
          // navigate('/login');
          MessageWindow.showWindow(
            new MessageWindowProperties(
              true,
              '회원가입이 완료되었어요!',
              [
                {
                  text: '로그인 페이지로 돌아가기',
                  callback: () => {
                    navigate('/login');
                  },
                },
              ],
              MessageWindowLogoType.Confetti
            ),
            setState
          );
        })

        .catch((error) => {
          console.log(error);

          if (
            (error =
              'FirebaseError: Firebase: Error (auth/email-already-in-use).')
          ) {
            alert('중복된 이메일 입니다. 새로운 이메일 주소를 입력해 주세요.');
          }
        });
    } else if (confirmPwd !== password) {
      alert('비밀번호가 일치하지 않습니다.');
    } else if (nicknameRegex.test(displayname) === false) {
      alert('닉네임을 입력해 주세요');
    } else if (email.length === 0) {
      alert('이메일을 입력해 주세요');
    } else if (emailRegex.test(email) === false) {
      alert('옳바른 형식의 이메일을 입력해 주세요.');
    } else if (pwdRegex.test(password) === false) {
      alert('비밀번호를 확인해 주세요');
    }
  };

  return (
    <CommonStyles>
      <div>
        <form onSubmit={handleSubmitClick}>
          <S.InputBox>
            <S.LeftBox />
            <S.InputBoxContent>
              <S.LoginLogo>
                <h1>회원가입</h1>
              </S.LoginLogo>
              <S.InputBoxContent>
                <S.Inputholder>
                  <S.Input
                    type='text'
                    name='닉네임'
                    placeholder='닉네임'
                    onChange={onChangeDisplayname}
                  ></S.Input>
                  {/* <S.Validityfontbox>
                    {
                      <S.ValidityNicnamefont
                        validateDisplaynameColor={validateDisplaynameColor}
                      >
                        {validateDisplayname}
                      </S.ValidityNicnamefont>
                    }
                  </S.Validityfontbox> */}
                </S.Inputholder>
                <S.Inputholder>
                  <S.Input
                    type='email'
                    name='아이디'
                    placeholder='아이디'
                    onChange={onChangeEmail}
                  ></S.Input>
                  {/* <S.Validityfontbox>
                    {
                      <S.ValidityEmailfont
                        validateEmailColor={validateEmailColor}
                      >
                        {validateEmail}
                      </S.ValidityEmailfont>
                    }
                  </S.Validityfontbox> */}
                </S.Inputholder>
                <S.Inputholder>
                  <S.Input
                    type='password'
                    name='비밀번호'
                    placeholder='비밀번호'
                    onChange={onChangePassword}
                    value={password}
                  ></S.Input>
                  {/* <S.Validityfontbox>
                    {
                      <S.ValidityPasswordfont validatePwColor={validatePwColor}>
                        {validatePw}
                      </S.ValidityPasswordfont>
                    }
                  </S.Validityfontbox> */}
                </S.Inputholder>
                <S.Inputholder>
                  <S.Input
                    value={confirmPwd}
                    type='password'
                    name='비밀번호 확인'
                    placeholder='비밀번호 확인'
                    onChange={onChangeconfirmPwd}
                  ></S.Input>
                  {/* <S.Validityfontbox>
                    {
                      <S.ValidityConfirmPwdfont
                        validatePwconfirmColor={validatePwconfirmColor}
                      >
                        {validatePwconfirm}
                      </S.ValidityConfirmPwdfont>
                    }
                  </S.Validityfontbox> */}
                </S.Inputholder>
              </S.InputBoxContent>
              <S.ButtonBox>
                <S.LoginBtn type='submit'>회원 가입</S.LoginBtn>
              </S.ButtonBox>
              <S.ThirdBox>
                <S.RegisterBtn type='button' onClick={() => navigate('/login')}>
                  돌아가기
                </S.RegisterBtn>
              </S.ThirdBox>
            </S.InputBoxContent>
          </S.InputBox>
        </form>
      </div>
    </CommonStyles>
  );
};

export default SignUpPage;
