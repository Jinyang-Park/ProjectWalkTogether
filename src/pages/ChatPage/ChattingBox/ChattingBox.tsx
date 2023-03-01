import React, { useEffect } from 'react';
import * as S from './ChattingBox.style';
import { useState } from 'react';
import { dbService } from '../../../common/firebase';
import {
  setDoc,
  doc,
  serverTimestamp,
  query,
  collection,
  where,
  orderBy,
  getDocs,
  onSnapshot,
  addDoc,
} from 'firebase/firestore';

import {
  currentUserUid,
  tochattingboxroomid,
  tochattingboxnickname,
  tochattingboxprofileimg,
} from '../../../Rocoil/Atom';
import { useRecoilValue } from 'recoil';

function ChattingBox() {
  const [message, setMessage] = useState('');
  const [getmessage, setGetMessage] = useState<any>([]);
  const roomId = useRecoilValue(tochattingboxroomid);
  const nickname = useRecoilValue(tochattingboxnickname);
  const profileImg = useRecoilValue(tochattingboxprofileimg);

  // const roomId = userInfo.roomId;

  const chattinguser = useRecoilValue(currentUserUid);

  const nowchattime = Date().slice(16, 21);

  //메세지 전송시 함수
  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === '') {
      alert('채팅을 입력해 주세요!');
      return;
    } else {
      const docRef = await addDoc(
        collection(dbService, 'Chatting', roomId, 'message'),
        {
          chattingRoomId: roomId,
          message: message,
          user: chattinguser,
          createdAt: new Date(),
          nowchattime: nowchattime,
          nickname: nickname,
          profileImg: profileImg,
        }
      );

      console.log('docRef:', docRef);
    }
  };

  const getChatting = async () => {
    if (chattinguser === '') {
      return;
    }

    const q = query(
      collection(dbService, 'Chatting', roomId, 'message'),
      where('chattingRoomId', '==', roomId),
      orderBy('createdAt', 'desc')
    );
    onSnapshot(q, (querySnapshot) => {
      const getChat = querySnapshot.docs.map((doc) => {
        const chat = {
          id: doc.id,
          ...doc.data(),
        };
        return chat;
      });
      setGetMessage(getChat);
      console.log('chatList:', getChat);
    });

    // const querySnapshot = await getDocs(
    //   query(
    //     collection(dbService, 'Chatting'),
    //     where('chattingRoomId', '==', roomId),
    //     orderBy('createdAt', 'desc')
    //   )
    // );
    // let list = [];
    // querySnapshot.forEach((doc) => {
    //   list = [...list, { id: doc.id, ...doc.data() }];
    // });
    // setGetMessage(list);
    // console.log('list:', list);
  };

  useEffect(() => {
    getChatting();
  }, [roomId]);

  const nowmessage = getmessage;

  console.log('getmessage:', getmessage);

  return (
    <div>
      <S.ChattingBox>
        <S.ChattingNickname>
          <S.ChattingNicknamePhoto>
            <img src={require('../../../assets/man.png')} />
          </S.ChattingNicknamePhoto>
          <S.ChattingNicknameto>여기가 닉네임입니다.</S.ChattingNicknameto>
        </S.ChattingNickname>
        <S.ChattingContent>
          {/* 글 들어가는 곳 */}
          {nowmessage.map((ars) => {
            return ars.user === chattinguser ? (
              <S.ChattingTextBox>
                <S.ChattingText>{ars.message}</S.ChattingText>
                <S.ChattingTime>{ars.nowchattime}</S.ChattingTime>
              </S.ChattingTextBox>
            ) : (
              <S.ChattingTextBoxLeft>
                <S.ChattingImg></S.ChattingImg>
                <S.ChattingTextLeft>{ars.message}</S.ChattingTextLeft>
                <S.ChattingTime>{ars.nowchattime}</S.ChattingTime>
              </S.ChattingTextBoxLeft>
            );
          })}
        </S.ChattingContent>
        <S.ChattingInputBox>
          <form
            onSubmit={(event) => sendMessage(event)}
            className='send-message'
          >
            <S.ChattingInputouter>
              <S.ChattingInput
                placeholder='채팅을 입력해 주세요'
                onChange={(e) => setMessage(e.target.value)}
              />
              <S.ChattingButton>
                <img src='../../../assets/SendBtn.png' />
              </S.ChattingButton>
            </S.ChattingInputouter>
          </form>
        </S.ChattingInputBox>
      </S.ChattingBox>
    </div>
  );
}

export default ChattingBox;
