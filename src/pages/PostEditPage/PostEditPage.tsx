import React, { useEffect, useState } from 'react';
import CommonStyles from './../../styles/CommonStyles';
import * as S from './PostEditPage.style';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  myLocation,
  selectedAddress,
  Bannerupload,
  ThumbnailUpload,
  ReserveDate,
  Time,
  TitleInput,
  DescriptionInput,
  ReserveEditDate,
  TimeEdit,
} from './../../Rocoil/Atom';
import { getAuth } from 'firebase/auth';
import { uuidv4 } from '@firebase/util';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage, dbService } from './../../common/firebase';
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  onSnapshot,
  getDoc,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import MainPostEdit from './MainPostEdit/MainPostEdit';
import InputInformationEdit from './InputInformationEdit/InputInformationEdit';

const PostEditPage = () => {
  // 해당 글 id, db 정보
  const { id } = useParams();
  const { state } = useLocation();
  // console.log(id);
  // console.log(state);

  // 카테고리 값값
  const [postCategory, setPostCategory] = useState(state.Category_Posting);
  // console.log(postCategory);

  //주소 받아오기 myLocation
  const location = useRecoilValue(myLocation);
  const adress = useRecoilValue(selectedAddress);

  const MeetLatitude_Posting = location.lat;
  const MeetLongitude_Posting = location.lng;

  const Address_Posting = adress.slice(0, 10);

  //////이미지 받아오기
  const [getThumbnail, setGetThumbnail] = useState<any>();
  const [getBanner, setGetBanner] = useState<any>();
  /////이미지가져오기
  const banner = useRecoilValue(Bannerupload);
  const thumbnail = useRecoilValue(ThumbnailUpload);
  ///// firestorage 이미지 불러오기
  const auth = getAuth();
  const user = auth.currentUser?.uid;
  const nickname = auth.currentUser?.displayName;
  const KeyForChat_Posting = uuidv4();
  const [PostingID_Posting, setPostingID_Posting] = useState(uuidv4());

  //타이틀, 글 내용
  const [Title, setTitle] = useRecoilState(TitleInput);
  const [Description, setDescription] = useRecoilState(DescriptionInput);

  //
  // 포스팅 출력
  const [myPost, setMyPost] = useState<any>({}); // 페이지 전환
  const navigate = useNavigate();

  //약속 시간
  const [meetEditDate, setMeetEditDate] = useRecoilState(ReserveEditDate);
  console.log(meetEditDate);

  const date = (y: number, m: number, d: number) => {
    const D = new Date(y, m, d);

    switch (D.getDay()) {
      case 0:
        return '(일)';
      case 1:
        return '(월)';
      case 2:
        return '(화)';
      case 3:
        return `(수)`;
      case 4:
        return `(목)`;
      case 5:
        return '(금)';
      case 6:
        return `(토)`;
      default:
        return '';
    }
  };

  const y = meetEditDate.$y;
  const m = meetEditDate.$M;
  const d = meetEditDate.$D;
  const month = meetEditDate.$M + 1;

  console.log('date:', date(y, meetEditDate.$M, d));

  //시간
  const [meetTimeEdit, setMeetTimeEdit] = useRecoilState(TimeEdit);
  console.log(meetTimeEdit);
  const meetHour = meetTimeEdit.slice(0, 2);

  const isPm = Number(meetHour) >= 12;

  const time12 = isPm
    ? Number(meetHour) === 24
      ? 0
      : Number(meetHour) === 12
      ? 12
      : Number(meetHour) - 12
    : Number(meetHour);

  //AM/PM
  let AMPM = isPm ? '오후' : '오전';

  const meetMinute = meetTimeEdit.slice(3, 5);
  let meetMinuteNum = Number(meetMinute);

  const RsvDate_Posting = `${month}/${d} ${date(y, m, d)}`;
  console.log(RsvDate_Posting);
  const RsvHour_Posting = `${AMPM} ${time12}:${meetMinute}`;
  console.log(RsvHour_Posting.length);
  //현재시간
  let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다

  const time = {
    year: today.getFullYear(), //현재 년도
    month: today.getMonth() + 1, // 현재 월
    date: today.getDate(), // 현제 날짜
    hours: today.getHours(), //현재 시간
    minutes: today.getMinutes(), //현재 분
  };

  let timestring = `${time.year}/${time.month}/${time.date} ${time.hours}:${time.minutes}`;

  // // 데이터 불러오는 부분
  // const Editupdate = async () => {
  //   const q = doc(dbService, 'Post', id);
  //   const EditPost = await getDoc(q);

  //   setMyPost(EditPost.data());
  // };

  // //Editupdate가 호출됨
  // useEffect(() => {
  //   Editupdate();
  // }, []);

  //수정
  useEffect(() => {
    if (state) {
      setTitle(state.Title_Posting);
      setDescription(state.Description_Posting);
    }
    // GetPreviousMeetDate();
    // GetPreviousMeetTime();
  }, [state]);

  // 만약 달력과 시간을 선택하지 않았을때
  const GetPreviousMeetDate =
    meetEditDate.length < 14
      ? setMeetEditDate(state.RsvDate_Posting)
      : setMeetEditDate;

  const GetPreviousMeetTime =
    meetTimeEdit.length < 9
      ? setMeetTimeEdit(state.RsvHour_Posting)
      : setMeetTimeEdit;

  //settimeout test
  const geturl: any = () => {
    getDownloadURL(ref(storage, `test/${PostingID_Posting}/thumbnail`))
      .then((thumbnailUrl) => {
        console.log('섬네일url', thumbnailUrl);

        // Get banner url
        getDownloadURL(ref(storage, `test/${PostingID_Posting}/banner`))
          .then((bannerUrl) => {
            console.log('배너url', typeof bannerUrl);

            try {
              const postRef = doc(dbService, 'Post', id);
              updateDoc(postRef, {
                Description_Posting: Description,
                RsvDate_Posting,
                RsvHour_Posting,
                Title_Posting: Title,
                Category_Posting: postCategory,
                ThumbnailURL_Posting: thumbnailUrl,
                BannerURL_Posting: bannerUrl,
                Address_Posting,
                MeetLongitude_Posting,
                MeetLatitude_Posting,
                createdAt: Date.now(),
              });
              console.log('글작성완료 ID: ', postRef);
            } catch (e) {
              console.error('Error updating document: ', e);
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

  ////////////
  //작성완료//
  ///////////
  const handleSubmit = (e: any) => {
    if (Title.length !== 0) {
      if (Title.length! < 20) {
        if (Description.length !== 0) {
          if (Description.length! < 200) {
            if (meetEditDate !== '') {
              if (meetTimeEdit !== '') {
                if (thumbnail !== '') {
                  if (banner !== '') {
                    if (adress !== '충북 보은군 속리산면 갈목리 산 19-1') {
                      if (postCategory !== '카테고리') {
                        if (thumbnail === null)
                          // 포스팅 클릭하면 해당 카테고리 페이지로 라우터 이동
                          //////////////// 썸네일 이미지 전송
                          return alert('이미지 업로드 실패');
                        const imageRef = ref(
                          storage,
                          `test/${PostingID_Posting}/thumbnail`
                        ); //+${thumbnail}
                        // `images === 참조값이름(폴더이름), / 뒤에는 파일이름 어떻게 지을지
                        uploadBytes(imageRef, thumbnail).then((snapshot) => {
                          console.log('snapshot', snapshot);
                          // 업로드 되자마자 뜨게 만들기
                          // alert('썸네일 저장 완료');
                        });
                        if (banner === null) return alert('이미지 업로드 실패');
                        const bannerRef = ref(
                          storage,
                          `test/${PostingID_Posting}/banner`
                        ); //+${thumbnail}
                        // `images === 참조값이름(폴더이름), / 뒤에는 파일이름 어떻게 지을지
                        uploadBytes(bannerRef, banner).then((snapshot) => {
                          // alert('베너 저장 완료');
                          console.log('snapshot', snapshot);
                        });
                        // geturl(); settTimeout이 없으면 에러가 난다.
                        // async await 비동기 처리
                        setTimeout(geturl, 1000);

                        navigate(`/category/${postCategory}`);
                        // setTimeout(adddoc, 8000);
                      } else {
                        alert('카테고리를 선택해 주세요');
                      }
                    } else {
                      alert('지도에서 약속 장소를 선택해 주십시오');
                    }
                  } else {
                    alert('배너사진을 선택해 주세요');
                  }
                } else {
                  alert('섬네일 사진을 선택해 주세요');
                }
              } else {
                alert('시간을 입력해 주세요');
              }
            } else {
              alert('날짜를 입력해 주세요');
            }
          } else {
            alert('최대 200자까지 가능합니다.');
          }
        } else {
          alert('내용은 1자 이상 200자 미만으로 작성해 주세요');
        }
      } else {
        alert('최대 20자만');
      }
    } else {
      alert('타이틀은 1자 이상 20자 미만으로 작성해 주세요');
    }
  };
  console.log(state);
  return (
    <CommonStyles>
      <S.Boxcontainer>
        <MainPostEdit
          setPostCategory={setPostCategory}
          postCategory={postCategory}
          thumbnailimg={state.ThumbnailURL_Posting}
          bannerimg={state.BannerURL_Posting}
        />
        <InputInformationEdit
          addressEdit={state.Address_Posting}
          lat={state.MeetLatitude_Posting}
          lng={state.MeetLongitude_Posting}
        />
        <S.PostSubmitBox>
          <S.PostSubmitBtn onClick={handleSubmit}>수정하기</S.PostSubmitBtn>
        </S.PostSubmitBox>
      </S.Boxcontainer>
    </CommonStyles>
  );
};

export default PostEditPage;
