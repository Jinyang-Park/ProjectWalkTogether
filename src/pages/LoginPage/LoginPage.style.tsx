import styled from 'styled-components';

export const InputLayout = styled.div``;

export const leftBox = styled.div`
  background: #adadad;
  border-radius: 10px;
  width: 370px;
  height: 436px;
  margin: auto;
`;
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
export const InputBoxContent = styled.div`
  width: 360px;

  margin: auto;
`;

// 인풋태그
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

//잠깐만 !
export const LoginLogo = styled.div`
  text-align: center;
  margin-top: 2.875rem;
  margin-bottom: 1.5625rem;
  font-size: 32px;
  color: black;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Line = styled.div`
  border-top: 0.0625rem solid #444444;
  margin-top: 0.3125rem;
  margin-bottom: 0.1875rem;
  width: 150px;
  margin: auto;
`;
export const OrText = styled.div`
  font-size: 10px;
`;

export const SocialBox = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  margin-left: 3.125rem;
`;

export const FindBox = styled.div`
  display: flex;
`;
export const LineBox = styled.div`
  margin: 10px;
  align-items: center;
  display: flex;
`;
export const Facebook = styled.img`
  margin: 1.25rem;
  width: 2.5rem;
  heigh: 2.5rem;
  cursor: pointer;
`;
export const Google = styled.img`
  margin: 1.25rem;
  width: 2.5rem;
  heigh: 2.5rem;
  cursor: pointer;
`;
export const KakaoLoginButton = styled.img`
  margin: 1.25rem;
  width: 2.5rem;
  heigh: 2.5rem;
  cursor: pointer;
`;

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
