import React, { useState } from 'react';
import * as S from './Mainpost.style';
import { useRecoilState } from 'recoil';
import { TitleInput } from '../Hooks/Rocoil/Atom';

function PostapageMiainpost() {
  const [posttitel, Setposttitle] = useRecoilState(TitleInput); //글 제목
  const [postTag, setPostTag] = useState(''); //해쉬태그
  const [postdescription, SetDescription] = useState(''); //글 내용
  const [postCategory, setPostCategory] = useState(''); //카테고리

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
      <S.Bannercontainer></S.Bannercontainer>
      <S.Boxcontents>
        <S.BoxPhoto></S.BoxPhoto>
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

export default PostapageMiainpost;
