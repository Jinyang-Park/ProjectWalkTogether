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
import { useNavigate, useParams } from 'react-router-dom';
//import CategoryAll from './CategoryAll/CategoryAll';
import CategorySlide from '../../components/main/CategorySlide';
import FootOning from './FootOning';
import * as S from './CardSection.style';
import CollectionAll from '../Collection/CollectionAll';
import Collection from '../Collection/Collection';
import { CollecitionList } from '../../utils/CollectionList';

//컨텐츠를 컴포넌트 폴더로 이동하여 간소화 할 예정

const MainPage = () => {
  const { collection } = useParams();
  console.log(authService.currentUser);
  const navigate = useNavigate();
  return (
    <CommonStyles>
      <MainBanner />

      <CategorySlide />

      <div>
        <FirstLayout>
          <span style={{ fontSize: 20, fontWeight: 'bold' }}>신발신는중</span>
          <Button value="1" onClick={(event) => navigate(`/collection/${event.target['value']}`)}>
            전체보기
          </Button>
        </FirstLayout>

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
const Button = styled.button`
  float: right;
  background-color: transparent;
`;

const FirstLayout = styled.div`
  justify-content: space-around;
`;

export const Collectionitem = styled.div``;
export default MainPage;
