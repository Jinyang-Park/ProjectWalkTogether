import React from 'react';
import * as S from './ReviewModal.css';
import { useState } from 'react';
import { doc, setDoc, addDoc, collection, updateDoc } from 'firebase/firestore';
import { dbService } from './../../common/firebase';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userForChat } from '../../Recoil/Atom';
import { uuidv4 } from '@firebase/util';

interface ReviewModalProps {
  reviewList: object;
  id: string;
}

function ReviewModal({ reviewList, id }: ReviewModalProps) {
  //선택한 리뷰 상대들 목록
  const [selectedPeople, setSelectedPeople] = useState<any>([]);
  //모달창 상태값 현재 필요성을 다시 생각해 봐야될 것 같다.
  const [reviewModalState, setReviewModalState] = useState(false);
  const navigate = useNavigate();
  const UID = useRecoilValue(userForChat);
  //시간
  const nowchattime = Date().slice(16, 21);
  const paramID = id;



  if (reviewList === undefined) return;
  const showlist: any = reviewList;

  // const newList: any = [...selectedPeople];

  const handlePersonClick = (person: any) => {
    if (selectedPeople.includes(person)) {
      setSelectedPeople(selectedPeople.filter((p: any) => p !== person));
    } else {
      setSelectedPeople([...selectedPeople, person]);
    }
  };

  const handleReviewBeginButton = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const myReviewList = selectedPeople.map((t: any, i: number) => {
      return {
        ...t,
        reviewRoomId: t.combineId + 'review',
        id: i,
        createdAt: new Date(),
      };
    });

    const sendconfirm = myReviewList.map(async (item: any) => {
      //게시글 상태 posting=>postingDone
      await updateDoc(doc(dbService, 'Post', paramID), {
        ProceedState_Posting: 'postingDone',
      }).catch((error) => {
        console.log('게시글 상태 완료 실패', error);
      });

      //리뷰상대의 채팅방에 올라가는 글 작성자에 대한 리뷰
      await setDoc(
        doc(
          dbService,
          'ChattingUsers',
          `${item.opponentUserUid}`,
          'chattingListroom',
          `${item.reviewRoomId}`
        ),
        {
          ...item,
          nickname: UID.mynickname,
          reviewRoomId: item.reviewRoomId + 'opponent',
          opponentUserUid: item.uid,
          uid: item.opponentUserUid,
        }
      ).then(async () => {
        await addDoc(
          collection(
            dbService,
            'Review',
            item.reviewRoomId + 'opponent',
            'message'
          ),
          {
            chattingRoomId: item.reviewRoomId + 'opponent',
            opponentsUid: item.uid,
            myuid: item.opponentUserUid,
            uid: item.uid,
            createdAt: new Date(),
            nowchattime: nowchattime,
            nickname: UID.mynickname,
            profileImg: item.profile,
            select: [
              '친절하고 매너가 좋아요',
              '재미있어요',
              '자상하고 편안했어요!',
              '대화의 폭이 넓었어요!',
              '시간약속을 잘 지켰어요',
            ],
            confirmState: true,
            inputState: false,
          }
        ).catch((error) => {
          console.log('대화 상대에게 리뷰 메세지 오류', error);
        });
      });
      //글작성자의 채팅방에 올라가는 상대방에 대한 리뷰
      await setDoc(
        doc(
          dbService,
          'ChattingUsers',
          `${item.uid}`,
          'chattingListroom',
          `${item.reviewRoomId}`
        ),
        {
          ...item,
          reviewRoomId: item.reviewRoomId + 'poster',
          opponentUserUid: item.opponentUserUid,
        }
      ).then(async () => {
        await addDoc(
          collection(
            dbService,
            'Review',
            item.reviewRoomId + 'poster',
            'message'
          ),
          {
            chattingRoomId: item.reviewRoomId + 'poster',
            opponentsUid: item.opponentUserUid,
            myuid: item.uid,
            uid: item.opponentUserUid,
            createdAt: new Date(),
            nowchattime: nowchattime,
            nickname: item.nickname,
            profileImg: item.profile,
            Progress: 'Proceeding',
            select: [
              '친절하고 매너가 좋아요',
              '재미있어요',
              '자상하고 편안했어요!',
              '대화의 폭이 넓었어요!',
              '시간약속을 잘 지켰어요',
            ],
            confirmState: true,
            inputState: false,
          }
        ).catch((error) => {
          console.log('작성자에게 보내는 리뷰 메세지 오류', error);
        });
      });

      return item;
    });

    navigate('/chat');


  };

  
  return (
    <div>
      <S.ReviewModalBox>
        <S.ReviewModalContents onSubmit={handleReviewBeginButton}>
          <S.ModalTitle>
            <h1>행복한 산책 되셨나요?</h1>
            <p>산책한 상대에게 소중한 리뷰를 남겨주세요</p>
          </S.ModalTitle>

          <S.SelectPersonBox>
            <ul>
              {showlist.map(
                (t: {
                  id: React.Key;
                  nickname:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal;
                }) => {
                  return (
                    <li key={t.id}>
                      <S.SelectPerson
                        selected={selectedPeople.includes(t)}
                        onClick={() => handlePersonClick(t)}
                      >
                        {t.nickname}
                      </S.SelectPerson>
                    </li>
                  );
                }
              )}
            </ul>
          </S.SelectPersonBox>
          <S.ModalButtonWrapper>
            <S.ModalConfirmCancelButton
            // type='submit'
            // onClick={() => {
            //   navigate('/chat');
            // }}
            >
              리뷰하러 가기
            </S.ModalConfirmCancelButton>
            {/* <S.ModalConfirmCancelButton>취소</S.ModalConfirmCancelButton> */}
          </S.ModalButtonWrapper>
        </S.ReviewModalContents>
      </S.ReviewModalBox>
    </div>
  );
}

export default ReviewModal;
