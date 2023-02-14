import React, { useState } from 'react';
import * as S from './MainPost.style';
import { useRecoilState } from 'recoil';
import { TitleInput } from '../Hooks/Rocoil/Atom';

function MainPost() {
  const [posttitel, Setposttitle] = useRecoilState(TitleInput); //글 제목
  const [postTag, setPostTag] = useState(''); //해쉬태그
  const [postdescription, SetDescription] = useState(''); //글 내용
  const [postCategory, setPostCategory] = useState(''); //카테고리
  const [file, setFile] = useState(''); // Handles input change event and updates state

  function imageChange(event: any) {
    setFile(event.target.files[0]);
  }

  /////////
  // 타이틀
  ////////
  const handleChange = (e: any) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.targeet.files[0]);
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      if (previewImgUrl) {
        console.log(previewImgUrl, 123);
      }
    };

    Setposttitle(e.target.value);
  };

  ////////
  //글내용
  const handleChangeText = (e: any) => {
    SetDescription(e.target.value);
  };

  return (
    <>
      <S.Bannercontainer></S.Bannercontainer>
      <S.Boxcontents>
        <S.BoxPhoto>
          <S.Photo
            type="file"
            accept="image/*"
            onChange={imageChange}
          ></S.Photo>
        </S.BoxPhoto>
        <S.BoxMain>
          <S.TittleBox>
            <S.InputTitle
              onChange={handleChange}
              placeholder="제목을 입력해 주세요"
            />
          </S.TittleBox>
          <S.HashtagBox>#해쉬태그</S.HashtagBox>
          <S.WriteBox>
            <S.Textarea onChange={handleChangeText}></S.Textarea>
          </S.WriteBox>
        </S.BoxMain>
      </S.Boxcontents>
    </>
  );
}

export default MainPost;
