import {
  FormEvent,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  useEffect,
} from 'react';
import * as S from '../ChattingBox/ChattingBox.style';
import { useState } from 'react';
import { dbService } from '../../../common/firebase';
import {
  doc,
  query,
  collection,
  where,
  orderBy,
  onSnapshot,
  addDoc,
  updateDoc,
} from 'firebase/firestore';

import {
  currentUserUid,
  tochattingboxroomid,
  tochattingboxnickname,
  tochattingboxprofileimg,
} from '../../../Recoil/Atom';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
// import { relative } from 'path';

interface SetProps {
  tochattingBoxUid: string;
  tochattingBoxRoomIndex: string;
  tochattingBoxOpponentRoomIndex: string;
  swapBoxAndLists: boolean;
  SetSwapBoxAndLists: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Nowmessage {
  user: string;
  message:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | null
    | undefined;
  nowchattime:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | null
    | undefined;

  id: Key | null | undefined;
}
function ReviewBox({
  SetSwapBoxAndLists,
  swapBoxAndLists,
  tochattingBoxUid,
  tochattingBoxRoomIndex,
  tochattingBoxOpponentRoomIndex,
}: SetProps) {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [getmessage, setGetMessage] = useState<any>([]);
  //인풋값 초기화
  const [text, setText] = useState('');
  //ChattingList에서 받아오는값들
  const roomId = useRecoilValue(tochattingboxroomid);
  const nickname = useRecoilValue(tochattingboxnickname);
  const profileImg = useRecoilValue(tochattingboxprofileimg);
  const opponentuid = tochattingBoxUid;
  const myRoomIndex = tochattingBoxRoomIndex;
  const opponentRoomIndex = tochattingBoxOpponentRoomIndex;
  const currentUid = useRecoilValue(currentUserUid);
  // const roomId = userInfo.roomId;

  const chattinguser = useRecoilValue(currentUserUid);

  const nowchattime = Date().slice(16, 21);

  const getChatting = async () => {
    if (chattinguser === '') {
      return;
    }

    const q = query(
      collection(dbService, 'Review', roomId, 'message'),
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
    });
  };

  useEffect(() => {
    if (!roomId) return;
    getChatting();
  }, [roomId]);

  console.log('getmessage:', getmessage);

  return (
    <>
      <S.ChattingBox swapBoxAndLists={swapBoxAndLists}>
        <S.ChattingNickname>
          <S.BackButton onClick={() => SetSwapBoxAndLists(true)}>
            {' '}
            &lt;
          </S.BackButton>
          <S.ChattingNicknamePhoto>
            {profileImg === '' ? (
              <S.ChattingBoxheaderImgCover>
                <S.ChattingBoxheaderImg
                  src={require('../../../assets/avatar.svg').default}
                />
              </S.ChattingBoxheaderImgCover>
            ) : (
              <S.ChattingBoxheaderImgCover>
                <S.ChattingBoxheaderImg src={profileImg} />
              </S.ChattingBoxheaderImgCover>
            )}
          </S.ChattingNicknamePhoto>
          <S.ChattingNicknameto
          // onClick={() => navigate(`/mypage/${getPostings.UID}`)}
          >
            {nickname == '' ? '대화상대를 선택해 주세요' : `${nickname} 님`}
          </S.ChattingNicknameto>
        </S.ChattingNickname>

        <S.ChattingContent>{/* 글 들어가는 곳 */}</S.ChattingContent>
        <S.ChattingInputBox>
          <S.ChattingForm
            // onSubmit={(event) => sendMessage(event)}
            className='send-message'
          >
            <S.ChattingInputouter>
              <S.ChattingInput
                placeholder='채팅을 입력해 주세요'
                // onChange={(e) => setMessage(e.target.value)}
                // value={message}
              />
              <S.ChattingButton>
                <S.PlaneImg
                  src={require('../../../assets/plane.svg').default}
                />
              </S.ChattingButton>
            </S.ChattingInputouter>
          </S.ChattingForm>
        </S.ChattingInputBox>
      </S.ChattingBox>
    </>
  );
}

export default ReviewBox;
