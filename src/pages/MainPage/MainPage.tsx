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
import LikesComponent from './LikeComponent';
import Fire from '../../assets/Mainpage/Fire.png';
import Boog from '../../assets/Mainpage/boog.png';
import gitbal from '../../assets/Mainpage/gitbal.png';
import WalkAfter from './WalkAfter';
//컨텐츠를 컴포넌트 폴더로 이동하여 간소화 할 예정

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <CommonStyles>
      <MainBanner />
      <CategoryWrapper>
        <CategorySlide />

        <ContentLayout>
          <TitleLayout>
            <HotShoesImg src={Fire} />
            <S.CategoryTitle>뜨거운 신발 </S.CategoryTitle>
          </TitleLayout>

          <FirstLayout>
            <InsideText>현재 인기가 많은 산책들이에요</InsideText>
            <ButtonWrap>
              <Button
                value='2'
                onClick={(event) =>
                  navigate(`/collection/${event.target['value']}`)
                }
              >
                전체보기
              </Button>
              <ButtonIcon
                src={require('../../assets/Mainpage/chevronleft.svg').default}
              />
            </ButtonWrap>
          </FirstLayout>
          <S.LikedListItem>
            <LikesComponent />
          </S.LikedListItem>
          <Line />
        </ContentLayout>

        <ContentLayout>
          <TitleLayout>
            <HotShoesImg src={Boog} />
            <S.CategoryTitle>신발 신는 중 </S.CategoryTitle>
          </TitleLayout>

          <FirstLayout>
            <InsideText>현재 이루어지고 있는 산책들이에요</InsideText>
            <ButtonWrap>
              <Button
                value='1'
                onClick={(event) =>
                  navigate(`/collection/${event.target['value']}`)
                }
              >
                전체보기
              </Button>
              <ButtonIcon
                src={require('../../assets/Mainpage/chevronleft.svg').default}
              />
            </ButtonWrap>
          </FirstLayout>

          <S.LikedListItem>
            <FootOning />
          </S.LikedListItem>
          <Line />
        </ContentLayout>

        <ContentLayout>
          <TitleLayout>
            <HotShoesImg src={gitbal} />
            <S.CategoryTitle>매칭된 신발 </S.CategoryTitle>
          </TitleLayout>
          <FirstLayout>
            <InsideText>매칭이 완료된 산책들이에요</InsideText>
            <ButtonWrap>
              <Button
                value='3'
                onClick={(event) =>
                  navigate(`/collection/${event.target['value']}`)
                }
              >
                전체보기
              </Button>
              <ButtonIcon
                src={require('../../assets/Mainpage/chevronleft.svg').default}
              />
            </ButtonWrap>
          </FirstLayout>
          <S.LikedListItem>
            <WalkAfter />
          </S.LikedListItem>
        </ContentLayout>
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
  margin-right: 5px;
`;
const InsideText = styled.p`
  margin-top: 19px;
  font-family: 'SUITERegular';
  letter-spacing: -1px;
  color: #7d8bae;
  width: 300px;
`;
const TitleLayout = styled.div`
  display: flex;
  align-items: center;
`;

const HotShoesImg = styled.img`
  width: 76px;
  height: 76px;
  display: flex;
  margin-top: 40px;
`;
const TextTitle = styled.p`
  font-family: 'SUITEBold';
  letter-spacing: -3px;
  font-size: 36px;
  font-weight: 400;
  display: flex;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 868px;
  margin: auto;
  margin-bottom: 80px;
`;

const FirstLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Line = styled.div`
  height: 74px;
  background-color: white;
  width: 100%;
  border-bottom: 2px solid #bec5d7;
`;
const ButtonIcon = styled.img`
  width: 12px;
  height: 12px;
  object-fit: contain;
  cursor: pointer;
`;
const ButtonWrap = styled.div`
  margin-top: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentLayout = styled.div``;

export const Collectionitem = styled.div``;
export default MainPage;
