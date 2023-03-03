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
import LikesComponent from './LikeComponent';

//컨텐츠를 컴포넌트 폴더로 이동하여 간소화 할 예정

const MainPage = () => {
  const { collection } = useParams();
  console.log(authService.currentUser);
  const navigate = useNavigate();
  return (
    <CommonStyles>
      <MainBanner />
      <CategoryWrapper>
        <CategorySlide />

        <div>
          <TextTitle style={{ fontSize: 20, fontWeight: 'bold' }}>
            신발신는중
          </TextTitle>
          <FirstLayout>
            <InsideText>현재 이루어지고 있는 산책들이에요</InsideText>
            <Button
              value='1'
              onClick={(event) =>
                navigate(`/collection/${event.target['value']}`)
              }
            >
              전체보기
            </Button>
          </FirstLayout>

          <S.LikedListItem>
            <FootOning />
          </S.LikedListItem>
        </div>

        <TextTitle style={{ fontSize: 20, fontWeight: 'bold' }}>
          뜨거운신발
        </TextTitle>
        <FirstLayout>
          <InsideText>현재 인기가 많은 산책들이에요</InsideText>
          <Button
            value='2'
            onClick={(event) =>
              navigate(`/collection/${event.target['value']}`)
            }
          >
            전체보기
          </Button>
        </FirstLayout>
        <S.LikedListItem>{/* <LikesComponent /> */}</S.LikedListItem>

        <TextTitle style={{ fontSize: 20, fontWeight: 'bold' }}>
          걷는 중
        </TextTitle>
      </CategoryWrapper>
    </CommonStyles>
  );
};

//전체를 감싸는 container 스타일

const Category = styled.div``;
const Button = styled.button`
  float: right;
  background-color: transparent;
  font-family: 'SUITERegular';
  letter-spacing: -0.1px;
`;
const InsideText = styled.p`
  font-family: 'SUITERegular';
  letter-spacing: -2px;

  width: 300px;
`;
const TextTitle = styled.p`
  font-family: 'SUITERegular';
  letter-spacing: -0.1px;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 868px;
  margin: auto;
`;

const FirstLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Collectionitem = styled.div``;
export default MainPage;
