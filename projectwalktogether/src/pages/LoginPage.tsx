import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authService } from "../common/firebase";
import { emailRegex, pwdRegex } from "../utils/UserInfoRegex";
import { useNavigate } from "react-router-dom";
import facebookImg from "../assets/facebook.png";
const LoginPage = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //onchange로 값을 저장.
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmitClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setPersistence(authService, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(authService, email, password)
          .then(() => {
            navigate("/", { replace: true });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);

            alert("로그인 실패");
            if (email.length === 0) {
              alert("이메일을 입력해 주세요");
            } else if (emailRegex.test(email) === false) {
              alert("이메일을 정확히 입력해 주세요");
            } else if (password.length === 0) {
              alert("비밀번호를 입력해 주세요");
            } else if (pwdRegex.test(password) === false) {
              alert("비밀번호를 정확히 입력해 주세요 ");
            }
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  //firebase google 로그인

  return (
    <InputBox>
      <form onSubmit={handleSubmitClick}>
        <>
          <LoginLogo>
            <h1>같이걸을래?</h1>
          </LoginLogo>

          <InputBoxContent>
            <Inputholder>
              <Input placeholder="이메일" onChange={onChangeEmail} />
            </Inputholder>
            <Inputholder>
              <Input placeholder="비밀번호" onChange={onChangePassword} />
            </Inputholder>
          </InputBoxContent>
          <ButtonBox>
            <RegisterBtn onClick={() => navigate("/signup")}>회원 가입</RegisterBtn>
            <LoginBtn type="submit">로그인</LoginBtn>
          </ButtonBox>
        </>
      </form>
      <SocialBtnBox>
        <Facebook src={facebookImg} />
      </SocialBtnBox>
    </InputBox>
  );
};
export default LoginPage;
const InputBox = styled.div`
  position: relative;
  width: 22.5rem;
  height: 40rem;

  margin-left: -11.25rem;
  margin-top: 5rem;

  left: 50%;
  border-radius: 1.875rem;
  padding: 0.3125rem;
  top: 3.125rem;
  border: 0.125rem solid #2192ff;
  z-index: 1;
`;

// 인풋태그
const Input = styled.input`
  border: none;
  width: 16rem;
  height: 2.375rem;
  position: relative;
  left: 1.875rem;
  outline: none;
`;

const Inputholder = styled.div`
  border-radius: 1.875rem;
  width: 19rem;
  height: 2.8125rem;
  border: 0.1875rem solid #b2c8df;
  color: #b2c8df;
  margin-top: 1.5625rem;
`;

//인풋을 둘러싼 박스
const InputBoxContent = styled.div`
  margin: 20px;
`;

const LoginLogo = styled.div`
  text-align: center;
  margin-top: 110px;
  margin-bottom: 25px;
  font-size: 20px;
  color: #2192ff;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginBtn = styled.button`
  border-radius: 40px;
  width: 110px;
  height: 2.5rem;
  font-size: 1.25rem;
  color: #2192ff;
  border-color: #2192ff;
  font-weight: 900;
  margin-top: 15px;
  background-color: White;
  &:hover {
    background: cornflowerblue;
    color: white;
    transition: 0.5s;
  }
`;

const RegisterBtn = styled.button`
  width: 6.875rem;
  height: 2.5rem;
  color: #2192ff;
  border: none;
  margin-top: 0.625rem;
  background-color: White;
  &:hover {
    color: #816ceb;
    transition: 0.4s;
  }
`;

const SocialBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Facebook = styled.img`
  text-align: center;
  margin-top: 60px;
  margin-bottom: 25px;
  width: 50px;
  color: #2192ff;
`;
