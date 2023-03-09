import styled from 'styled-components';

export const InputLayout = styled.div`
  position: relative;
`;

export const InputBox = styled.div`
  top: 64px;
  position: absolute;
  display: flex;
  margin: 64px 0px 64px 0px;
  flex-wrap: wrap;
  width: 386px;
  height: 532px;
  bottom: 64px;

  margin: auto;
  border-radius: 10px;
  position: relative;

  box-shadow: 0 0 10px #bec5d7;
  z-index: 1;
`;
export const InputBoxContent = styled.div`
  width: 306px;

  margin: auto;
`;

// 인풋태그
export const Input = styled.input`
  border: none;
  width: 240px;
  margin-top: 10px;
  height: 2.375rem;
  position: relative;

  margin: 0 auto;
  left: 30px;
  font-family: 'SUITERegular';
  outline: none;
  background-color: transparent;
`;

export const ResetButton = styled.img`
  margin: 14px;
  width: 14px;
  cursor: pointer;
`;
//Input태그의 테두리
export const Inputholder = styled.div`
  margin: auto;
  border-radius: 0.625rem;
  width: 306px;
  height: 47px;
  border: 2px solid #bec5d7;
  color: #b2c8df;

  margin-top: 10px;
`;

//인풋을 둘러싼 박스

//잠깐만 !
export const LoginLogo = styled.div`
  text-align: center;

  margin-bottom: 48px;
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
  font-size: 10px;
  align-items: center;
  text-align: center;
  font-family: 'SUITERegular';
  letter-spacing: -0.1px;
  font-weight: 300;
  color: #7d8bae;
`;

export const SocialBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  /* width: 100px;
  background-color: green; */
  margin: 16px 0px 27px 0px;
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

export const Facebook = styled.img`
  width: 2.5rem;

  cursor: pointer;
`;

export const Google = styled.img`
  width: 2.5rem;

  cursor: pointer;
`;

export const LoginBtn = styled.button<{ state: boolean }>`
  border-radius: 5px;
  width: 306px;
  height: 46px;
  font-size: 16px;
  color: black;
  font-weight: 400;
  margin-top: 0.9375rem;
  background: ${(props) => (props.state ? '#7d8bae;' : '#C8D1E0')};
  cursor: pointer;

  color: white;

  font-family: 'SUITERegular';
`;
export const ThirdBox = styled.div`
  display: flex;
  height: 20px;
`;

export const RegisterBtn = styled.button`
  background-color: transparent;
  padding-left: 5px;
  font-weight: 300;
  font-size: 12px;
  font-family: 'SUITEBold';
  color: black;
`;

export const FindBtn = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  font-family: 'SUITERegular';
  letter-spacing: -0.1px;
  color: #7d8bae;
  margin: auto;
  font-size: 10px;
  padding-top: 10px;
`;

export const ResisterText = styled.p`
  font-size: 11px;

  font-family: 'SUITERegular';
  letter-spacing: -0.1px;
  color: #7d8bae;
`;
export const Validityfontbox = styled.div`
  border: none;
  font-family: 'SUITERegular';
  font-size: 10px;
  height: 20px;
  position: relative;
  right: 10px;
  margin-top: 5px;
  outline: none;
  color: #7d8bae;
  margin-left: 17px;
`;

// export const Error = styled.strong`
//   display: ${(props) => (props.display ? 'block' : 'none')}; ;
// `;
export const ValidityEmailCircle = styled.img<{ validateEmailColor: boolean }>`
  background-color: ${(Props) =>
    Props.validateEmailColor ? '#1BE08D' : '#FF8F8F'};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: 10px;

  z-index: 99;
`;

export const ValidBox = styled.div`
  display: flex;
  width: 306px;
`;
