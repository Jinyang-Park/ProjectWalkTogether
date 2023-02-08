import React from "react";
import styled from "styled-components";
import { LIGHT_BROWN } from "../common/colors";

const CategoryAll = () => {
  return (
    <CategoryWrapper>
      <Categoryitem>
        <Img src='/assets/dog.png' />
        <ImgTitle>강아지</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/book.png' />
        <ImgTitle>책</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/eco.png' />
        <ImgTitle>환경</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/group.png' />
        <ImgTitle>인간관계(침목)</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/plant.png' />
        <ImgTitle>식물/자연</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/workout.png' />
        <ImgTitle>운동</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/movie.png' />
        <ImgTitle>영화</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/travel.png' />
        <ImgTitle>여행</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/finance.png' />
        <ImgTitle>재테크</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/counsel.png' />
        <ImgTitle>고민상담</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/food.jpg' />
        <ImgTitle>음식</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/music.jpg' />
        <ImgTitle>음악</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/career.png' />
        <ImgTitle>커리어</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/coffee.jpg' />
        <ImgTitle>커피</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/photo.jpg' />
        <ImgTitle>사진</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/walk.jpg' />
        <ImgTitle>걷기</ImgTitle>
      </Categoryitem>
    </CategoryWrapper>
  );
};

export default CategoryAll;

export const CategoryWrapper = styled.div`
  display: flex;
  grid-gap: 0.75rem 0;
  gap: 1rem 0;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
export const Categoryitem = styled.div`
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* grid-gap: 0.125rem; */
  gap: 0.7rem;
  /* margin-left: 1rem; */
  width: 10rem;
`;
export const Img = styled.img`
  width: 5.25rem;
  height: 5.25rem;
  border-radius: 50%;
`;
export const ImgTitle = styled.p`
  color: ${LIGHT_BROWN};
  font-weight: 700;
`;
