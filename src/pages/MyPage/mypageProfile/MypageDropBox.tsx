import { getAuth } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MypageDropBox = () => {
  const navigate = useNavigate();

  const onDeleteAccount = () => {
    // if (window.confirm('탈퇴하실건가요?')) {
    //   deleteUser(getAuth().currentUser).then(() => {
    //     alert('탈퇴가 완료 되었습니다.');
    //     navigate('/');
    //   });
    // }
  };
  return (
    <>
      <DropBoxWrapper>
        <DropBoxDeleteAccountBtn
          onClick={() => {
            navigate('/changepassword');
          }}
        >
          비밀번호 변경
        </DropBoxDeleteAccountBtn>
        <DropBoxModifyAccountBtn onClick={onDeleteAccount}>
          회원 탈퇴
        </DropBoxModifyAccountBtn>
      </DropBoxWrapper>
    </>
  );
};

export default MypageDropBox;
{
  /* <button
onClick={() => {
  navigate('/changepassword');
}}
>
비밀번호 변경
</button>
<button onClick={onDeleteAccount}>탈퇴하기</button> */
}
export const DropBoxWrapper = styled.div``;
export const DropBoxDeleteAccountBtn = styled.div``;
export const DropBoxModifyAccountBtn = styled.div``;
