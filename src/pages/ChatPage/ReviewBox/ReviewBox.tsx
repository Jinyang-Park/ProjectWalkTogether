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
  getDoc,
  setDoc,
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
  // const [message, setMessage] = useState('');
  const [getmessage, setGetMessage] = useState<any>([]);
  //ChattingList에서 받아오는값들
  const roomId = useRecoilValue(tochattingboxroomid);
  const nickname = useRecoilValue(tochattingboxnickname);
  const profileImg = useRecoilValue(tochattingboxprofileimg);
  const opponentuid = tochattingBoxUid;
  const myRoomIndex = tochattingBoxRoomIndex;
  const opponentRoomIndex = tochattingBoxOpponentRoomIndex;
  const currentUid = useRecoilValue(currentUserUid);
  // 리뷰 선택리스트
  const reviewList = [
    '친절하고 매너가 좋아요',
    '재미있어요',
    '자상하고 편안했어요!',
    '대화의 폭이 넓었어요!',
    '시간약속을 잘 지켰어요',
  ];
  const [selectedReview, setSelectedReview] = useState([]);
  //채팅 대화 내용관리
  const [talk, setTalk] = useState('');
  //DB에서 받아오는 상대방 리뷰값
  const [opponentReviewList, setOpponentReviewList] = useState<any>();
  const [updatedReview, setUpdatedReview] = useState<any>();

  //객체복사
  const opponentReviewListduplicated = opponentReviewList;

  const userReview = [
    { option: '친절하고 매너가 좋아요', count: 0 },
    { option: '재미있어요', count: 0 },
    { option: '자상하고 편안했어요!', count: 0 },
    { option: '대화의 폭이 넓었어요!', count: 0 },
    { option: '시간약속을 잘 지켰어요', count: 0 },
  ];

  const handleReviewClick = (review: any) => {
    if (selectedReview.includes(review)) {
      setSelectedReview(selectedReview.filter((p: string) => p !== review));
    } else {
      setSelectedReview([...selectedReview, review]);
    }
  };

  const handleUserInfo = async () => {
    const docRef = doc(dbService, 'user', opponentuid);
    const docSnap = await getDoc(docRef);

    setOpponentReviewList(() => docSnap.data());
    console.log('getdoctest1:', opponentReviewList);
    console.log('test1:', updatedReview);
  };

  console.log('selectedReview:', selectedReview);

  const chattinguser = useRecoilValue(currentUserUid);
  //채팅을 입력한 시간
  const nowchattime = Date().slice(16, 21);
  //채팅 상태값 리뷰선택(input비활성화)=> 리뷰완료(input활성화)
  const inputlength = getmessage?.length;
  const inputState = getmessage[0]?.inputState;
  //유저 정보에 들어갈 상태 값
  const reviewState = getmessage[inputlength - 1]?.selected;
  const updatedOpponentReveiwList = updatedReview;

  const handleReviewState = async () => {
    console.log('reviewState:', reviewState);
    console.log('opponentReviewListduplicated:', opponentReviewListduplicated);
    if (opponentReviewListduplicated?.review === undefined) {
      userReview?.map((item: { option: string; count: number }) => {
        selectedReview?.forEach((t: string) => {
          if (item.option === t) {
            return item.count++;
          }
        });
      });
      setUpdatedReview(userReview);
      console.log('updatedUserReview', userReview);
      console.log('path1');
      console.log('handleReviewStateSupdatedReview', updatedReview);
    } else if (opponentReviewListduplicated.review) {
      await opponentReviewListduplicated.review.map(
        (item: { option: any; count: number }) => {
          selectedReview?.forEach((t) => {
            if (item.option === t) {
              return item.count++;
            }
          });
        }
      );
      console.log(
        'opponentReviewListduplicated:',
        opponentReviewListduplicated
      );
      setUpdatedReview(opponentReviewListduplicated);
      console.log('path2');
      console.log('handleReviewStateSupdatedReview', updatedReview);
    }
  };

  useEffect(() => {
    handleReviewState();
  }, [opponentReviewList]);

  console.log('updatedReview:', updatedReview);

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
      setGetMessage(() => getChat);
    });
  };

  useEffect(() => {
    if (!roomId) return;
    getChatting();
    handleUserInfo();
  }, [roomId]);

  // const reviewMessage = getmessage[0]?.select;

  const handleReviewSubmit = async () => {
    // 1단계 : 리뷰리스트를 선택하고 선택완료를 누르면 선택한 값이 채팅내용(리뷰리스트를 불러오는 데이터값)이 업데이트된다.
    // 2단계 : 상대의 DB에 있는 user값의 값 중 review를 불러오고 업데이트 된 리뷰값을 업데이트 시켜준다.
    // 3단계 : 직접 입력할 수 있도록 Input창이 생기고 입력하면 값이 저장된다.
    await updateDoc(
      doc(
        dbService,
        'Review',
        getmessage[0].chattingRoomId,
        'message',
        getmessage[0].id
      ),
      { selected: selectedReview, confirmState: false, progress: 'done' }
    )
      .then(async () => {
        if (updatedOpponentReveiwList === undefined) return;
        handleReviewState();
        console.log('getdoctest2:', opponentReviewList);
        console.log('test2:', updatedReview);

        await updateDoc(doc(dbService, 'user', getmessage[0].opponentsUid), {
          review: updatedReview,
        }).then(() => {
          console.log('getdoctest3:', opponentReviewList);
          console.log('test3:', updatedReview);
        });
      })
      .then(
        async () =>
          await addDoc(
            collection(
              dbService,
              'Review',
              getmessage[0].chattingRoomId,
              'message'
            ),
            {
              progress: 'directly',
              chattingRoomId: getmessage[0].chattingRoomId,
              createdAt: new Date(),
              nowchattime: nowchattime,
              uid: getmessage[0].myuid,
              myuid: getmessage[0].myuid,
              opponentsUid: getmessage[0].opponentsUid,
              comment: '입력 완료!',
            }
          )
      )
      .then(
        async () =>
          await addDoc(
            collection(
              dbService,
              'Review',
              getmessage[0].chattingRoomId,
              'message'
            ),
            {
              progress: 'directly',
              chattingRoomId: getmessage[0].chattingRoomId,
              createdAt: new Date(),
              nowchattime: nowchattime,
              uid: getmessage[0].opponentsUid,
              myuid: getmessage[0].myuid,
              opponentsUid: getmessage[0].opponentsUid,
              comment: `직접 입력해주세요! \n 여기에 작성된 글은 운영진에게만 전달되니 편하게 작성해주세요!`,
              inputState: true,
            }
          ).catch((error) => console.log(error))
      );
    console.log('getdoctest3:', opponentReviewList);

    // await updateDoc(doc(dbService, 'user', getmessage[0].opponentsUid), {});
  };

  const handleTalkSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addDoc(
      collection(dbService, 'Review', getmessage[0].chattingRoomId, 'message'),
      {
        progress: 'directly',
        chattingRoomId: getmessage[0].chattingRoomId,
        createdAt: new Date(),
        nowchattime: nowchattime,
        uid: getmessage[0].myuid,
        myuid: getmessage[0].myuid,
        opponentsUid: getmessage[0].opponentsUid,
        comment: talk,
      }
    );
    setTalk('');
  };

  console.log('selectedReview:', selectedReview);
  console.log('getmessage:', getmessage);
  console.log('roomId:', roomId);

  return (
    <>
      <S.ChattingBox swapBoxAndLists={swapBoxAndLists}>
        <S.ChattingNickname>
          <S.BackButton onClick={() => SetSwapBoxAndLists(true)}>
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
            {nickname == ''
              ? '대화상대를 선택해 주세요'
              : `${nickname} 님에 대한 리뷰`}
          </S.ChattingNicknameto>
        </S.ChattingNickname>

        <S.ChattingContent>
          {getmessage.map(
            (
              ars: {
                nowchattime: string;
                createdAt: any;
                progress: string;
                confirmState: boolean;
                uid: string;
                selected: string | any[];
                comment: string;
              },
              id: Key
            ) => {
              return ars.uid === currentUid ? (
                <S.ChattingTextBox key={id}>
                  <S.ChattingText>{ars.comment}</S.ChattingText>
                  <S.ChattingTime>{ars.nowchattime}</S.ChattingTime>
                </S.ChattingTextBox>
              ) : ars.progress === 'directly' ? (
                <S.ChattingTextBoxLeft key={id}>
                  <S.ChattingTextBoxLeftContainer>
                    <S.ChattingImg>
                      <S.ChattingBoxheaderImgCover>
                        <S.ChattingBoxheaderImg src={profileImg} />
                      </S.ChattingBoxheaderImgCover>
                    </S.ChattingImg>
                    <S.ChattingTextLeft>{ars.comment}</S.ChattingTextLeft>
                    <S.ChattingTime>{ars.nowchattime}</S.ChattingTime>
                  </S.ChattingTextBoxLeftContainer>
                </S.ChattingTextBoxLeft>
              ) : (
                <S.ChattingTextBoxLeft key={id}>
                  <S.ChattingTextBoxLeftContainer>
                    <S.ChattingImg>
                      <S.ChattingBoxheaderImgCover>
                        <S.ChattingBoxheaderImg src={profileImg} />
                      </S.ChattingBoxheaderImgCover>
                    </S.ChattingImg>
                    <S.ChattingTextLeft>
                      산책 메이트에 대한 평가를 남겨주세요!
                    </S.ChattingTextLeft>
                    <S.ChattingTime>{ars.nowchattime}</S.ChattingTime>
                  </S.ChattingTextBoxLeftContainer>
                  <S.ReviewSelectBox>
                    {reviewList.map((t, id) => {
                      return (
                        <S.SelectReview
                          selected={
                            ars.selected
                              ? ars.selected.includes(t)
                              : selectedReview.includes(t)
                          }
                          onClick={() => handleReviewClick(t)}
                          key={id}
                        >
                          {t}
                        </S.SelectReview>
                      );
                    })}
                    {ars.confirmState === false ? (
                      ''
                    ) : (
                      <S.ReviewSelectComplete onClick={handleReviewSubmit}>
                        선택 완료
                      </S.ReviewSelectComplete>
                    )}
                  </S.ReviewSelectBox>
                </S.ChattingTextBoxLeft>
              );
            }
          )}
        </S.ChattingContent>
        <S.ChattingInputBox>
          <S.ChattingForm
            onSubmit={(event) => handleTalkSubmit(event)}
            className='send-message'
          >
            {inputState === false ? (
              <S.ChattingInputouter></S.ChattingInputouter>
            ) : (
              <S.ChattingInputouter>
                {' '}
                <S.ChattingInput
                  placeholder='채팅을 입력해 주세요'
                  onChange={(e) => setTalk(e.target.value)}
                  value={talk}
                />
                <S.ChattingButton>
                  <S.PlaneImg
                    src={require('../../../assets/plane.svg').default}
                  />
                </S.ChattingButton>
              </S.ChattingInputouter>
            )}
          </S.ChattingForm>
        </S.ChattingInputBox>
      </S.ChattingBox>
    </>
  );
}

export default ReviewBox;
