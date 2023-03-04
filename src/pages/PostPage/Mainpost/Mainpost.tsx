import React, { useEffect, useState, useRef } from 'react';
import * as S from './Mainpost.style';
import { useRecoilState } from 'recoil';
import { TitleInput, DescriptionInput } from '../../../Rocoil/Atom';
import { Bannerupload, ThumbnailUpload } from '../../../Rocoil/Atom';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import DropdownCategory from '../../../components/DropdownCategoryForWritePage/DropdownCategory';
import Tag from '../../../components/Tag';

interface SetProps {
  setPostCategory: React.Dispatch<React.SetStateAction<string>>;
  postCategory: string;
}
interface SetProps {
  setTagItem: React.Dispatch<React.SetStateAction<string>>;
  TagItem: string;
}

function MainPost({
  setTagItem,
  TagItem,
  setPostCategory,
  postCategory,
}: SetProps) {
  const [posttitel, Setposttitle] = useRecoilState(TitleInput); //글 제목
  //const [postTag, setPostTag] = useState(''); //해쉬태그
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
          <Tag tagItem='' />
        </S.BoxMain>
      </S.Boxcontents>
    </>
  );
}

export default MainPost;
