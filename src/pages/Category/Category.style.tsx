import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 868px;
  min-height: 60vh;
  margin: auto;
  margin-bottom: 80px;
  @media screen and (max-width: 430px) {
  }
`;
export const CategoryTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 84px;
  @media screen and (max-width: 430px) {
  }
`;
export const CategoryTitle = styled.p`
  font-family: 'SUITERegular';
  margin-left: 12px;
  font-weight: 500;
  font-size: 36px;
  line-height: 45px;
  @media screen and (max-width: 430px) {
  }
`;
export const CategoryImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  @media screen and (max-width: 430px) {
    margin-left: 20px;
  }
`;
export const LikedListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 70px 49.3px;
  margin-top: 46px;
  @media screen and (max-width: 430px) {
    width: calc(50% - 6px);
    grid-gap: 70px 30px;
    margin-left: 20px;
  }
`;
export const FilterArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 430px) {
    margin: 0px 20px;
    align-items: center;
    align-content: center;
    width: calc(50% - 50px);
  }
`;
export const CategoryFilter = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 430px) {
  }
`;

export const CategoryFilterWarpper = styled.div`
  display: flex;
  padding: 0px 10px 0px 10px;
  // 텍스트 길이에 따라 width 자동조절
  width: auto;
  height: 27px;
  align-items: center;
  border: 1px solid #c7c7c7;
  border-radius: 4px;
  margin-right: 8px;
  margin-top: 10px;
  @media screen and (max-width: 430px) {
  }
`;
export const FilterCategory = styled.p`
  width: auto;
  font-family: 'SUITERegular';
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #a6a6a6;
  margin-right: 4px;
  @media screen and (max-width: 430px) {
  }
`;
export const FilterCalendarIcon = styled.img`
  width: 10px;
  height: 10px;
  object-fit: contain;
  @media screen and (max-width: 430px) {
  }
`;
export const FilterSortWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 430px) {
    margin-top: 10px;
  }
`;
export const FilterNewest = styled.p`
  font-family: 'SUITERegular';
  display: inline-flex;
  align-items: center;
  color: #524f4d;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -1.5px;
  &:hover {
    cursor: pointer;
    font-weight: 600;
  }
  @media screen and (max-width: 430px) {
  }
`;
export const FilterAreaLine = styled.span`
  margin: 1px 8px 0;
  width: 1px;
  height: 16px;
  background-color: #e7e3e2;
  display: inline-block;
  @media screen and (max-width: 430px) {
  }
`;
export const NoResult = styled.div``;

export const NoResultTitle = styled.p`
  font-family: 'SUITERegular';
  margin-top: -30px;
  font-weight: 500;
  font-size: 16px;
  line-height: 45px;
  /* color: #7d8bae; */
  @media screen and (max-width: 430px) {
  }
`;
