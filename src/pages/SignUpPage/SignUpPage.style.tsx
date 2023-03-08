import styled from 'styled-components';

export const InputBox = styled.div`
  display: flex;

  flex-wrap: wrap;
  width: 460px;
  height: 532px;

  margin-top: 80px;
  margin: auto;
  border-radius: 10px;
  padding: 5px;
  position: relative;

  top: 100px;

  box-shadow: 0 0 10px #bec5d7;
  z-index: 1;
`;

//Inputholder안의 진짜 input태그
export const Input = styled.input`
  border: none;
  width: 250px;
  height: 38px;
  position: relative;
  left: 30px;
  background-color: transparent;
  outline: none;
  :focus-visible {
    outline: none;
  }
`;

//Input태그의 테두리
export const Inputholder = styled.div`
  margin: auto;
  border-radius: 10px;
  width: 360px;
  height: 48px;
  border: 2px solid #adadad;
  color: #b2c8df;
  margin-top: 10px;
`;

//인풋을 둘러싼 박스
export const InputBoxContent = styled.div`
  width: 360px;
  margin: auto;
`;

//잠깐만 !
export const LoginLogo = styled.div`
  text-align: center;
  margin-top: 14px;
  margin-bottom: 25px;
  font-size: 32px;
  color: black;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//회원 가입 버튼
export const LoginBtn = styled.button`
  border-radius: 5px;
  width: 360px;
  height: 40px;
  font-size: 16px;
  color: black;
  border-color: #2192ff;
  font-weight: 400;
  margin-top: 15px;
  background-color: #d1d1d1;
  cursor: pointer;
  &:hover {
    background: #7d8bae;
    color: white;
    transition: 0.5s;
  }
`;

export const ThirdBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const RegisterBtn = styled.button`
  width: 80px;
  height: 40px;
  color: black;
  border: none;
  margin-top: 10px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #816ceb;
    transition: 0.4s;
  }
`;

export const FindBox = styled.div`
  display: flex;
`;

export const Validityfontbox = styled.div`
  border: none;
  width: 330px;
  font-size: 10px;
  height: 10px;
  position: relative;
  right: 10px;
  margin-top: 3px;
  outline: none;
  color: blue;
`;

//유효성검사시 글자
export const ValidityNicnamefont = styled.span<{
  validateDisplaynameColor: boolean;
}>`
  color: ${(Props) => (Props.validateDisplaynameColor ? 'blue' : 'red')};
  font-size: 15px;
`;
export const ValidityEmailfont = styled.span<{ validateEmailColor: boolean }>`
  color: ${(Props) => (Props.validateEmailColor ? 'blue' : 'red')};
  font-size: 15px;
`;
export const ValidityPasswordfont = styled.span<{ validatePwColor: boolean }>`
  color: ${(Props) => (Props.validatePwColor ? 'blue' : 'red')};
  font-size: 15px;
`;
export const ValidityConfirmPwdfont = styled.span<{
  validatePwconfirmColor: boolean;
}>`
  color: ${(Props) => (Props.validatePwconfirmColor ? 'blue' : 'red')};
  font-size: 15px;
`;
