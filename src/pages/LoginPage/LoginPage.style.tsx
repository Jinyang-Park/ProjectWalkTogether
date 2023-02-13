import styled from 'styled-components';

export const InputBox = styled.div`
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
export const Input = styled.input`
  border: none;
  width: 250px;
  height: 38px;
  position: relative;
  left: 30px;
  outline: none;
  :focus-visible {
    outline: none;
  }
`;

//Input태그의 테두리
export const Inputholder = styled.div`
  border-radius: 10px;
  width: 300px;
  height: 45px;
  border: 3px solid #b2c8df;
  color: #b2c8df;
  margin-top: 25px;
`;

//인풋을 둘러싼 박스
export const InputBoxContent = styled.div`
  margin: 20px;
`;

//잠깐만 !
export const LoginLogo = styled.div`
  text-align: center;
  margin-top: 110px;
  margin-bottom: 25px;
  font-size: 20px;
  color: #2192ff;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Line = styled.div`
  border-top: 1px solid #444444;
  margin-top: 5px;
  margin-bottom: 3px;
  width: 130px;
  margin: auto;
`;

export const SocialBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
`;

export const FindBox = styled.div`
  display: flex;
`;
export const LineBox = styled.div`
  align-items: center;
  display: flex;
`;
export const Facebook = styled.img`
  margin: 20px;
  width: 40px;
  heigh: 40px;
`;
export const Google = styled.img`
  margin: 20px;
  width: 40px;
  heigh: 40px;
`;
export const Twitter = styled.img`
  margin: 20px;
  width: 40px;
  heigh: 40px;
`;

export const LoginBtn = styled.button`
  border-radius: 40px;
  width: 250px;
  height: 40px;
  font-size: 20px;
  color: #2192ff;
  border-color: #2192ff;
  font-weight: 900;
  margin-top: 15px;
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
  width: 110px;
  height: 40px;
  color: #2192ff;
  border: none;
  margin-top: 10px;
  background-color: White;
  cursor: pointer;
  &:hover {
    color: #816ceb;
    transition: 0.4s;
  }
`;
