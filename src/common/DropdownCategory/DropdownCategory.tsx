import React, { useState } from 'react';
import styled from 'styled-components';
import { CategorysList } from './../../utils/CategorysList';

// setPostCategory
interface SetProps {
  setPostCategory: React.Dispatch<React.SetStateAction<string>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const DropdownCategory = ({ setPostCategory, setShow }: SetProps) => {
  const buttonClickHandler = (event: any) => {
    //바로 적용이 안된다
    // setTextChange(event.target.innerText);
    // 아래부분처럼 해결함
    setPostCategory(event.target.innerText);
  };
  //클릭한 버튼의 값이 잘 찍힌다.
  // console.log(textChange);

  const confirmButtonClickHandler = () => {
    setShow(false);
  };

  // CategorysList에서 전체라는 name빼고 detailCategroyFilter 에 넣어준다
  const detailCategroyFilter = CategorysList.filter((el) => el.name !== '전체');

  return (
    <DropdownBox>
      <DropdownConatainer>
        <DropdownWapper>
          {detailCategroyFilter.map((data) => {
            return (
              <CategoryBtn onClick={buttonClickHandler}>
                {data.name}
              </CategoryBtn>
            );
          })}
        </DropdownWapper>
      </DropdownConatainer>
      <CategoryConfirmBtn onClick={() => confirmButtonClickHandler()}>
        완료
      </CategoryConfirmBtn>
    </DropdownBox>
  );
};

export default DropdownCategory;

export const DropdownBox = styled.div`
  position: absolute;
  z-index: 1000;
  margin-top: 45px;
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

{
  /* <CategoryBtn onClick={buttonClickHandler}>독서</CategoryBtn>
<CategoryBtn onClick={buttonClickHandler}>음악</CategoryBtn>
<CategoryBtn onClick={buttonClickHandler}>고민 상담</CategoryBtn>
<CategoryBtn onClick={buttonClickHandler}>부동산</CategoryBtn>
<CategoryBtn onClick={buttonClickHandler}>영화</CategoryBtn>
<CategoryBtn onClick={buttonClickHandler}>운동</CategoryBtn>
<CategoryBtn onClick={buttonClickHandler}>음식</CategoryBtn>
<CategoryBtn onClick={buttonClickHandler}>연애</CategoryBtn>
<CategoryBtn onClick={buttonClickHandler}>게임</CategoryBtn>
<CategoryBtn onClick={buttonClickHandler}>드라마</CategoryBtn>
<CategoryBtn onClick={buttonClickHandler}>전자기기</CategoryBtn>
<CategoryBtn onClick={buttonClickHandler}>경제</CategoryBtn>
<CategoryBtn onClick={buttonClickHandler}>제테크</CategoryBtn>
<CategoryBtn onClick={buttonClickHandler}>사회</CategoryBtn>
<CategoryBtn onClick={buttonClickHandler}>세계</CategoryBtn>
<CategoryBtn onClick={buttonClickHandler}>생활</CategoryBtn>
<CategoryBtn onClick={buttonClickHandler}>과학</CategoryBtn>
<CategoryBtn onClick={buttonClickHandler}>정치</CategoryBtn>
<CategoryBtn onClick={buttonClickHandler}>문화</CategoryBtn> */
}
