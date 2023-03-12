import React, { useEffect, useState } from 'react';
import * as S from './SignUpPage.style';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { dbService, authService } from '../../common/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { emailRegex, nicknameRegex, pwdRegex } from '../../utils/UserInfoRegex';
import { useSetRecoilState } from 'recoil';
import MessageWindow, {
  MessageWindowLogoType,
  MessageWindowProperties,
  messageWindowPropertiesAtom,
} from '../../messagewindow/MessageWindow';

const SignUpPage: React.FC = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPwd, setCnfirmPwd] = useState<string>('');
  const [displayname, setDisplayname] = useState<string>('');
  const [passinputType, setPassInputType] = useState<string>('password');
  const [ConfirmPassInputType, setConfirmNewPassInputType] =
    useState<string>('password');
  const navigate = useNavigate();
  //유효성검사
  const [validateEmail, setValidateEmail] = useState<string>('');
  const [validateEmailColor, setValidateEmailColor] = useState<boolean>(false);
  const [validatePw, setValidatePw] = useState<string>('');
  const [validatePwColor, setValidatePwColor] = useState<boolean>(true);
  const [validatePwconfirm, setValidatePwconfirm] = useState<string>('');
  const [validatePwconfirmColor, setValidatePwconfirmColor] =
    useState<boolean>(true);
  const [validateDisplayname, setValidateDisplayname] = useState<string>('');
  const [validateDisplaynameColor, setValidateDisplayColor] =
    useState<boolean>(true);
  const [show, setShow] = useState<boolean>(false);
  const [emailShow, setEmailShow] = useState<boolean>(false);
  const [pwShow, setPwShow] = useState<boolean>(false);
  const [conFirmShow, setConFirmShow] = useState<boolean>(false);

  const setState = useSetRecoilState<MessageWindowProperties>(
    messageWindowPropertiesAtom
  );

  const deletepassinput = () => {
    setPassword('');
  };

  const deletenameinput = () => {
    setDisplayname('');
  };
  const deletemailinput = () => {
    setEmail('');
  };
  const deleteCnfirminput = () => {
    setCnfirmPwd('');
  };

  const handleToggleInputType = () => {
    setPassInputType(passinputType === 'password' ? 'text' : 'password');
  };
  const handleToggleConfirmInputType = () => {
    setConfirmNewPassInputType(
      ConfirmPassInputType === 'password' ? 'text' : 'password'
    );
  };

  //onchange로 값을 저장한다.
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    if (email.length > 5) {
      if (emailRegex.test(email) === false) {
        setValidateEmailColor(false);
      } else {
        // setValidateEmail(' 올바른 형식의 이메일 주소입니다.');
        setValidateEmailColor(true);
      }
    }
  };

  //이메일 중복검사
  const isEmail = async (email: string) => {
    const q = query(collection(dbService, 'user'), where('email', '==', email));
    const querySnapshot = await getDocs(q);

    let isCheckEmail = '';

    querySnapshot.forEach((doc) => {
      isCheckEmail = doc.data().email;
    });
    return isCheckEmail;
  };

  useEffect(() => {
    isEmail(email)
      .then((result) => {
        if (email) {
          if (result === email) {
            setValidateEmail('사용중인 이메일입니다.');
            setDisabled(true);
            setValidateEmailColor(false);
            setEmailShow(true);
          } else if (emailRegex.test(email) === false) {
            setValidateEmail('이메일 형식을 확인해주세요.');
            setValidateEmailColor(false);
            setEmailShow(true);
          } else {
            setValidateEmail('사용 가능한 이메일입니다.');
            setValidateEmailColor(true);
            setEmailShow(true);
          }
        } else {
          setValidateEmail(' ');
          setEmailShow(false);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [email, setValidateEmail]);

  // password값을 저장하고 유효성검사를 실시한다.
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    //비밀번호 유효성 검사
    if (password.length > 0) {
      if (pwdRegex.test(password) === false) {
        setValidatePw(
          ' 숫자, 글자와 특수문자를 사용하여 5글자 이상로 작성해주세요.'
        );
        setValidatePwColor(false);
        setPwShow(true);
      } else {
        setValidatePw(' 올바른 형식의 비밀번호 입니다.');
        setValidatePwColor(true);
        setPwShow(true);
      }
    }
  };

  //passowrd를 동기적으로 처리하기 위해서 useeffect를 사용
  useEffect(() => {
    if (confirmPwd.length > 0) {
      if (password === confirmPwd) {
        setValidatePwconfirm('비밀번호와 일치합니다.');
        setValidatePwconfirmColor(true);
        setDisabled(false);
        setConFirmShow(true);
      } else {
        setValidatePwconfirm('비밀번호와 일치하지 않습니다.');
        setValidatePwconfirmColor(false);
        setConFirmShow(true);
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
          '한글,영문,숫자 포함 1자 이상 20자 이내로 작성해 주세요.'
        );
        setShow(true);
        setValidateDisplayColor(false);
      } else {
        setShow(true);
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
      await createUserWithEmailAndPassword(authService, email, password).then(
        async (response) => {
          await updateProfile(response.user, {
            displayName: displayname,
          })
            .then(() => {
              if (authService.currentUser !== null) {
                sendEmailVerification(authService.currentUser);
              }
            })
            .catch((error) => {
              let message = error.message;
              message = '형식에 맞게 작성해주세요';
              alert(message);
            });

          MessageWindow.showWindow(
            new MessageWindowProperties(
              true,
              '인증 메일을 보냈습니다.',
              '',
              [
                {
                  text: '이메일을 확인해주세요',
                  callback: () => {
                    authService.signOut();
                    sessionStorage.clear();
                    localStorage.clear();
                    navigate('/login', { replace: true });
                  },
                },
              ],
              MessageWindowLogoType.Confetti
            ),
            setState
          );
        }
      );
    } else if (confirmPwd !== password) {
      setValidatePw('비밀번호가 일치하지 않습니다.');
    } else if (nicknameRegex.test(displayname) === false) {
      setValidateDisplayname('닉네임을 입력해 주세요');
    } else if (emailRegex.test(email) === false) {
      setValidateEmail('옳바른 형식의 이메일을 입력해 주세요.');
    } else if (pwdRegex.test(password) === false) {
      setValidatePw('비밀번호를 확인해 주세요');
    }
  };

  return (
    <S.SignUPBox>
      <form onSubmit={handleSubmitClick}>
        <S.InputBox>
          <S.InputBoxContent>
            <S.LoginLogo>회원가입</S.LoginLogo>

            <S.Inputholder>
              <S.Input
                type='text'
                name='닉네임'
                placeholder='닉네임'
                value={displayname}
                onChange={onChangeDisplayname}
              ></S.Input>

              {displayname && (
                <S.CheckNickBox>
                  <S.DeleteNameCheckBtn onClick={deletenameinput}>
                    <S.CheckIconright
                      src={
                        require('../../assets/ChattingIcon/clearbtn.svg')
                          .default
                      }
                    />
                  </S.DeleteNameCheckBtn>
                </S.CheckNickBox>
              )}
            </S.Inputholder>

            {displayname === '' ? (
              <S.ValidBox></S.ValidBox>
            ) : (
              <S.ValidBox>
                {show && (
                  <S.ValidityNameCircle
                    validateDisplaynameColor={validateDisplaynameColor}
                  ></S.ValidityNameCircle>
                )}
                <S.Validityfontbox>{validateDisplayname}</S.Validityfontbox>
              </S.ValidBox>
            )}

            <S.Inputholder>
              <S.Input
                type='email'
                name='email'
                placeholder='이메일'
                onChange={onChangeEmail}
                value={email}
              ></S.Input>

              {email && (
                <S.CheckBox>
                  <S.DeleteEmailCheckBtn onClick={deletemailinput}>
                    <S.CheckIconright
                      src={
                        require('../../assets/ChattingIcon/clearbtn.svg')
                          .default
                      }
                    />
                  </S.DeleteEmailCheckBtn>
                </S.CheckBox>
              )}
            </S.Inputholder>

            {email === '' ? (
              <S.ValidBox></S.ValidBox>
            ) : (
              <S.ValidBox>
                {emailShow && (
                  <S.ValidityEmailCircle
                    validateEmailColor={validateEmailColor}
                  ></S.ValidityEmailCircle>
                )}
                <S.Validityfontbox>{validateEmail}</S.Validityfontbox>
              </S.ValidBox>
            )}

            <S.Inputholder>
              <S.Input
                type={passinputType}
                name='비밀번호'
                placeholder='비밀번호'
                onChange={onChangePassword}
                value={password}
              ></S.Input>

              {password && (
                <S.CheckPassBox>
                  {passinputType === 'password' ? (
                    <S.CheckPassWordBtn onClick={handleToggleInputType}>
                      <S.CheckIconright
                        src={
                          require('../../assets/LoginPage/No-eye.svg').default
                        }
                        alt='Show password'
                      />
                    </S.CheckPassWordBtn>
                  ) : (
                    <S.OpenCheckBtn onClick={handleToggleInputType}>
                      <S.Checkeye
                        src={
                          require('../../assets/LoginPage/openeye.svg').default
                        }
                        alt='Hide password'
                      />
                    </S.OpenCheckBtn>
                  )}

                  <S.DeletePassCheckBtn onClick={deletepassinput}>
                    <S.CheckIconright
                      src={
                        require('../../assets/ChattingIcon/clearbtn.svg')
                          .default
                      }
                      alt='Show password'
                    />
                  </S.DeletePassCheckBtn>
                </S.CheckPassBox>
              )}
            </S.Inputholder>

            {password === '' ? (
              <S.ValidBox></S.ValidBox>
            ) : (
              <S.ValidBox>
                {pwShow && (
                  <S.VConfirmCircle
                    validatePwColor={validatePwColor}
                  ></S.VConfirmCircle>
                )}
                <S.Validityfontbox>{validatePw}</S.Validityfontbox>
              </S.ValidBox>
            )}

            <S.Inputholder>
              <S.Input
                value={confirmPwd}
                type={ConfirmPassInputType}
                name='비밀번호 확인'
                placeholder='비밀번호 확인'
                onChange={onChangeconfirmPwd}
              ></S.Input>

              {confirmPwd && (
                <S.CheckcnBox>
                  {ConfirmPassInputType === 'password' ? (
                    <S.CheckCnPassBtn onClick={handleToggleConfirmInputType}>
                      <S.CheckIconright
                        src={
                          require('../../assets/LoginPage/No-eye.svg').default
                        }
                        alt='Show password'
                      />
                    </S.CheckCnPassBtn>
                  ) : (
                    <S.OpenPassCnCheckBtn
                      onClick={handleToggleConfirmInputType}
                    >
                      <S.Checkeye
                        src={
                          require('../../assets/LoginPage/openeye.svg').default
                        }
                        alt='Hide password'
                      />
                    </S.OpenPassCnCheckBtn>
                  )}

                  <S.DeleteCheckCnBtn onClick={deleteCnfirminput}>
                    <S.CheckIconright
                      src={
                        require('../../assets/ChattingIcon/clearbtn.svg')
                          .default
                      }
                      alt='Show password'
                    />
                  </S.DeleteCheckCnBtn>
                </S.CheckcnBox>
              )}
            </S.Inputholder>
            {confirmPwd === '' ? (
              <S.ValidBox></S.ValidBox>
            ) : (
              <S.ValidBox>
                {conFirmShow && (
                  <S.PassConfirmCircle
                    validatePwconfirmColor={validatePwconfirmColor}
                  ></S.PassConfirmCircle>
                )}
                <S.Validityfontbox>{validatePwconfirm}</S.Validityfontbox>
              </S.ValidBox>
            )}

            <S.EtcBtn>
              <S.ButtonBox>
                <S.LoginBtn disabled={disabled} type='submit'>
                  회원 가입
                </S.LoginBtn>
              </S.ButtonBox>
              <S.ThirdBox>
                <S.RegisterBtn type='button' onClick={() => navigate('/login')}>
                  이전으로 돌아가기
                </S.RegisterBtn>
              </S.ThirdBox>
            </S.EtcBtn>
          </S.InputBoxContent>
        </S.InputBox>
      </form>
    </S.SignUPBox>
  );
};

export default SignUpPage;
