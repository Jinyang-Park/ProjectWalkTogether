import React from 'react';
import * as S from './ReviewModal.css';
import { useState } from 'react';
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';
import { dbService } from './../../common/firebase';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userForChat } from '../../Recoil/Atom';
import { uuidv4 } from '@firebase/util';

interface ReviewModalProps {
  reviewList: object;
}

function ReviewModal({ reviewList }: ReviewModalProps) {
  //선택한 리뷰 상대들 목록
  const [selectedPeople, setSelectedPeople] = useState<any>([]);
  //모달창 상태값 현재 필요성을 다시 생각해 봐야될 것 같다.
  const [reviewModalState, setReviewModalState] = useState(false);
  const navigate = useNavigate();
  const UID = useRecoilValue(userForChat);

  console.log('UID:', UID);

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
          chattingRoomId: uuidv4() + item.reviewRoomId,
        }
      ).then(async () => {
        await addDoc(
          collection(dbService, 'Review', item.chattingRoomId, 'message'),
          {
            chattingRoomId: item.chattingRoomId,
            opponentsUid: item.uid,
            myuid: item.opponentUserUid,
            createdAt: new Date(),
            nickname: UID.mynickname,
            profileImg: item.profile,
            Progress: 'Proceeding',
            select1: '친절하고 매너가 좋아요',
            select1State: false,
            select2: '재미있어요',
            select2State: false,
            select3: '자상하고 편안했어요!',
            select3State: false,
            select4: '대화의 폭이 넓었어요!',
            select4State: false,
            select5: '직접 입력할래요',
            select5State: false,
          }
        ).catch((error) => {
          console.log('대화 상대에게 리뷰 메세지 오류', error);
        });
      });
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
          chattingRoomId: uuidv4() + item.reviewRoomId,
        }
      ).then(async () => {
        await addDoc(
          collection(dbService, 'Review', item.chattingRoomId, 'message'),
          {
            chattingRoomId: item.chattingRoomId,
            opponentsUid: item.uid,
            myuid: item.opponentUserUid,
            createdAt: new Date(),
            nickname: item.nickname,
            profileImg: item.profile,
            Progress: 'Proceeding',
            select1: '친절하고 매너가 좋아요',
            select1State: false,
            select2: '재미있어요',
            select2State: false,
            select3: '자상하고 편안했어요!',
            select3State: false,
            select4: '대화의 폭이 넓었어요!',
            select4State: false,
            select5: '직접 입력할래요',
            select5State: false,
          }
        ).catch((error) => {
          console.log('작성자에게 보내는 리뷰 메세지 오류', error);
        });
      });
      return item;
    });
    console.log('newList:', myReviewList);
    console.log('sendconfirm:', sendconfirm);
  };

  // console.log('newList:', newList);

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
              type='submit'
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
