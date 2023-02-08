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
  width: 88vw;
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
`;
export const CategoryWrapper = styled.div`
  display: flex;
  grid-gap: 0.75rem 0;
  gap: 1rem 0;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
export const Categoryitem = styled.div`
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* grid-gap: 0.125rem; */
  gap: 0.7rem;
  /* margin-left: 1rem; */
  width: 10rem;
`;
export const Img = styled.img`
  width: 5.25rem;
  height: 5.25rem;
  border-radius: 50%;
`;
export const ImgTitle = styled.p`
  color: #6b6766;
  font-weight: 700;
`;
