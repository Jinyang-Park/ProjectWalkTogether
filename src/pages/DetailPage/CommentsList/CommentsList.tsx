import React from "react";
import * as S from "./CommentsList.style";

const CommentsList = () => {
  return (
    <S.CommentUserImgWrapper>
      <S.CommtentUserImg src='/assets/hodu.jpg' />
      <S.CommentList>
        <S.CommentLi>
          <S.CommentUserName>호두누나</S.CommentUserName>
          <S.CommentContentsWrapper>
            <S.CommentContent>같이 걷고싶습니다!!</S.CommentContent>
            <S.CommentDate>2022-02-10</S.CommentDate>
          </S.CommentContentsWrapper>
        </S.CommentLi>
      </S.CommentList>
    </S.CommentUserImgWrapper>
  );
};

export default CommentsList;
