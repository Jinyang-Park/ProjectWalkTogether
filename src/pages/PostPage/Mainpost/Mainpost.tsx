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
      <S.Bannercontainer />
      <S.Boxcontents>
        <S.ThumbnailImgPorlaroid src={'/assets/polaroid.png'} />
        {/*이 부분에 프로필 업데이트처럼 썸네일 업로드 로직 들어갈곳 */}

        <S.BoxMain>
          <S.CalendarIcon src={'/assets/calendar.png'} />
          <S.CategoryTitle>카테고리</S.CategoryTitle>
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

export default PostapageMiainpost;
