import styled from 'styled-components';

export const DropdownBox = styled.div`
  position: absolute;
  z-index: 1;
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
export const CategoryBtn = styled.button`
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

  &:focus {
    color: #ff3b94;
    border: 1px solid #ff3b94;
    background-color: #e9e6e6a2;
  }
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
