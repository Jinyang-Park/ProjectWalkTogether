import React, { useState } from 'react';
import * as S from '../ChattingList/ChattingList.style';
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { dbService } from '../../../common/firebase';
import {
  currentUserUid,
  tochattingboxroomid,
  tochattingboxprofileimg,
  tochattingboxnickname,
} from '../../../Recoil/Atom';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

interface SetProps {
  SetTochattingBoxUid: React.Dispatch<React.SetStateAction<string>>;
  SetTochattingBoxRoomIndex: React.Dispatch<React.SetStateAction<string>>;
  SetTochattingBoxOpponenRoomIndex: React.Dispatch<
    React.SetStateAction<string>
  >;
  SetSwapBoxAndLists: React.Dispatch<React.SetStateAction<boolean>>;
  swapBoxAndLists: boolean;
  tochattingBoxRoomIndex: string;
  tochattingBoxOpponentRoomIndex: string;
  tochattingBoxUid: string;
}

interface ChattingUser {
  id: React.Key | null | undefined;
  combineId: string | ((currVal: string) => string);
  nickname: string;
  profile: string;
  opponentUserUid: React.SetStateAction<string>;
  myRoomId: React.SetStateAction<string>;
  posterChatroomId: React.SetStateAction<string>;
  lastConversation:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  isActive: string;
}

function ChattingList({
  SetTochattingBoxUid,
  SetTochattingBoxRoomIndex,
  SetTochattingBoxOpponenRoomIndex,
  SetSwapBoxAndLists,
  swapBoxAndLists,
  tochattingBoxRoomIndex,
}: SetProps) {
  const mychatlist = useRecoilValue(currentUserUid);
  const [chatList, setChatList] = useState<any>([]);
  const [isAcitList, SetIsActivList] = useState<boolean>(false);
  const [filtering, setFiltering] = useState([]);
  const [tochattingBoxRoomId, SetTochattingBoxRoomId] =
    useRecoilState<string>(tochattingboxroomid);

  const [tochattingBoxNickname, SetTochattingBoxNickname] = useRecoilState(
    tochattingboxnickname
  );
  const [tochattingBoxProfileImg, SetTochattingBoxProfileImg] =
    useRecoilState<string>(tochattingboxprofileimg);

  // 채팅리스트 클릭시 Chattingbox로 이동하는 데이터를 ChattingList 로 다시 옮긴다.
  // const opponentuid = tochattingBoxUid;
  const myRoomIndex = tochattingBoxRoomIndex;
  // const opponentRoomIndex = tochattingBoxOpponentRoomIndex;
  const currentUid = useRecoilValue(currentUserUid);
  // 채팅리스트
  const [chattingListActive, setChattingListActive] = useState();

  const getChattingList = async () => {
    if (mychatlist === '') {
      return;
    }

    const q = query(
      collection(dbService, 'ChattingUsers', mychatlist, 'chattingListroom'),
      // where('chattingRoomId', '==', roomId)
      orderBy('createdAt', 'desc')
    );
    onSnapshot(q, (querySnapshot) => {
      const getChatList = querySnapshot.docs.map((doc) => {
        const nowList = {
          id: doc.id,
          ...doc.data(),
        };
        return nowList;
      });
      setChatList(getChatList);
    });
  };

  const isActiveUpdate = async () => {
    if (!myRoomIndex) return;

    const updatMyDoc = await doc(
      dbService,
      'ChattingUsers',
      currentUid,
      'chattingListroom',
      myRoomIndex
    );
    updateDoc(updatMyDoc, {
      isActive: 'empty',
    });
  };

  useEffect(() => {
    getChattingList();
  }, [mychatlist]);

  const chattingUser = chatList;

  return (
    <>
      <S.ChattingBox swapBoxAndLists={swapBoxAndLists}>
        <S.ChattingListMessage>
          <S.ChattingListMessageWord>메세지</S.ChattingListMessageWord>
          <S.ChattingListMessagePhoto>
            <S.ChattingListBallon
              src={require('../../../assets/ballon.svg').default}
            />
          </S.ChattingListMessagePhoto>
        </S.ChattingListMessage>
        <S.ChattingListouter>
          <S.ChattingUserBox>
            {chattingUser.map((user: ChattingUser) => {
              return (
                <S.ChattingUser
                  key={user.id}
                  tabIndex={-1}
                  onClick={() => {
                    SetTochattingBoxRoomId(user.combineId);
                    SetTochattingBoxNickname(user.nickname);
                    SetTochattingBoxProfileImg(user.profile);

                    SetTochattingBoxUid(user.opponentUserUid);
                    SetTochattingBoxRoomIndex(user.myRoomId);
                    SetTochattingBoxOpponenRoomIndex(user.posterChatroomId);
                    SetSwapBoxAndLists(false);

                    isActiveUpdate();

                    // SetIsActivList(false);
                  }}
                >
                  <S.ChattingUserContents>
                    <S.UserImgCover>
                      <S.UserImg src={user.profile} />
                    </S.UserImgCover>
                    <S.NickNMessage>
                      <S.UserName>{user.nickname}</S.UserName>
                      <S.LastConversation>
                        {user.lastConversation}
                      </S.LastConversation>
                    </S.NickNMessage>
                  </S.ChattingUserContents>
                  {user.isActive === 'filled' ? (
                    <S.GreenLight></S.GreenLight>
                  ) : (
                    <></>
                  )}
                </S.ChattingUser>
              );
            })}
          </S.ChattingUserBox>
        </S.ChattingListouter>
        <S.ChattingFooterBox />
      </S.ChattingBox>
    </>
  );
}

export default ChattingList;
