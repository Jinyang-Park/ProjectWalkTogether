import Slider from 'react-slick';
import '../../styles/slick.css';
import '../../styles/slick-theme.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as S from './Category.Slide.style';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { CategorysList } from '../../utils/CategorysList';

interface CategorySlideProps {}

const CategorySlide: React.FC<CategorySlideProps> = () => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
  };
  return (
    <div>
      <S.StyledSlider {...settings}>
        {CategorysList.map((Category) => {
          return (
            <S.Categoryitem
              onClick={() => navigate(`/category/${Category.name}`)}
              key={Category.name}
            >
              <S.Img src={Category.img} />
              <S.ImgTitle>{Category.name}</S.ImgTitle>
            </S.Categoryitem>
          );
        })}
      </S.StyledSlider>
    </div>
  );
};

export default CategorySlide;
