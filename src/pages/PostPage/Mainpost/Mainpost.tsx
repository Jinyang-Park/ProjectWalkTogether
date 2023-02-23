import React, { useEffect, useState, useRef } from 'react';
import * as S from './Mainpost.style';
import { useRecoilState } from 'recoil';
import { TitleInput, DescriptionInput } from '../../../Rocoil/Atom';
import { Bannerupload, ThumbnailUpload } from '../../../Rocoil/Atom';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import DropdownCategory from '../../../components/DropdownCategoryForWritePage/DropdownCategory';

interface SetProps {
  setPostCategory: React.Dispatch<React.SetStateAction<string>>;
  postCategory: string;
}

function MainPost({ setPostCategory, postCategory }: SetProps) {
  const [posttitel, Setposttitle] = useRecoilState(TitleInput); //글 제목
  const [postTag, setPostTag] = useState(''); //해쉬태그
  const [postdescription, SetDescription] = useRecoilState(DescriptionInput); //글 내용
  // const [postCategory, setPostCategory] = useState(''); //카테고리
  const [photoupload, setPhotoupload] = useRecoilState(ThumbnailUpload); // Handles input change event and updates state
  const [bannerupload, setBanneruploadupload] = useRecoilState(Bannerupload);
  const [thumbnail, setThumbnail] = useState<any>(null); // Handles input change event and updates state
  const [banner, setBanner] = useState<any>(null);
  const [show, setShow] = useState<any>(false);

  function thumnailimageChange(e: any) {
    const filelist = e.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      setPhotoupload(() => filelist);
      setThumbnail(() => reader.result);
    };
    reader.readAsDataURL(filelist);
    console.log('썸네일 인풋:', photoupload);

    // if (thumbnail === null) return alert('이미지 업로드 실패');
    // const imageRef = ref(storage, `postimg/${PostingID_Posting}/thumbnail`); //+${thumbnail}
    // // `images === 참조값이름(폴더이름), / 뒤에는 파일이름 어떻게 지을지
    // uploadBytes(imageRef, thumbnail).then((snapshot) => {
    //   // 업로드 되자마자 뜨게 만들기
    //   getDownloadURL(snapshot.ref).then((url) => {
    //     alert('썸네일 저장 완료');
    //     // setImageList((prev) => [...prev, url]); //이미지리스트에 저장
    //     ///////////////////////////
    //     /////////배너이미지 전송
    //   });
    // });
  }

  function bannerimageChange(e: any) {
    const filelist = e.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      setBanneruploadupload(() => filelist);
      setBanner(() => reader.result);
    };

    reader.readAsDataURL(filelist);
    console.log('배너 인풋:', filelist);
  }
  /////////
  // 타이틀
  ////////
  const handleChange = (e: any) => {
    Setposttitle(e.target.value);
  };

  ////////
  //글내용
  const handleChangeText = (e: any) => {
    SetDescription(e.target.value);
  };

  return (
    <>
      <S.Bannercontainer>
        <label htmlFor='banner'>
          <S.ThumbnailImgPorlaroid src={banner ? banner : '/assets/배너.png'} />
        </label>
        <S.BannerPhoto
          type='file'
          accept='image/*'
          onChange={bannerimageChange}
          style={{ display: 'none' }}
          id='banner'
        />
      </S.Bannercontainer>
      <S.Boxcontents>
        <S.BoxPhoto>
          <label htmlFor='thumnail'>
            <S.ThumnailPhotoChange
              src={thumbnail ? thumbnail : '/assets/blackboard.png'}
            />
          </label>
          <S.ThumnailPhoto
            type='file'
            accept='image/*'
            onChange={thumnailimageChange}
            style={{ display: 'none' }}
            id='thumnail'
          />
        </S.BoxPhoto>

        <S.BoxMain>
          <S.CateogryWrapper
            onClick={() => {
              setShow(true);
            }}
          >
            <S.CalendarIcon src={'/assets/calendar.png'} />
            <S.CategoryTitle>{postCategory}</S.CategoryTitle>
          </S.CateogryWrapper>
          {show && (
            <DropdownCategory
              setPostCategory={setPostCategory}
              setShow={setShow}
            />
          )}

          <S.InputTitle
            onChange={handleChange}
            placeholder='제목을 입력해 주세요'
          />
          <S.Textarea
            onChange={handleChangeText}
            placeholder='당신의 이야기를 적어주세요'
          ></S.Textarea>
          {/* <S.HashtagBox>#해쉬태그를 입력해주세요</S.HashtagBox> */}
        </S.BoxMain>
      </S.Boxcontents>
    </>
  );
}

export default MainPost;
