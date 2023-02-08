import React from "react";
import styled from "styled-components";

const CategoryPage = () => {
  return (
    <PageWrapper>
      <CategoryTitle>카테고리</CategoryTitle>
      <CategoryAll>
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
      </CategoryAll>
    </PageWrapper>
  );
};

export default CategoryPage;

export const PageWrapper = styled.div`
  width: 88vw;
  /* max-width: 1150px; */
  padding: 68px;
  margin: 0 auto;
`;
export const CategoryTitle = styled.h1`
  font-size: 40px;
  line-height: 43px;
  letter-spacing: -0.04rem;
  margin-bottom: 35px;
`;
export const CategoryAll = styled.div`
  display: flex;
  grid-gap: 12px 0;
  gap: 12px 0;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
export const Categoryitem = styled.div`
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 2px;
  gap: 2px;
  width: 200px;
`;
export const Img = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 50%;
`;
export const ImgTitle = styled.p`
  color: #6b6766;
  font-weight: 700;
`;
