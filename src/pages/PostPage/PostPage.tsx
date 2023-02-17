import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  Time,
  TitleInput,
  DescriptionInput,
  Bannerupload,
  Thunmnailupload,
} from './Hooks/Rocoil/Atom';
import { useRecoilValue } from 'recoil';
import { getAuth } from 'firebase/auth';
import { uuidv4 } from '@firebase/util';
import { collection, addDoc } from 'firebase/firestore';
import { dbService } from '../../common/firebase';
import IuputInformation from './InputInformation/InputInformation';
import * as S from './Postpage.style';
import CommonStyles from './../../styles/CommonStyles';
import MainPost from './Mainpost/Mainpost';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../../common/firebase';

const PostPage = () => {
  const [loginModalopen, setLoginModalopen] = useState(false); //아이디 찾기 모달창
  const [postDb, setPostDb] = useState({}); //파이어베이스DB
  const [postHour, setPostHour] = useState(''); //약속 시간.날짜
  const [postMinut, setPostMinute] = useState(''); //약속 시간.시각
  const [postTime, setPostTime] = useState(''); //작성시간
  const [postLatitude, setPostLtitude] = useState(''); //위도
  const [postLongitude, setPostLongitude] = useState(''); //경도
  const [postNowLatitude, setPostNowLtitude] = useState(''); //현재 위도
  const [postNowLongitude, setPostNowLongitude] = useState(''); //현재 경도
  const [postLiked, setPostLiked] = useState(false); //좋아요 여부
  const [postCountLiked, setPostCountLiked] = useState(''); //좋아요 갯수
  const [proceedState, setProceedState] = useState(''); //게시글의 진행사항
  const [keyForChat, setKeyForChat] = useState(''); //채팅을 위해 생성한 id
  const [postId, setPostId] = useState(''); //포스팅 id 고유값
  const [postAuthor, setPostAuthor] = useState(''); //사용자 파이어베이스 uid
  const [postNickname, setPostNickname] = useState(''); //사용자 닉네임 => 회원가입시시에 저장해 주거나 로컬에 저장하는 방법을 찾아야될 것 같다.
  const [postAddress, setPostAddress] = useState(''); //만날 위치 시,군,구,단
  const [postCategory, setPostCategory] = useState<any>(''); //카테고리

  //////이미지 받아오기
  const [getThumbnail, setGetThumbnail] = useState<any>();
  const [getBanner, setGetBanner] = useState<any>();
  /////이미지가져오기
  const banner = useRecoilValue(Bannerupload);
  const thumbnail = useRecoilValue(Thunmnailupload);
  ///// firestorage 이미지 불러오기
  const auth = getAuth();
  const user = auth.currentUser?.uid;
  const nickname = auth.currentUser?.displayName;
  const KeyForChat_Posting = uuidv4();
  const [PostingID_Posting, setPostingID_Posting] = useState(uuidv4());

  //약속 시간
  const meetTime = useRecoilValue(Time);
  const meetTimeObectToString = JSON.stringify(Object.values(meetTime)[2]);
  const OTS = Object.values(meetTime)[2].toString();
  const weeks = OTS.slice(0, 3);
  var toayweek = '';
  switch (weeks) {
    case 'Sun':
      toayweek = '일';
      break;
    case 'Tue':
      toayweek = '화';
      break;
  }

  const meetTimeValue = Object.values(meetTime);
  const weekValue = meetTimeObectToString.slice(1, 9);
  // const meetHour = meetTimeObectToString.slice(12, 19); //시간 이상하게나옴
  const meetYearMonth = meetTimeObectToString.slice(1, 9); //년월
  const meetDay = meetTimeObectToString.slice(9, 11); //일
  const week = meetTimeObectToString;
  // let meetDayHour = 0;
  // if (Number(meetTimeValue[8]) < 10) {
  //   const meetDayHourzero = meetTimeValue[8] + 'a';
  // } else {
  //   const meetDayHourzero = meetTimeValue[8];
  // }
  //시
  const meetDayHour = meetTimeValue[8]; // am의경우 0이 앞에 안 붙는다.
  const meetDayMinute = meetTimeObectToString.slice(14, 17); //분
  let meeting =
    `${meetYearMonth}${meetDay}__${meetDayHour}${meetDayMinute}` + ``;

  const Title = useRecoilValue(TitleInput);
  const Description = useRecoilValue(DescriptionInput);

  /////////
  //현재시간
  /////////
  let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
  const time = {
    year: today.getFullYear(), //현재 년도
    month: today.getMonth() + 1, // 현재 월
    date: today.getDate(), // 현제 날짜
    hours: today.getHours(), //현재 시간
    minutes: today.getMinutes(), //현재 분
  };
  let timestring = `${time.year}/${time.month}/${time.date} ${time.hours}:${time.minutes}`;

  /////////////
  //콘솔확인용/
  ////////////
  useEffect(() => {
    console.log('KeyForChat_Posting:', KeyForChat_Posting);
    setPostTime(timestring); //현재 시간
    setPostHour(meeting); //약속 시간
    setPostNickname(nickname);
    setPostAuthor(user);
  }, [KeyForChat_Posting]);

  //settimeout test
  const geturl: any = () => {
    getDownloadURL(ref(storage, `test/${PostingID_Posting}/thumbnail`))
      .then((url) => {
        const getThumbnail = url;
        console.log('섬네일url', getThumbnail);
        alert('섬네일url');

        //get썸네일 url
        getDownloadURL(ref(storage, `test/${PostingID_Posting}/banner`))
          .then((url) => {
            const getBanner = url;
            console.log('배너url', typeof getBanner);

            try {
              const docRef = addDoc(collection(dbService, 'test'), {
                Description_Posting: Description,
                Liked_Posting: false,
                Nickname: postNickname,
                RsvDate_Posting: postHour,
                TimeStamp_Posting: postTime,
                Title_Posting: Title,
                UID: postAuthor,
                PostingID_Posting,
                KeyForChat_Posting,
                Category_Posting: postCategory,
                ThunmnailURL_Posting: getThumbnail,
                BannereURL_Posting: getBanner,
              });
              console.log('글작성완료 ID: ', docRef);
              alert('저장완료');
            } catch (e) {
              console.error('Error adding document: ', e);
            }
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  // };

  ////////////
  //작성완료//
  ///////////
  const handleSubmit = (e: any) => {
    e.preventDefault();
    ////////////////// 썸네일 이미지 전송
    if (thumbnail === null) return alert('이미지 업로드 실패');
    const imageRef = ref(storage, `test/${PostingID_Posting}/thumbnail`); //+${thumbnail}
    // `images === 참조값이름(폴더이름), / 뒤에는 파일이름 어떻게 지을지
    uploadBytes(imageRef, thumbnail).then((snapshot) => {
      console.log('snapshot', snapshot);
      // 업로드 되자마자 뜨게 만들기
      alert('썸네일 저장 완료');
    });
    if (banner === null) return alert('이미지 업로드 실패');
    const bannerRef = ref(storage, `test/${PostingID_Posting}/banner`); //+${thumbnail}
    // `images === 참조값이름(폴더이름), / 뒤에는 파일이름 어떻게 지을지
    uploadBytes(bannerRef, banner).then((snapshot) => {
      alert('베너 저장 완료');
      console.log('snapshot', snapshot);
    });
    // geturl(); settTimeout이 없으면 에러가 난다.
    setTimeout(geturl, 1000);
    // setTimeout(adddoc, 8000);
  };

  return (
    <CommonStyles>
      <S.Boxcontainer>
        <MainPost setPostCategory={setPostCategory} />
        <IuputInformation />
        <S.PostSubmitBox>
          <S.PostSubmitBtn onClick={handleSubmit}>포스팅 하기</S.PostSubmitBtn>
        </S.PostSubmitBox>
      </S.Boxcontainer>
    </CommonStyles>
  );
};

export default PostPage;
