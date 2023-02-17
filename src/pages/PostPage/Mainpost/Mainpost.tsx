import React, { useEffect, useState, useRef } from 'react';
import * as S from './Mainpost.style';
import { useRecoilState } from 'recoil';
import { Bannerupload, TitleInput } from './../Hooks/Rocoil/Atom';
import DropdownCategory from './../../../common/DropdownCategory/DropdownCategory';
import useDetectClose from './../../../hooks/useDropdownClose';

function MainPost() {
  const [posttitel, Setposttitle] = useRecoilState(TitleInput); //글 제목
  const [postTag, setPostTag] = useState(''); //해쉬태그
  const [postdescription, SetDescription] = useState(''); //글 내용
  const [postCategory, setPostCategory] = useState(''); //카테고리
  const [photoupload, setPhotoupload] = useState<any>(); // Handles input change event and updates state
  const [Bannerupload, setBanneruploadupload] = useState<any>('');
  // const [IsOpen, Ref, Handler] = useDetectClose(false);
  const [show, setShow] = useState(false);

  function thumnailimageChange(e: any) {
    const filelist = e.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      setPhotoupload(reader.result);
    };

    reader.readAsDataURL(filelist);
    console.log('이미지:', filelist);
  }

  function bannerimageChange(e: any) {
    const filelist = e.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      setBanneruploadupload(reader.result);
    };

    reader.readAsDataURL(filelist);
    console.log('이미지:', filelist);
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
          <S.ThumbnailImgPorlaroid
            src={Bannerupload ? Bannerupload : '/assets/thumbnailImg.png'}
          />
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
              src={photoupload ? photoupload : '/assets/blackboard.png'}
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
          <S.CalendarIcon src={'/assets/calendar.png'} />
          {/*카테고리 클릭 시 트루이면 드랍카테고리가 보이고 아니면 숨겨라 삼항연산자 사용하기 */}
          <S.CategoryTitle>카테고리</S.CategoryTitle>
          <DropdownCategory />
          <S.InputTitle
            onChange={handleChange}
            placeholder='제목을 입력해 주세요'
          />
          <S.Textarea
            onChange={handleChangeText}
            placeholder='당신의 이야기를 적어주세요'
          ></S.Textarea>
          <S.HashtagBox>#해쉬태그를 입력해주세요</S.HashtagBox>
        </S.BoxMain>
      </S.Boxcontents>
    </>
  );
}

export default MainPost;
