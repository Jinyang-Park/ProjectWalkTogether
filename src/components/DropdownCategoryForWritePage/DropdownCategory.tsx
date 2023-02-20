import React, { useState } from 'react';
import styled from 'styled-components';
import * as S from './DropdownCategory.style';
import { CategorysList } from '../../utils/CategorysList';

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
    <S.DropdownBox>
      <S.DropdownConatainer>
        <S.DropdownWapper>
          {detailCategroyFilter.map((data) => {
            return (
              <S.CategoryBtn onClick={buttonClickHandler}>
                {data.name}
              </S.CategoryBtn>
            );
          })}
        </S.DropdownWapper>
      </S.DropdownConatainer>
      <S.CategoryConfirmBtn onClick={() => confirmButtonClickHandler()}>
        완료
      </S.CategoryConfirmBtn>
    </S.DropdownBox>
  );
};

export default DropdownCategory;
