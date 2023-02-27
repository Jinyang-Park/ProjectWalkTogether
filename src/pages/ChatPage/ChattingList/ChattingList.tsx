import React, { useState } from 'react';
import * as S from '../ChattingList/ChattingList.style';
import {
  doc,
  onSnapshot,
  query,
  collection,
  getDocs,
  orderBy,
} from 'firebase/firestore';
import { dbService } from '../../../common/firebase';
import { currentUserUid } from '../../../Rocoil/Atom';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

function ChattingList() {
  const mychatlist = useRecoilValue(currentUserUid);
  const [chatList, setChatList] = useState<any>([]);
  const [filtering, setFiltering] = useState([]);

  const getChattingList = async () => {
    if (mychatlist === '') {
      return;
    }
    const querySnapshot = await getDocs(
      query(
        collection(dbService, 'Users', `${mychatlist}`, 'chattingroom'),
        orderBy('createdAt', 'desc')
      )
    );

    let list = [];
    querySnapshot.forEach((doc) => {
      list = [...list, { id: doc.id, ...doc.data() }];
    });
    setChatList(list);
    console.log('list:', list);
  };

  useEffect(() => {
    getChattingList();
  }, [mychatlist]);

  const chattingUser = chatList;

  // const test2 = test.combineId;
  const array = [];
  const test1 = chatList;

  for (var a = 0; a < test1.length; a++) {
    for (var b = 1; b < test1.length; b++) {}
  }

  console.log('test1:', test1);

  return (
    <>
      <S.ChattingBox>
        <S.ChattingListMessage>
          <S.ChattingListMessageWord>메세지</S.ChattingListMessageWord>
          <S.ChattingListMessagePhoto>
            <img src={require('../../../assets/pungsun.png')} />
          </S.ChattingListMessagePhoto>
        </S.ChattingListMessage>
        <S.ChattingListouter>
          <S.ChattingUserBox>
            {chattingUser.map((user) => {
              return (
                <S.ChattingUser>
                  {/* <div style={{ backgroundImage: `${user.porfile}` }}></div> */}
                  <S.UserImg src={user.profile} />

                  <S.UserName>{user.nicname}</S.UserName>
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
