import { ListItem } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { constSelector } from 'recoil';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
  query,
  collection,
  where,
  orderBy,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';
import { dbService } from '../../common/firebase';
import CommonStyles from '../../styles/CommonStyles';
import { paramsState } from '../../Rocoil/Atom';
import * as S from './CardSection.style';
import CardSection from '../../components/CardSection/CardSection';
import Fire from '../../assets/Mainpage/Fire.svg';
import Boog from '../../assets/Mainpage/boog.svg';
import gitbal from '../../assets/Mainpage/gitbal.svg';
import { Post, usePosts } from '../../api/getPosts';

const Collection = (props: any) => {
  const navigate = useNavigate();
  const { id } = useParams();
  // CategoryList를 불러와서 map를 돌려서 배열안에 객체를 하나하나 불러온다.
  // 하나하나 객체를 불러서 카테고리리스트의 이미지와 name을 뿌려준다.
  // 라우터에서 카테고리 페이지를 만든다./categorypage/:category 이 부분이 :category 이 부분을 매개변수로 넘겨준다. /category/${Category.name} -> Category.name이 들어온다.
  // navigate사용해서 category/카테고리의 네임으로 이동되게 만들어야된다.
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    switch (id) {
      case '1':
        setTitle('신발신는 중');
        setFile(<HotShoesImg src={Boog}></HotShoesImg>);
        break;
      case '2':
        setTitle('뜨거운 신발');
        setFile(<HotShoesImg src={Fire}></HotShoesImg>);
        break;
      case '3':
        setTitle('매칭된 신발');
        setFile(<HotShoesImg src={gitbal}></HotShoesImg>);
        break;
      default:
        break;
    }
  }, []);

  const setParams = useSetRecoilState(paramsState);

  // id
  // 1 = 신발신는 중
  // 2 = 뜨거운 신발
  // 3 = 매칭된 신발

  const shoes: Array<Post> = usePosts()
    .filter((post) => {
      if (id === '3') return post.ProceedState_Posting === 'postingDone';
      else return post;
    })
    .sort((a, b) => {
      if (id === '2') return b.LikedUsers.length - a.LikedUsers.length;
      return 0;
    });

  return (
    <>
      <CategoryWrapper>
        <S.CategoryTitleWrapper>
          <TitleLayout>
            <div>{file}</div>
            <S.CategoryTitle>{title}</S.CategoryTitle>

            {/* <S.CategoryImg>{category.img}</S.CategoryImg> */}
          </TitleLayout>
        </S.CategoryTitleWrapper>

        <S.LikedListItem>
          {shoes.map((post: any) => {
            return <CardSection key={post.id} post={post} />;
          })}
        </S.LikedListItem>
      </CategoryWrapper>
    </>
  );
};

export default Collection;

export const HotShoesImg = styled.img`
  width: 76px;
  height: 76px;
  margin-top: 40px;
`;

export const TitleLayout = styled.div`
  display: flex;

  align-items: center;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 868px;
  margin: auto;
  margin-bottom: 80px;
`;
export const CollectionWrapper = styled.div``;

export const Collectionitem = styled.div``;
