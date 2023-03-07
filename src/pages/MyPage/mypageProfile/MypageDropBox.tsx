import { deleteUser, getAuth } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MypageDropBox.style';

const MypageDropBox = () => {
  const navigate = useNavigate();

  const onDeleteAccount = () => {
    if (window.confirm('탈퇴하실건가요?')) {
      deleteUser(getAuth().currentUser).then(() => {
        alert('탈퇴가 완료 되었습니다.');
        navigate('/');
      });
    }
  };
  return (
    <>
      <S.DropBoxWrapper>
        <S.DropBoxDeleteAccountBtn
          onClick={() => {
            navigate('/changepassword');
          }}
        >
          비밀번호 변경
        </S.DropBoxDeleteAccountBtn>
        <S.DropBoxModifyAccountBtn onClick={onDeleteAccount}>
          회원 탈퇴
        </S.DropBoxModifyAccountBtn>
      </S.DropBoxWrapper>
    </>
  );
};

export default MypageDropBox;
