import React from "react";
import styled from "styled-components";
import CategoryAll from "../components/CategoryAll";

const CategoryPage = () => {
  return (
    <PageWrapper>
      <CategoryContainer>
        <CategoryTitle>카테고리</CategoryTitle>
        <CategoryAll />
      </CategoryContainer>
    </PageWrapper>
  );
};

export default CategoryPage;

export const PageWrapper = styled.div`
  width: 70vw;
  /* max-width: 71.875rem; */
  padding: 4.25rem;
  margin: 0 auto;
`;
export const CategoryContainer = styled.div`
  justify-content: flex-start;
`;
export const CategoryTitle = styled.h1`
  margin-left: 2rem;
  font-size: 2.5rem;
  line-height: 2.6875rem;
  letter-spacing: -0.64px;
  margin-bottom: 3rem;
  margin-top: 5rem;
`;
