import styled from 'styled-components';

export const InputLayout = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  /* min-height: calc(100vh - 292px); */
  top: 150px;
  position: relative;
`;

export const InputBox = styled.div`
  width: 386px;
  height: 532px;

  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(190, 197, 215, 0.8);
  z-index: 1;
`;
export const InputBoxContent = styled.div`
  width: 306px;

  margin: auto;
`;

// 인풋태그
export const Input = styled.input`
  outline: none;
  position: relative;
  left: 10px;
  top: 7px;
  width: 230px;
  background-color: transparent;

  &&::placeholder {
    font-family: 'SUIT';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #24264e;
  }
  ::-ms-reveal {
    display: none;
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
  width: 306px;
  height: 47px;
  border: 2px solid #bec5d7;
  color: #b2c8df;
  position: relative;

  margin-top: 10px;
`;

//초기화버튼
export const CheckBtn = styled.div`
  width: 17px;
  height: 13px;
  position: absolute;
  left: 251px;
  bottom: 12px;
  cursor: pointer;
  :active {
    width: 17px;
    height: 13px;
  }
`;

export const CheckOpenBtn = styled.div`
  width: 19px;
  height: 22px;
  position: absolute;
  left: 250px;
  bottom: 8px;
  cursor: pointer;
  :active {
    width: 19px;
    height: 22px;
  }
`;
export const DeleteEmailBtn = styled.div`
  width: 13px;
  height: 13px;
  position: absolute;
  left: 280px;
  bottom: -2px;
  cursor: pointer;
  :active {
    width: 13px;
    height: 13px;
  }
`;

export const DeleatePassBox = styled.div`
  left: 30px;
`;

export const DeletePassBtn = styled.div`
  width: 13px;
  height: 13px;
  position: relative;
  left: 280px;
  bottom: 12px;
  cursor: pointer;
  :active {
    width: 13px;
    height: 13px;
  }
`;
export const CheckPassBox = styled.div`
  position: relative;
`;
export const CheckEmailBox = styled.div`
  position: relative;
`;
export const Checkeye = styled.img``;
//초기화버튼 이미지
export const CheckIconright = styled.img``;

//인풋을 둘러싼 박스

//잠깐만 !
export const LoginLogo = styled.div`
  height: 112px;
  /* background-color: antiquewhite; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 7px;
`;
export const LogoText = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 25px;
  color: #24264e;
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
  width: 40px;

  cursor: pointer;
`;

export const Google = styled.img`
  width: 40px;

  cursor: pointer;
`;

export const LoginBtn = styled.button<{ state: boolean }>`
  border-radius: 5px;
  width: 306px;
  height: 46px;
  font-size: 16px;
  color: black;
  font-weight: 400;
  margin-top: 15px;
  background: ${(props) => (props.state ? '#7d8bae;' : '#C8D1E0')};
  cursor: pointer;
  margin-top: 56px;
  color: white;

  font-family: 'SUITERegular';
`;
export const ThirdBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const RegisterBtn = styled.button`
  background-color: transparent;
  padding-left: 5px;
  margin-right: 2px;
  font-weight: 600;
  font-size: 12px;
  font-family: 'SUITERegular';
  color: black;
`;

export const ToFindPage = styled.button`
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

export const FindBtn = styled.button`
  width: 306px;
  height: 46px;
  background-color: #7d8bae;
  position: relative;
  border-radius: 4px;

  top: 263px;
`;

export const BackBtn = styled.button`
  position: relative;
  top: 252px;
  background-color: white;
  font-size: 10px;
  color: #7d8bae;
`;

export const FindBtnText = styled.p`
  color: white;
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
`;

export const ResisterText = styled.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  font-family: 'SUITERegular';
  letter-spacing: -0.5px;
  color: #7d8bae;
`;
export const Validityfontbox = styled.div`
  border: none;
  font-family: 'SUITERegular';
  font-size: 10px;
  height: 20px;
  position: relative;
  right: 10px;
  top: 30px;
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
export const ButtonIcon = styled.img`
  width: 10px;
  height: 10px;
  object-fit: contain;
  cursor: pointer;
`;
export const RegisterBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
