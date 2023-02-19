import React, { useEffect } from 'react';
import * as S from './CardSection.style';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { paramsState } from './../../pages/PostPage/Hooks/Rocoil/Atom';

interface postProps {
  post: any;
}
const CardSection = ({ post }: postProps) => {
  {
    const navigate = useNavigate();
    const setParams = useSetRecoilState(paramsState);

    useEffect(() => {
      setParams(post.id);
    }, [post]);

    return (
      <S.CardBox>
        <S.CardSectionWrapper
          onClick={() => navigate(`/detailpage/${post.id}`)}
        >
          <S.ListItemWrapper>
            <S.ListItemThumnail src={post.ThunmnailURL_Posting} />
          </S.ListItemWrapper>
          <S.ListItemThumnailTitle>
            {post.Title_Posting}
          </S.ListItemThumnailTitle>
          <S.HashTag>#케이팝 #발라드</S.HashTag>
          <S.ListItemContainer>
            <S.LikedHeartFlex>
              <S.ListItemAddress>서울특별시 강남구 청담동</S.ListItemAddress>
              <S.LikeBtnLine />
            </S.LikedHeartFlex>
            <S.ListItemDate>2/9(목) 19:40</S.ListItemDate>
          </S.ListItemContainer>
        </S.CardSectionWrapper>
      </S.CardBox>
    );
  }
};

export default CardSection;
