import React from "react";
import styled from "styled-components";

const LoginPage = () => {
  return (
    <div>
      <form>
        <InputBox>
          <LoginLogo>
            <h1>같이걸을래?</h1>
          </LoginLogo>

          <InputBoxContent>
            <Inputholder>
              <Input name="아이디" value="아이디" />
            </Inputholder>
            <Inputholder>
              <Input name="비밀번호" value="비밀번호" />
            </Inputholder>
          </InputBoxContent>
          <ButtonBox>
            <RegisterBtn>회원 가입</RegisterBtn>
            <LoginBtn>로그인</LoginBtn>
          </ButtonBox>
        </InputBox>
      </form>
    </div>
  );
};
export default LoginPage;
const InputBox = styled.div`
  position: relative;
  width: 26.875rem;
  height: 60rem;
  border-radius: 1.875rem;
  padding: 0.3125rem;
  top: 9.375rem;
  border: 0.125rem solid #2192ff;
  z-index: 1;
`;

// 인풋태그
const Input = styled.input`
  border: none;
  width: 18.75rem;
  height: 2.375rem;
  position: relative;
  left: 1.875rem;
  outline: none;
`;

const Inputholder = styled.div`
  border-radius: 30px;
  width: 380px;
  height: 45px;
  border: 3px solid #b2c8df;
  color: #b2c8df;
  margin-top: 25px;
`;

//인풋을 둘러싼 박스
const InputBoxContent = styled.div`
  margin: 1.25rem;
`;

const LoginLogo = styled.div`
  text-align: center;
  margin-top: 6.875rem;
  margin-bottom: 1.5625rem;
  font-size: 1.25rem;
  color: #2192ff;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginBtn = styled.button`
  border-radius: 2.5rem;
  width: 6.875rem;
  height: 40px;
  font-size: 20px;
  color: #2192ff;
  border-color: #2192ff;
  font-weight: 900;
  margin-top: 0.9375rem;
  background-color: White;
  &:hover {
    background: cornflowerblue;
    color: white;
    transition: 0.5s;
  }
`;

const RegisterBtn = styled.button`
  width: 110px;
  height: 40px;
  color: #2192ff;
  border: none;
  margin-top: 10px;
  background-color: White;
  &:hover {
    color: #816ceb;
    transition: 0.4s;
  }
`;
