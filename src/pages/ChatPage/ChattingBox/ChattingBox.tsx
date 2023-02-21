import React, { useEffect } from 'react';
import * as S from './ChattingBox.style';
import { useState } from 'react';
import { authService, dbService } from '../../../common/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

function ChattingBox() {
  const [message, setMessage] = useState('');
  const { uid, displayName, photoURL } = authService.currentUser;

  //메세지 전송시 함수
  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === '') {
      alert('Enter valid message');
      return;
    }

    await addDoc(collection(dbService, 'Chat'), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage('');
  };
  useEffect(() => console.log('message:', displayName));

  return (
    <div>
      <S.ChattingBox>
        <S.ChattingNickname>
          <S.ChattingNicknamePhoto>
            <img src={require('../../../assets/man.png')} />
          </S.ChattingNicknamePhoto>
          <S.ChattingNicknameto>여기가 닉네임입니다.</S.ChattingNicknameto>
        </S.ChattingNickname>
        <S.ChattingContent></S.ChattingContent>
        <S.ChattingInputBox>
          <form
            onSubmit={(event) => sendMessage(event)}
            className="send-message"
          >
            <S.ChattingInputouter>
              <S.ChattingInput
                placeholder="채팅을 입력해 주세요"
                onChange={(e) => setMessage(e.target.value)}
              />
              <S.ChattingButton>
                <img src="../../../assets/SendBtn.png" />
              </S.ChattingButton>
            </S.ChattingInputouter>
          </form>
        </S.ChattingInputBox>
      </S.ChattingBox>
    </div>
  );
}

export default ChattingBox;
