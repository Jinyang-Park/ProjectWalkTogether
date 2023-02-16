import { ListItem } from '@mui/material';
import React from 'react';
import { constSelector } from 'recoil';
import styled from 'styled-components';
import { CategorysList } from '../../../utils/CategorysList';
import { useNavigate, useParams } from 'react-router-dom';

const CategoryAll = () => {
  const navigate = useNavigate();

  // CategoryList를 불러와서 map를 돌려서 배열안에 객체를 하나하나 불러온다.
  // 하나하나 객체를 불러서 카테고리리스트의 이미지와 name을 뿌려준다.
  // 라우터에서 카테고리 페이지를 만든다./categorypage/:category 이 부분이 :category 이 부분을 매개변수로 넘겨준다. /category/${Category.name} -> Category.name이 들어온다.
  // navigate사용해서 category/카테고리의 네임으로 이동되게 만들어야된다.

  return (
    <Category>
      {CategorysList.map((Category) => {
        // console.log(Category.name);
        return (
          <Categoryitem
            onClick={() => navigate(`/category/${Category.name}`)}
            key={Category.name}
          >
            <Img src={Category.img} />
            <ImgTitle>{Category.name}</ImgTitle>
          </Categoryitem>
        );
      })}
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
