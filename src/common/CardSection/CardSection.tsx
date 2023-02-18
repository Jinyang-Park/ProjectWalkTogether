import React from 'react';
import * as S from './CardSection.style';
import { useNavigate } from 'react-router-dom';

interface postProps {
  post: any;
}
function CardSection({ post }: postProps) {
  const navigate = useNavigate();
  return (
    <>
      <S.ListItemWrapper onClick={() => navigate(`/detailpage/${post.id}`)}>
        <S.ListItemThumnail src={'/assets/hodu.jpg'} />
      </S.ListItemWrapper>
      <S.ListItemThumnailTitle>{post.Title_Posting}</S.ListItemThumnailTitle>
      <S.ListItemContainer>
        <S.LikedHeartFlex>
          <S.ListItemAddress>서울특별시 강남구 청담동</S.ListItemAddress>
          <S.LikeBtnLine />
        </S.LikedHeartFlex>
        <S.ListItemDate>2/9(목) 19:40</S.ListItemDate>
      </S.ListItemContainer>
    </>
  );
}

export default CardSection;
