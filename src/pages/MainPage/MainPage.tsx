import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
// import { Categoryitem, ImgTitle, Img } from '../../components/CategoryAll';
// import { HeartIcon } from "../DetailPage/DetailPage";
import CommonStyles from './../../styles/CommonStyles';
import { dbService } from '../../common/firebase';
//import { query, onSnapshot, collection } from 'firebase/firestore';
import { authService } from '../../common/firebase';
import MainBanner from '../../components/main/banner';
//import CategoryAll from './CategoryAll/CategoryAll';
import CategorySlide from '../../components/main/CategorySlide';
import FootOning from './FootOning';
import * as S from './CardSection.style';

//컨텐츠를 컴포넌트 폴더로 이동하여 간소화 할 예정
const MainPage = () => {
  console.log(authService.currentUser);

  return (
    <CommonStyles>
      <MainBanner />

      <CategorySlide Category={Category} />

      <div>
        <span style={{ fontSize: 20, fontWeight: 'bold' }}>신발신는중</span>
        <S.LikedListItem>
          <FootOning />
        </S.LikedListItem>
      </div>

      <span style={{ fontSize: 20, fontWeight: 'bold' }}>뜨거운신발</span>

      <span style={{ fontSize: 20, fontWeight: 'bold' }}>걷는 중</span>
    </CommonStyles>
  );
};

//전체를 감싸는 container 스타일

const Category = styled.div``;

export default MainPage;
