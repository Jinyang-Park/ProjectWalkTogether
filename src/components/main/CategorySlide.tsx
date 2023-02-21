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
import Next from 'assets/arrowleft.svg';
import Prev from 'assets/arrowleft.svg';

function CategorySlide({ Category }) {
  const navigate = useNavigate();
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: (
      <Div>
        <Next />
      </Div>
    ),
    prevArrow: (
      <DivPre>
        <Prev />
      </DivPre>
    ),
  };

  return (
    <div>
      <StyledSlider {...settings}>
        {CategorysList.map((Category) => {
          // console.log(Category.name);
          return (
            <Categoryitem onClick={() => navigate(`/category/${Category.name}`)} key={Category.name}>
              <Img src={Category.img} />
              <ImgTitle>{Category.name}</ImgTitle>
            </Categoryitem>
          );
        })}
      </StyledSlider>
    </div>
  );
}

const Div = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 16px;
  z-index: 99;
  text-align: right;
  line-height: 30px;
`;
const DivPre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 16px;
  z-index: 99;
  text-align: left;
  line-height: 30px;
`;
const StyledSlider = styled(Slider)`
  padding-top: 50px;
  margin: auto;
  width: 80%; //슬라이드 컨테이너 영역

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
  .slick-arrow {
    width: 50px;
    height: 50px;
    z-index: 999;
    background: black;
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
`;

export default CategorySlide;
