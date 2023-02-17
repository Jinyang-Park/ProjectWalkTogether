import styled from 'styled-components';

export const InputBox = styled.div`
  display: flex;

  flex-wrap: wrap;
  width: 868px;
  height: 532px;
  background: #efefef;
  margin-top: 80px;
  margin: auto;
  border-radius: 10px;
  padding: 5px;
  top: 50px;

  z-index: 1;
`;

export const LeftBox = styled.div`
  background: #adadad;
  border-radius: 10px;
  width: 370px;
  height: 436px;
  margin: auto;
`;

//Inputholder안의 진짜 input태그
export const Input = styled.input`
  border: none;
  width: 250px;
  height: 2.375rem;
  position: relative;
  left: 1.875rem;
  outline: none;
  :focus-visible {
    outline: none;
  }
`;

//Input태그의 테두리
export const Inputholder = styled.div`
  margin: auto;
  border-radius: 0.625rem;
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
  margin-top: 0.875rem;
  margin-bottom: 1.5625rem;
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
  height: 2.5rem;
  font-size: 16px;
  color: black;
  border-color: #2192ff;
  font-weight: 400;
  margin-top: 0.9375rem;
  background-color: #d1d1d1;
  cursor: pointer;
  &:hover {
    background: cornflowerblue;
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
  height: 2.5rem;
  color: black;
  border: none;
  margin-top: 0.625rem;

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
