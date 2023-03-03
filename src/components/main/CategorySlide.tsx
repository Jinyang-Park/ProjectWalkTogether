import Slider from 'react-slick';
import '../../styles/slick.css';
import '../../styles/slick-theme.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ListItem } from '@mui/material';
import React from 'react';
import { constSelector } from 'recoil';
import { CategorysList } from '../../utils/CategorysList';
import { useNavigate, useParams } from 'react-router-dom';

import { MdArrowBackIosNew } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';

//MdArrowForwardIos

function CategorySlide() {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <StyledSlider {...settings}>
        {CategorysList.map((Category) => {
          return (
            //리액트 라우터 dom state 찾아보기
            <Categoryitem
              onClick={() => navigate(`/category/${Category.name}`)}
              key={Category.name}
            >
              <Img src={Category.img} />
              <ImgTitle>{Category.name}</ImgTitle>
            </Categoryitem>
          );
        })}
      </StyledSlider>
    </div>
  );
}

const PrevArrow = styled(MdArrowBackIosNew)`
  color: black;
`;
const NextArrow = styled(MdArrowForwardIos)`
  color: black;
`;

const StyledSlider = styled(Slider)`
  margin: auto;
  width: 80%; //슬라이드 컨테이너 영역
  padding-top: 60px;
  padding-bottom: 60px;
  .slick-list {
    //슬라이드 스크린
    width: 100%;
    height: 30%;
    margin: 0 auto;
  }
  .slick-slide div {
    /* cursor: pointer; */
  }

  .slick-track {
    width: 100%;
  }
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

export const Category = styled.div`
  font-family: 'pretendard';
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  grid-gap: 8px 0;
  gap: 8px 0;
  margin: 0 auto 32px;
`;

export const Categoryitem = styled.div`
  cursor: pointer;

  width: 23%;

  display: inline-flex;
  flex-direction: column;
  align-items: center;

  color: #6b6766;
`;
export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: auto;
  background-color: #f2efed;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
export const ImgTitle = styled.p`
  text-align: center;
  margin: 0 auto;
  font-family: 'SUITERegular';
  letter-spacing: -2px;
  padding-top: 10px;
`;

export default CategorySlide;
