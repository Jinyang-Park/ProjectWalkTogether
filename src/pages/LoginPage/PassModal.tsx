import React, { useState } from 'react';
import styled from 'styled-components';
import { sendPasswordResetEmail } from 'firebase/auth';
import { authService } from '../../common/firebase';
import { emailRegex } from '../../utils/UserInfoRegex';

function PassModal({ open, onClose, setLoginModalopen }: any) {
  const [findPwd, setFindPwd] = useState('');
  const email = findPwd;

  // 인풋값을 저장
  const findPasswordfnc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFindPwd(e.target.value);
  };

  // 비밀번호 찾기
  const handleSubmitClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (emailRegex.test(findPwd) === true) {
      await sendPasswordResetEmail(authService, email)
        .then(() => {
          alert('이메일을 발송했습니다. 보관함을 확인해 주세요.');
          setLoginModalopen(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          alert('등록되지 않은 아이디 입니다.');
          // ..
        });
    } else if (findPwd.length === 0) {
      alert('이메일을 입력해주세요');
    } else {
      alert('이메일을 정확히 입력해 주세요.');
    }
  };

  // 모달을 끄고있게 해준다.
  if (!open) return null;

  return (
    <Overlay>
      <ModalContainer className='modalContainer'>
        <CloseBtn onClick={onClose} className='closeBtn'>
          x
        </CloseBtn>
<<<<<<< HEAD
        <Title>비밀번호 찾기</Title>
        <InputContent className='content'>
          <Input
            onChange={findPasswordfnc}
            placeholder='비밀번호를 변경할 이메일을 입력해 주세요.'
=======
        <InputContent className='content'>
          <Input
            onChange={findPasswordfnc}
            placeholder='이메일을 입력해 주세요.'
>>>>>>> a47c1ef19c02f37ec2767d427eeed10eb7cd3e41
            className='EmailSubmit'
          ></Input>
        </InputContent>
        <BtnContainer className='btnContainer'>
          <Btnprimary
            onClick={handleSubmitClick}
            type='submit'
            className='btnprimary'
          >
            <Span className='bold'>제 출</Span>
          </Btnprimary>
        </BtnContainer>
      </ModalContainer>
    </Overlay>
  );
}

export default PassModal;

// 배경의 색(회색)
const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 200vh;
  z-index: 99;
  right: 0%;
  top: -30%;
  margin: auto;
`;

//모달 박스 (흰색)
const ModalContainer = styled.div`
  max-width: 600px;
  width: 100%;
  height: 300px;
  position: relative;
  top: 20%;
  display: flex;
  background-color: white;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  margin: auto;
  flex-direction: column;
`;

// X버튼
const CloseBtn = styled.p`
  position: absolute;
  top: 5px;
  right: 15px;
  cursor: pointer;
`;
const Title = styled.p`
  text-align: center;
  margin-top: 50px;
  font-size: 30px;
  font-weight: 400;
`;

// 인풋바깥 테두리
const InputContent = styled.div`
  border-radius: 0.625rem;
  border: 2px solid #bec5d7;
  width: 360px;
  height: 48px;
  margin-top: 25px;
  position: relative;
  top: 30px;
  margin: 0 auto;
`;

//인풋창
const Input = styled.input`
  border: none;
  width: 300px;
  height: 38px;
  position: relative;
  left: 30px;
  outline: none;
  z-index: 999;
`;

const BtnContainer = styled.div`
  display: flex;
<<<<<<< HEAD
  padding: 1rem 1rem;
  margin: auto;
`;

export const Btnprimary = styled.button`
  border-radius: 5px;
  width: 360px;
  height: 2.5rem;
  font-size: 16px;
  color: black;
  font-weight: 400;
  margin-top: 0.9375rem;
  background-color: #d1d1d1;
=======
  padding: 16px 16px;
`;

const Btnprimary = styled.button`
  width: 100px;
  margin: 8px;
  padding: 16px 0;
  border: none;
  color: #2192ff;
  background-color: aliceblue;
  border-radius: 35px;
>>>>>>> a47c1ef19c02f37ec2767d427eeed10eb7cd3e41
  cursor: pointer;
  &:hover {
    background: #7d8bae;
    color: white;
    transition: 0.5s;
  }
`;

//버튼 글자
const Span = styled.span`
  position: relative;
  bottom: 6px;
`;
