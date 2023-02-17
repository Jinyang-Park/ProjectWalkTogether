import React from 'react';
import styled from 'styled-components';

const DropdownCategory = () => {
  return (
    <DropdownBox>
      <DropdownConatainer>
        <DropdownWapper>
          <CategoryBtn>반려동물</CategoryBtn>
          <CategoryBtn>독서</CategoryBtn>
          <CategoryBtn>음악</CategoryBtn>
          <CategoryBtn>고민 상담</CategoryBtn>
          <CategoryBtn>부동산</CategoryBtn>
          <CategoryBtn>영화</CategoryBtn>
          <CategoryBtn>운동</CategoryBtn>
          <CategoryBtn>음식</CategoryBtn>
          <CategoryBtn>연애</CategoryBtn>
          <CategoryBtn>게임</CategoryBtn>
          <CategoryBtn>드라마</CategoryBtn>
          <CategoryBtn>전자기기</CategoryBtn>
          <CategoryBtn>경제</CategoryBtn>
          <CategoryBtn>제테크</CategoryBtn>
          <CategoryBtn>사회</CategoryBtn>
          <CategoryBtn>세계</CategoryBtn>
          <CategoryBtn>생활</CategoryBtn>
          <CategoryBtn>과학</CategoryBtn>
          <CategoryBtn>정치</CategoryBtn>
          <CategoryBtn>문화</CategoryBtn>
        </DropdownWapper>
      </DropdownConatainer>
      <CategoryConfirmBtn>완료</CategoryConfirmBtn>
    </DropdownBox>
  );
};

export default DropdownCategory;

export const DropdownBox = styled.div`
  position: relative;
  z-index: 1000;
  margin-top: 8px;
`;
export const DropdownConatainer = styled.div`
  padding: 10px 10px;
  background-color: #ffffff;
  width: 518px;
  border-radius: 4px;
`;
export const DropdownWapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 8px;
  gap: 8px;
`;
export const CategoryBtn = styled.div`
  padding: 10px 10px;
  line-height: 22px;
  color: #6b6766;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  background-color: #fff;
  border: 1px solid #e7e3e2;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 500;
`;
export const CategoryConfirmBtn = styled.button`
  width: 518px;
  height: 46px;
  background: #ffeded;
  border: 1px solid #ff8585;
  border-radius: 0px 0px 4px 4px;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #ff8585;
  justify-content: center;
  align-items: center;
`;
