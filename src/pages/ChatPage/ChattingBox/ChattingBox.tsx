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
  updateDoc,
} from 'firebase/firestore';

import {
  currentUserUid,
  tochattingboxroomid,
  tochattingboxnickname,
  tochattingboxprofileimg,
} from '../../../Rocoil/Atom';
import { useRecoilValue } from 'recoil';

interface SetProps {
  tochattingBoxUid: string;
  tochattingBoxRoomIndex: string;
}

function ChattingBox({ tochattingBoxUid, tochattingBoxRoomIndex }: SetProps) {
  const [message, setMessage] = useState('');
  const [getmessage, setGetMessage] = useState<any>([]);
  //인풋값 초기화
  const [text, setText] = useState('');
  //ChattingList에서 받아오는값들
  const roomId = useRecoilValue(tochattingboxroomid);
  const nickname = useRecoilValue(tochattingboxnickname);
  const profileImg = useRecoilValue(tochattingboxprofileimg);
  const opponentuid = tochattingBoxUid;
  const roomIndex = tochattingBoxRoomIndex;
  const currentUid = useRecoilValue(currentUserUid);

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
          // nickname: nickname,
          profileImg: profileImg,
        }
      ).then(() => {
        const updatMyDoc = doc(
          dbService,
          'ChattingUsers',
          currentUid,
          'chattingListroom',
          roomIndex
        );
        // const updatYourDoc = doc(
        //   dbService,
        //   'ChattingUsers',
        //   opponentuid,
        //   'chattingListroom',
        //   roomIndex
        // );
        updateDoc(updatMyDoc, {
          isActive: 'filled',
          lastConversation: message,
          createdAt: new Date(),
        });

        // updateDoc(updatYourDoc, {
        //   isActive: 'filled',
        //   lastConversation: message,
        //   createdAt: new Date(),
        // });
      });
      setMessage('');

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
      console.log('tochattingBoxUid:', tochattingBoxUid);
    });
  };

  useEffect(() => {
    getChatting();
  }, [roomId]);

  const nowmessage = getmessage;

  console.log('opponentuid', opponentuid);

  return (
    <div>
      <S.ChattingBox>
        <S.ChattingNickname>
          <S.ChattingNicknamePhoto>
            {profileImg === '' ? (
              <S.ChattingBoxheaderImgCover>
                <S.ChattingBoxheaderImg
                  src={require('../../../assets/avatar.svg').default}
                />
              </S.ChattingBoxheaderImgCover>
            ) : (
              <S.ChattingBoxheaderImgCover>
                {' '}
                <S.ChattingBoxheaderImg src={profileImg} />
              </S.ChattingBoxheaderImgCover>
            )}
          </S.ChattingNicknamePhoto>
          <S.ChattingNicknameto>{nickname} 님</S.ChattingNicknameto>
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
                <S.ChattingImg>
                  <S.ChattingBoxheaderImgCover>
                    <S.ChattingBoxheaderImg src={profileImg} />
                  </S.ChattingBoxheaderImgCover>
                </S.ChattingImg>
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
                value={message}
              />
              <S.ChattingButton>
                <img src={require('../../../assets/plane.svg').default} />
              </S.ChattingButton>
            </S.ChattingInputouter>
          </form>
        </S.ChattingInputBox>
      </S.ChattingBox>
    </div>
  );
}

export default ChattingBox;
