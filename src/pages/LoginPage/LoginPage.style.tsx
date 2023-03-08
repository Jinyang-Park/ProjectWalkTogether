import styled from 'styled-components';

export const InputLayout = styled.div``;

export const InputBox = styled.div`
  display: flex;

  flex-wrap: wrap;
  width: 460px;
  height: 600px;

  margin-top: 80px;
  margin: auto;
  border-radius: 10px;
  padding: 5px;
  position: relative;
  top: 100px;
  box-shadow: 0 0 10px #bec5d7;
  z-index: 1;
`;
export const InputBoxContent = styled.div`
  width: 360px;

  margin: auto;
`;

// 인풋태그
export const Input = styled.input`
  border: none;
  width: 320px;
  height: 38px;
  position: relative;
  left: 30px;
  outline: none;
  background-color: transparent;
  :focus-visible {
    outline: none;
  }
`;

export const ResetButton = styled.img`
  margin: 14px;
  width: 14px;
  cursor: pointer;
`;
//Input태그의 테두리
export const Inputholder = styled.div`
  margin: auto;
  border-radius: 10px;
  width: 360px;
  height: 48px;
  border: 2px solid #bec5d7;
  color: #b2c8df;

  margin-top: 10px;
`;

//인풋을 둘러싼 박스

//잠깐만 !
export const LoginLogo = styled.div`
  text-align: center;
  margin-top: 46px;
  margin-bottom: 25px;
  font-size: 32px;
  font-family: 'SUITERegular';
  letter-spacing: -0.1px;
  color: black;
`;
export const LogoText = styled.div`
  font-family: 'SUITERegular';
  letter-spacing: -0.1px;
`;

export const ButtonBox = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
`;

export const OrText = styled.div`
  padding-top: 20px;
  font-size: 13px;
  align-items: center;
  text-align: center;
  font-family: 'SUITERegular';
  letter-spacing: -0.1px;
  color: #7d8bae;
`;

export const SocialBox = styled.div`
  gap: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FindBox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
export const LineBox = styled.div`
  margin: 10px;
  align-items: center;
  display: flex;
`;
export const Naver = styled.img`
  margin: 20px;
  width: 40px;

  cursor: pointer;
`;

export const Facebook = styled.img`
  margin: 20px;
  width: 40px;

  cursor: pointer;
`;

export const Google = styled.img`
  margin: 20px;
  width: 40px;

  cursor: pointer;
`;
export const KakaoLoginButton = styled.img`
  margin: 20px;
  width: 40px;

  cursor: pointer;
`;

export const LoginBtn = styled.button`
  border-radius: 5px;
  width: 360px;
  height: 40px;
  font-size: 16px;
  color: black;
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
  margin: 0 auto;
  justify-content: space-between;
`;

export const RegisterBtn = styled.button`
  background-color: transparent;
  padding-left: 5px;
  font-family: 'SUITERegular';
`;

export const FindBtn = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  font-family: 'SUITERegular';
  letter-spacing: -0.1px;
  color: #7d8bae;
  margin: auto;
  padding-top: 10px;
`;

export const ResisterText = styled.p`
  font-size: 13px;
  align-items: center;
  text-align: center;
  font-family: 'SUITERegular';
  letter-spacing: -0.1px;
  color: #7d8bae;
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
