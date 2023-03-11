import styled from 'styled-components';

export const DropdownBox = styled.div`
  position: absolute;
  z-index: 1000;
  margin-top: 288px;
`;
export const DropdownConatainer = styled.div`
  padding: 14px 10px;
  background-color: #ffffff;
  width: 395px;
  height: 243px;
  border-radius: 4px;
  filter: drop-shadow(0px 4px 10px rgba(190, 197, 215, 0.7));
`;
export const DropdownWapper = styled.div`
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 10px;
  grid-row-gap: 12px;
`;
export const CategoryBtn = styled.button`
  display: flex;
  font-family: 'SUITERegular';
  padding: 8px 10px;
  height: 31px;
  color: #6b6766;
  width: fit-content;
  background-color: #fff;
  border: 1px solid #e7e3e2;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  align-items: center;

  &:focus {
    color: #24264e;
    border: 1px solid #7d8bae;
    background-color: #eef1f7;
    font-weight: 500;
  }
`;
export const CategoryConfirmBtn = styled.button`
  font-family: 'SUITERegular';
  width: 375px;
  height: 36px;
  background: #7d8bae;
  border: 1px solid #7d8bae;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-top: 25px;
  color: #eef1f7;
  justify-content: center;
  align-items: center;
`;
