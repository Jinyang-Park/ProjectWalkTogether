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
import { currentUserUid, tochattingbox } from '../../../Rocoil/Atom';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

function ChattingList() {
  const mychatlist = useRecoilValue(currentUserUid);
  const [chatList, setChatList] = useState<any>([]);
  const [filtering, setFiltering] = useState([]);
  const [tochattingBox, SetTochattingBox] = useRecoilState<any>(tochattingbox);

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
  console.log('tochattingBox', tochattingBox);

  // const test2 = test.combineId;

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
                <S.ChattingUser
                  onClick={() => {
                    SetTochattingBox(() => user.combineId);
                  }}
                >
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
