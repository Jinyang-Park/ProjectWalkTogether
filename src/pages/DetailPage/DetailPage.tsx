import * as S from './DetailPage.style';
import Comments from './Comments/Comments';
import CommonStyles from './../../styles/CommonStyles';
import DetailMap from './DetailMap/DetailMap';
import { useRecoilState, useRecoilValue } from 'recoil';
import { paramsState } from '../../Rocoil/Atom';
import { useEffect, useState } from 'react';
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
} from 'firebase/firestore';
import { authService, dbService } from './../../common/firebase';
import { useNavigate, useParams } from 'react-router-dom';
import { assert } from 'console';
import DropdownCategory from '../../components/DropdownCategoryForWritePage/DropdownCategory';
import DropBox from './DropBox/DropBox';
import { async } from '@firebase/util';
import { userForChat, currentUserUid } from '../../Rocoil/Atom';

interface getPostings {
  BannereURL_Posting: string;
  Category_Posting: string;
  Description_Posting: string;
  Nickname: string;
  ThunmnailURL_Posting: string;
  Title_Posting: string;
  UID: string;
  children: JSX.Element | JSX.Element[];
}

const DetailPage = () => {
  // 현재 유저의 정보
  const UID = useRecoilValue(userForChat);

  const navigate = useNavigate();
  // 아톰은 새로고침하면 초기화가 된다. 앱이 랜더링이 된다.
  // 리코일은 리덕스와 같아서 새로고침하면 날라간다.
  // const params = useRecoilValue(paramsState);

  // useParams를 사용하여 구조 분해 할당을 하여 사용함
  const { id } = useParams();
  // console.log(id);

  const [getPostings, setGetPostings] = useState<any>({});
  const [showBox, setShowBox] = useState<any>(false);

  // getPost 함수에서 비동기로 데이터를 가져오기 때문에 isLoading을 사용하여 로딩중인지 아닌지를 확인
  const [isLoading, setIsLoading] = useState<boolean>(true);
  //채팅방중복확인
  const [isduplication, setIsduplication] = useState(false);
  const mychatlist = useRecoilValue(currentUserUid);
  const [chatList, setChatList] = useState<any>([]);

  // 채팅방 만들기
  const getPostingUID = getPostings.UID;
  const CurrentUid = UID.useruid;
  //  동일한 유저이더라도 게시글마다 새로운 채팅방이 생긴다
  const combineId: any = getPostings.PostingID_Posting + CurrentUid;

  const getPost = async () => {
    const q = doc(dbService, 'Post', id);
    const postData = await getDoc(q);

    //비동기
    setGetPostings(postData.data());
    // isLoading 범인
    // isLoading 이 false가 되면 로딩이 끝난 것, true면 로딩중으로 isLoading을 관리
    setIsLoading(false);
  };

  /////////////////
  //채팅방 중복확인 중 db에서 데이터 가져오기.

  // getPost getChattingList  => duplicate

  const getChattingList = async () => {
    if (mychatlist === '') {
      return;
    }
    const querySnapshot = await getDocs(
      query(
        collection(
          dbService,
          'ChattingUsers',
          `${mychatlist}`,
          'chattingListroom'
        ),
        orderBy('createdAt', 'desc')
      )
    );

    let list = [];
    querySnapshot.forEach((doc) => {
      list = [...list, { id: doc.id, ...doc.data() }];
    });
    setChatList(list);

    // console.log('list:', list);
  };

  const duplicate = () => {
    for (let a = 0; a < chatList.length; a++) {
      if (chatList[a].combineId === combineId) {
        setIsduplication(true);
      } else {
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getPost();
    getChattingList();
    // duplicate();
  }, [mychatlist]);

  // 채팅창 중복확인은 getChattingList 이후에 작동되게uesEffect를 사용해주니까 중복확인이 되었다.
  useEffect(() => {
    duplicate();
  }, [getChattingList]);

  const goToChat = async () => {
    if (isduplication == true) {
      alert('이미 채팅이 존재합니다.');
      navigate('/chat');
    } else {
      alert('채팅창으로 이동합니다.');
      // db에저장된 user의 정보가 저장되는 곳

      //db에저장된 컬렉션 user의 작성자가 가지는 하위컬랙션 chattingroom에 저장되는값들
      // await setDoc(doc(dbService, 'Users', `${getPostingUID}`), {
      //   getPostingUID: getPostingUID,
      //   // chattingroom: [{ combineId, date }],
      // });

      await addDoc(
        collection(
          dbService,
          'ChattingUsers',
          `${getPostingUID}`,
          'chattingListroom'
        ),
        {
          combineId,
          profile: UID.myporfile,
          uid: UID.useruid,
          nickname: UID.mynickname,
          createdAt: new Date(),
        }
      );

      // 채팅의 상대방(게시글주인) chattingroom에 저장되는값들
      await addDoc(
        collection(
          dbService,
          'ChattingUsers',
          `${CurrentUid}`,
          'chattingListroom'
        ),
        {
          combineId,
          profile: getPostings.ThunmnailURL_Posting,
          uid: getPostings.UID,
          nickname: getPostings.Nickname,
          createdAt: new Date(),
        }
      );
      navigate('/chat');
    }
  };

  // !! undfined false 아니면 true
  // 여기 공부하자!
  const UpdateView = async () => {
    const q = doc(dbService, 'Post', id);
    // dbService에 있는 getPostings.View + 1 를 View 넣어준다.
    await updateDoc(q, { View: getPostings.View + 1 });
  };

  useEffect(() => {
    // View를 넣어도 되는지 테스트 해보자
    if (getPostings.View >= 0) {
      UpdateView();
    }
  }, [isLoading]);

  console.log(getPostings.View);
  // console.log(getPostings);
  // getPostings 콘솔로그 찍어보면 post에 해당된 db확인 가능

  console.log('getPostings:', getPostings);

  return (
    <>
      <CommonStyles>
        <S.DetailIntroWapper>
          <S.BannereURL src={getPostings.BannerURL_Posting} />
        </S.DetailIntroWapper>
        <S.Boxcontents>
          <S.BoxPhoto>
            {/*썸네일*/}
            <S.ThunmnailURL src={getPostings.ThumbnailURL_Posting} />
            <S.DetailUserName>{getPostings.Nickname}</S.DetailUserName>
            {/*인트로영역*/}
            <S.DetailIntroWrapper>
              <S.IntroCategoryTitleBtn>
                <S.IntroCategory>
                  {getPostings.Category_Posting}
                </S.IntroCategory>
              </S.IntroCategoryTitleBtn>
              <S.IntroTitle>{getPostings.Title_Posting}</S.IntroTitle>
              <S.IntroHashTag>
                {getPostings.Hashtag_Posting &&
                  getPostings.Hashtag_Posting.map((tagItem, i) => {
                    return (
                      <>
                        {tagItem == '' ? (
                          <div>&nbsp;</div>
                        ) : (
                          <div key={i}>&nbsp;{'#' + tagItem}</div>
                        )}
                      </>
                    );
                  })}
              </S.IntroHashTag>
              <S.IntroDes>{getPostings.Description_Posting}</S.IntroDes>
            </S.DetailIntroWrapper>
            <S.ShareBtn>
              <S.LikeWrapper>
                {/*svg로 갈아끼워야함(StyledHeartIcon)*/}
                <S.StyledHeartIcon />
                <S.HeartBtn>5</S.HeartBtn>
              </S.LikeWrapper>
              {/* 현재 user가 쓴 글인지 판별 */}
              {getPostings.UID !== authService.currentUser?.uid ? (
                <S.WalktogetherBtn onClick={goToChat}>
                  <S.WalktogetherTitle>함께 걸을래요</S.WalktogetherTitle>
                </S.WalktogetherBtn>
              ) : (
                <S.MoreBtn
                  onClick={() => {
                    setShowBox(true);
                    setShowBox(true);
                  }}
                />
              )}
              {/*post.id인 id를 DropBox로 넘겨준다*/}

              {showBox && (
                <DropBox
                  setShowBox={setShowBox}
                  id={id}
                  getPostings={getPostings}
                />
              )}
              {/*svg로 갈아끼워야함(SocialShareBtn)*/}
              <S.SocialShareBtn />
              {/*svg로 갈아끼워야함(ShareBtn)*/}
            </S.ShareBtn>
          </S.BoxPhoto>
        </S.Boxcontents>
        {/*장소*/}
        <S.DetailLoactionWrapper>
          <S.DeatilLoactionTitle>장소는 이 곳이에요</S.DeatilLoactionTitle>
          <S.DetailLoactionContainer>
            {/*  지도 들어오는 위치에요 */}
            {/* isLoading 이 True 이면, Loading... 출력, False면 DetailMap 컴포넌트를 렌더링 한다. */}
            {isLoading ? ( // isLoading이 true면
              <S.Loading>로딩중...</S.Loading>
            ) : (
              // isLoading이 false면
              <DetailMap getPostings={getPostings} />
            )}

            <S.DetailAddressContainer>
              <S.DetailAddressIcon />
              <S.DetailAddressBox>
                <S.DetailAddress>{getPostings.Address_Posting}</S.DetailAddress>
                <S.DetailDateWrapper>
                  <S.DetailDate>{getPostings.RsvDate_Posting}</S.DetailDate>
                  <S.DetailTime>{getPostings.RsvHour_Posting}</S.DetailTime>
                </S.DetailDateWrapper>
              </S.DetailAddressBox>
            </S.DetailAddressContainer>
          </S.DetailLoactionContainer>
        </S.DetailLoactionWrapper>
        {/* 댓글 */}
        <Comments param={id} />
      </CommonStyles>
    </>
  );
};

export default DetailPage;
