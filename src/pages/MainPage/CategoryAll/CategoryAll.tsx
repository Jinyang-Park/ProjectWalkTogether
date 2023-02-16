import React from 'react';
import styled from 'styled-components';
const CategoryAll = () => {
  return (
    <Category>
      <Categoryitem>
        <Img src='/assets/dog.png'></Img>
        <ImgTitle>반려동물</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/dog.png'></Img>
        <ImgTitle>독서</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/dog.png'></Img>
        <ImgTitle>음악</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/dog.png'></Img>
        <ImgTitle>고민상담</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/dog.png'></Img>
        <ImgTitle>부동산</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/dog.png'></Img>
        <ImgTitle>영화</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/dog.png'></Img>
        <ImgTitle>운동</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/dog.png'></Img>
        <ImgTitle>음식</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/dog.png'></Img>
        <ImgTitle>연애</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/dog.png'></Img>
        <ImgTitle>게임</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/dog.png'></Img>
        <ImgTitle>드라마마</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/dog.png'></Img>
        <ImgTitle>전자기기</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/dog.png'></Img>
        <ImgTitle>경제</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/dog.png'></Img>
        <ImgTitle>재테크</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/dog.png'></Img>
        <ImgTitle>사회</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/dog.png'></Img>
        <ImgTitle>세계</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/dog.png'></Img>
        <ImgTitle>생활</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/dog.png'></Img>
        <ImgTitle>IT</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/dog.png'></Img>
        <ImgTitle>과학</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/dog.png'></Img>
        <ImgTitle>정치</ImgTitle>
      </Categoryitem>
      <Categoryitem>
        <Img src='/assets/dog.png'></Img>
        <ImgTitle>문화</ImgTitle>
      </Categoryitem>
    </Category>
  );
};

export default CategoryAll;

export const Category = styled.div`
  font-family: 'pretendard';
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  grid-gap: 8px 0;
  gap: 8px 0;
  margin: 0 auto 32px;
`;

export const Categoryitem = styled.div`
  cursor: pointer;
  width: 23%;
  justify-content: flex-start;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 4px;
  gap: 4px;
  color: #6b6766;
`;
export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f2efed;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
export const ImgTitle = styled.p``;
