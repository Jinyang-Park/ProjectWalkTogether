import { async } from '@firebase/util';
import {
  getAuth,
  signInWithEmailAndPassword,
  updatePassword,
} from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authService } from '../../common/firebase';
import MessageWindow, {
  MessageWindowLogoType,
  MessageWindowProperties,
  messageWindowPropertiesAtom,
} from '../../messagewindow/MessageWindow';
import { isLoggedIn } from '../../Rocoil/Atom';

const ChangePassword = () => {
  const userloggedin = useRecoilValue(isLoggedIn);

  const [currentpassword, setCurrentPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [checkpassword, setCheckPassword] = useState('');
  const navigate = useNavigate();

  const setState = useSetRecoilState<MessageWindowProperties>(
    messageWindowPropertiesAtom
  );

  const props = new MessageWindowProperties(
    true, // true로 하셔야 창 띄워집니다.
    '비밀번호가 변경되었어요!', // 보여줄 메시지
    [
      {
        text: '이전으로 돌아가기',
        callback: () => {
          navigate(-1); // 여기에 할 거 하시면 됩니다.
        },
      },
    ],
    MessageWindowLogoType.Checkmark
  );

  const passwordChangeBtn = async () => {
    if (userloggedin) {
      signInWithEmailAndPassword(
        getAuth(),
        authService.currentUser.email,
        currentpassword
      ).then((user) => {
        // 비밀번호 검증 성공
        updatePassword(getAuth().currentUser, newpassword).then(() => {
          MessageWindow.showWindow(props, setState);
        });
      });
    } else {
      // 비밀번호 찾기 페이지에서 들어왔을때 비밀번호 재설정 버튼을 누르면 여기가 실행됩니다.
    }
  };

  return (
    <div>
      <div>비밀번호 재설정 하세요</div>

      {userloggedin && (
        <input
          value={currentpassword}
          type='password'
          placeholder='현재 비밀번호 확인'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCurrentPassword(e.currentTarget.value);
          }}
        ></input>
      )}

      <input
        value={newpassword}
        type='password'
        placeholder='새로운 비밀번호를 입력해주세요'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewPassword(e.currentTarget.value);
        }}
      ></input>
      <div>잘못된 형식의 비밀번호 입니다</div>

      <input
        value={checkpassword}
        type='password'
        placeholder='새로운 비밀번호를 재입력 해주세요'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setCheckPassword(e.currentTarget.value);
        }}
      ></input>
      <div>비밀번호가 일치하지 않습니다</div>

      <button onClick={passwordChangeBtn}>비밀번호 재설정</button>
      <button>이전으로 돌아가기</button>
    </div>
  );
};
export default ChangePassword;
