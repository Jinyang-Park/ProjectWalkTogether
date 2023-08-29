import React, { useEffect, useState } from 'react';
import * as S from './DropBox.style';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { dbService } from './../../../common/firebase';
import { useNavigate } from 'react-router-dom';
import MessageWindow, {
  MessageWindowLogoType,
  MessageWindowProperties,
  messageWindowPropertiesAtom,
} from '../../../messagewindow/MessageWindow';
import { useSetRecoilState } from 'recoil';
import { MoreBtn } from '../DetailPage.style';
import {
  getDoc,
  doc,
  updateDoc,
  setDoc,
  addDoc,
  collection,
  getDocs,
  query,
  orderBy,
  onSnapshot,
  DocumentReference,
  DocumentData,
  deleteDoc,
} from 'firebase/firestore';

interface DropProps {
  id: any;
  getPostings: any;
  isDropped: React.Dispatch<React.SetStateAction<boolean>>;
  setComplete: React.Dispatch<React.SetStateAction<boolean>>;
  setShowBox: React.Dispatch<React.SetStateAction<boolean>>;
  SetReviewList: React.Dispatch<React.SetStateAction<object>>;
  getPostingUID: string;
  CurrentUid: string;
}

const DropBox = ({
  setShowBox,
  id,
  getPostings,
  setComplete,
  CurrentUid,
  getPostingUID,
  SetReviewList,
}: DropProps) => {
  const navigate = useNavigate();

  // MessageWindow 세팅
  const setState = useSetRecoilState<MessageWindowProperties>(
    messageWindowPropertiesAtom
  );

  // 산책완료 변경
  const [posting, setPosting] = useState('posting');

  const postId = id;

  var tempChatList;

  const getChattingList = async () => {
    if (CurrentUid === '') {
      return;
    }
    const querySnapshot = await getDocs(
      query(
        collection(
          dbService,
          'ChattingUsers',
          `${CurrentUid}`,
          'chattingListroom'
        ),
        orderBy('createdAt', 'desc')
      )
    );

    let list: any[] = [];
    querySnapshot.forEach((doc) => {
      list = [...list, { id: doc.id, ...doc.data() }];
    });
    return list;
  };

  //삭제 버튼
  const DeletePostHandler = async (id: any) => {
    MessageWindow.showWindow(
      new MessageWindowProperties(
        true,
        '게시글을 삭제하실 건가요?',
        '삭제한 게시글을 되돌릴 수 없어요',
        [
          {
            text: '게시글 삭제하기',
            callback: async () =>
              await deleteDoc(doc(dbService, 'Post', id))
                .then(() => {
                  navigate(`/`);
                })
                //  then과 catch 세트이다.
                .catch((error) => {
                  // });
                }),
          },
          {
            text: '취소하기',
            callback: () => {
              return;
            },
          },
        ],
        MessageWindowLogoType.Perplex
      ),
      setState
    );
  };

  const CompletePostHandler = async (id: any) => {
    MessageWindow.showWindow(
      new MessageWindowProperties(
        true,
        '산책을 완료하셨나요?',
        '',
        [
          {
            text: '산책 완료하기',
            // callback: async () =>
            //   await updateDoc(doc(dbService, 'Post', id), {
            //     ProceedState_Posting: 'postingDone',
            //   })
            //     .then(() => {
            //       setComplete(true);
            //     })
            //     //  then과 catch 세트이다.
            //     .catch((error) => {
            //       // });
            //     }),
            callback: async () => {
              const data = await getChattingList();
              const getList = data.filter((t) => {
                return t.combineId.includes(postId);
              });
              SetReviewList(getList);
              // AppointSomeoneToReview(id);
            },
          },
          {
            text: '취소하기',
            callback: () => {
              return;
            },
          },
        ],
        MessageWindowLogoType.Congratulation
      ),
      setState
    );
  };

  // const AppointSomeoneToReview = async (id: any) => {
  //   MessageWindow.showWindow(
  //     new MessageWindowProperties(
  //       true,
  //       '산책을 완료하셨나요?',
  //       '',
  //       [
  //         {
  //           text: '산책 완료하기',
  //           callback: async () =>
  //             await updateDoc(doc(dbService, 'Post', id), {
  //               ProceedState_Posting: 'postingDone',
  //             })
  //               .then(() => {
  //                 setComplete(true);
  //               })
  //               //  then과 catch 세트이다.
  //               .catch((error) => {
  //                 // });
  //               }),
  //         },
  //         {
  //           text: '취소하기',
  //           callback: () => {
  //             return;
  //           },
  //         },
  //       ],
  //       MessageWindowLogoType.Congratulation
  //     ),
  //     setState
  //   );
  // };

  return (
    <>
      <S.DropBoxWrapper>
        {/*수정버튼 영역 */}
        <S.DropUpdateBtn
          onClick={() => navigate(`/edit/${id}`, { state: getPostings })}
        >
          <S.UpdateIcon
            src={
              require('../../../assets/DetailPageIcon/ModifyIcon.svg').default
            }
          />
          <S.UpdateTitle>게시글 수정하기</S.UpdateTitle>
        </S.DropUpdateBtn>
        {/*산책버튼 영역 */}
        <S.DropCompletBtn onClick={() => CompletePostHandler(id)}>
          <S.CompleteIcon
            src={
              require('../../../assets/DetailPageIcon/completeIcon.svg').default
            }
          />
          <S.CompleteTitle>산책 완료하기</S.CompleteTitle>
        </S.DropCompletBtn>
        {/*삭제버튼 영역 */}
        <S.DropDeleteBtn onClick={() => DeletePostHandler(id)}>
          <S.DeleteIcon
            src={
              require('../../../assets/DetailPageIcon/trashIcon.svg').default
            }
          />
          <S.DeleteTitle>게시글 삭제하기</S.DeleteTitle>
        </S.DropDeleteBtn>
      </S.DropBoxWrapper>
    </>
  );
};

export default DropBox;
