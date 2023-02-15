import styled from 'styled-components';

export const InputLayout = styled.div`
  // background-color: #b1b1b1;
`;
export const InputBox = styled.div`
  position: relative;
  width: 360px;
  height: 640px;
  margin-left: -180px;
  margin-top: 80px;
  left: 50%;
  border-radius: 30px;
  padding: 5px;
  top: 50px;
  border: 2px solid #2192ff;
  z-index: 1;
`;
// 인풋태그
export const Input = styled.input`
  border: none;
  width: 15.625rem;
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
  border-radius: 0.625rem;
  width: 18.75rem;
  height: 2.8125rem;
  border: 0.1875rem solid #b2c8df;
  color: #b2c8df;
  margin-top: 1.5625rem;
`;

//인풋을 둘러싼 박스
export const InputBoxContent = styled.div`
  margin: 1.25rem;
`;

//잠깐만 !
export const LoginLogo = styled.div`
  text-align: center;
  margin-top: 6.875rem;
  margin-bottom: 1.5625rem;
  font-size: 1.25rem;
  color: #2192ff;
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
  width: 8.125rem;
  margin: auto;
`;

export const SocialBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3.125rem;
`;

export const FindBox = styled.div`
  display: flex;
`;
export const LineBox = styled.div`
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
  border-radius: 2.5rem;
  width: 15.625rem;
  height: 2.5rem;
  font-size: 1.25rem;
  color: #2192ff;
  border-color: #2192ff;
  font-weight: 900;
  margin-top: 0.9375rem;
  background-color: White;
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
  width: 6.875rem;
  height: 2.5rem;
  color: #2192ff;
  border: none;
  margin-top: 0.625rem;
  background-color: White;
  cursor: pointer;
  &:hover {
    color: #816ceb;
    transition: 0.4s;
  }
`;
