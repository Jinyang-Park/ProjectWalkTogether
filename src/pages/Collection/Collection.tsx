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
const Collection = (props: any) => {
  const navigate = useNavigate();
  const { id } = useParams();
  // CategoryList를 불러와서 map를 돌려서 배열안에 객체를 하나하나 불러온다.
  // 하나하나 객체를 불러서 카테고리리스트의 이미지와 name을 뿌려준다.
  // 라우터에서 카테고리 페이지를 만든다./categorypage/:category 이 부분이 :category 이 부분을 매개변수로 넘겨준다. /category/${Category.name} -> Category.name이 들어온다.
  // navigate사용해서 category/카테고리의 네임으로 이동되게 만들어야된다.
  const [shoes, setShoes] = useState([]);
  const setParams = useSetRecoilState(paramsState);

  useEffect(() => {
    console.log(id);
    if (id === '1') {
      const q = query(
        collection(dbService, 'Post'),
        // Category_Posting이 파람스로 넘겨준 애들과 같은 애들만 뿌려줘라
        orderBy('createdAt', 'desc')
        // orderBy('TimeStamp_Posting', 'desc')
      );
      onSnapshot(q, (snapshot) => {
        const getpostList = snapshot.docs.map((doc) => {
          const postList = {
            id: doc.id,
            ...doc.data(),
          };
          return postList;
        });
        setShoes(getpostList);
      });
      console.log(shoes);
    }
    if (id === '뜨거운신발') {
    }
    if (id === '걷는중') {
    }
  }, []);

  return (
    <>
      <CommonStyles>
        <S.CategoryTitleWrapper>
          <S.CategoryTitle>신발신는 중</S.CategoryTitle>
          {/* <S.CategoryImg>{category.img}</S.CategoryImg> */}
        </S.CategoryTitleWrapper>
        <S.LikedListItem>
          {shoes.map((item) => {
            return (
              <>
                <S.CardBox>
                  <S.CardSectionWrapper
                    onClick={() => {
                      setParams(item.id);
                      navigate(`/detailpage/${item.id}`);
                    }}
                  >
                    <S.ListItemWrapper>
                      <S.ListItemThumnail src={item.ThumbnailURL_Posting} />
                    </S.ListItemWrapper>
                    <S.ListItemThumnailTitle>
                      {item.Title_Posting}
                    </S.ListItemThumnailTitle>
                    <S.HashTag>
                      {item.Hashtag_Posting.map((tagItem, i) => {
                        return (
                          <>
                            {tagItem == '' ? (
                              <div>&nbsp;</div>
                            ) : (
                              <div key={i}>{'#' + tagItem}</div>
                            )}
                          </>
                        );
                      })}
                    </S.HashTag>
                    <S.ListItemContainer>
                      <S.LikedHeartFlex>
                        <S.ListItemAddress>
                          {item.Address_Posting}
                        </S.ListItemAddress>
                        <S.LikeBtnLine />
                      </S.LikedHeartFlex>
                      <S.ListItemDate>
                        {item.RsvDate_Posting}
                        {item.RsvHour_Posting}
                      </S.ListItemDate>
                    </S.ListItemContainer>
                  </S.CardSectionWrapper>
                </S.CardBox>
              </>
            );
          })}
        </S.LikedListItem>
      </CommonStyles>
    </>
  );
};

export default Collection;

export const CollectionWrapper = styled.div``;

export const Collectionitem = styled.div``;
