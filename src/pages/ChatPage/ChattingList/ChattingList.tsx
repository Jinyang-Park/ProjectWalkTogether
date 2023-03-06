import React, { useState } from 'react';
import * as S from '../ChattingList/ChattingList.style';
import {
  query,
  collection,
  getDocs,
  orderBy,
  where,
  onSnapshot,
} from 'firebase/firestore';
import { dbService } from '../../../common/firebase';
import {
  currentUserUid,
  tochattingboxroomid,
  tochattingboxprofileimg,
  tochattingboxnickname,
} from '../../../Rocoil/Atom';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

function ChattingList() {
  const mychatlist = useRecoilValue(currentUserUid);
  const [chatList, setChatList] = useState<any>([]);
  const [filtering, setFiltering] = useState([]);
  const [tochattingBoxRoomId, SetTochattingBoxRoomId] =
    useRecoilState<any>(tochattingboxroomid);
  const [tochattingBoxNickname, SetTochattingBoxNickname] = useRecoilState<any>(
    tochattingboxnickname
  );
  const [tochattingBoxProfileImg, SetTochattingBoxProfileImg] =
    useRecoilState<any>(tochattingboxprofileimg);

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
      console.log('chatList:', chatList);
    });

    // const querySnapshot = await getDocs(
    //   query(
    //     collection(dbService, 'Users', `${mychatlist}`, 'chattingroom'),
    //     orderBy('createdAt', 'desc')
    //   )
    // );

    // let list = [];
    // querySnapshot.forEach((doc) => {
    //   list = [...list, { id: doc.id, ...doc.data() }];
    // });
    // setChatList(list);
    // console.log('list:', list);
  };

  useEffect(() => {
    getChattingList();
  }, [mychatlist]);

  const chattingUser = chatList;
  console.log('chatList', chatList);

  // const test2 = test.combineId;

  return (
    <>
      <S.ChattingBox>
        <S.ChattingListMessage>
          <S.ChattingListMessageWord>메세지</S.ChattingListMessageWord>
          <S.ChattingListMessagePhoto>
            <img src={require('../../../assets/ballon.svg').default} />
          </S.ChattingListMessagePhoto>
        </S.ChattingListMessage>
        <S.ChattingListouter>
          <S.ChattingUserBox>
            {chattingUser.map((user) => {
              return (
                <S.ChattingUser
                  onClick={() => {
                    SetTochattingBoxRoomId(user.combineId);
                    SetTochattingBoxNickname(user.nickname);
                    SetTochattingBoxProfileImg(user.profile);
                  }}
                >
                  {/* <div style={{ backgroundImage: `${user.porfile}` }}></div> */}
                  <S.UserImgCover>
                    <S.UserImg src={user.profile} />
                  </S.UserImgCover>

                  <S.UserName>{user.nickname}</S.UserName>
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
