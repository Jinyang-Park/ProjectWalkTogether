import React from "react";
import CategoryAll from "./CategoryAll/CategoryAll";
import * as S from "./CategoryPage.style";

const CategoryPage = () => {
  return (
    <S.PageWrapper>
      <S.CategoryContainer>
        <S.CategoryTitle>카테고리</S.CategoryTitle>
        <CategoryAll />
      </S.CategoryContainer>
    </S.PageWrapper>
  );
};

export default CategoryPage;
