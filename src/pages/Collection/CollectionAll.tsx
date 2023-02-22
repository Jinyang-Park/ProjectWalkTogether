import { ListItem } from '@mui/material';
import React from 'react';
import { constSelector } from 'recoil';
import styled from 'styled-components';
import { CollecitionList } from '../../utils/CollectionList';
import { useNavigate, useParams } from 'react-router-dom';

const CollectionAll = () => {
  const { collection } = useParams();
  const navigate = useNavigate();
  // CategoryList를 불러와서 map를 돌려서 배열안에 객체를 하나하나 불러온다.
  // 하나하나 객체를 불러서 카테고리리스트의 이미지와 name을 뿌려준다.
  // 라우터에서 카테고리 페이지를 만든다./categorypage/:category 이 부분이 :category 이 부분을 매개변수로 넘겨준다. /category/${Category.name} -> Category.name이 들어온다.
  // navigate사용해서 category/카테고리의 네임으로 이동되게 만들어야된다.

  return (
    <Collection>
      {CollecitionList.map((Collection) => {
        console.log(Collection);
        return <Collectionitem onClick={() => navigate(`/collection/${Collection.name}`)}></Collectionitem>;
      })}
    </Collection>
  );
};

export default CollectionAll;

export const Collection = styled.div``;

export const Collectionitem = styled.div``;
