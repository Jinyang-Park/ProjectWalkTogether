import React, { useState } from 'react';
import styled from 'styled-components';
import * as S from './DropdownCategoryForWrite.style';
import { CategorysList } from '../../utils/CategorysList';
import { useParams } from 'react-router-dom';

// setPostCategory
declare interface SetProps {
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

  const confirmButtonClickHandler = () => {
    setShow(false);
  };

  // CategorysList에서 전체라는 name빼고 detailCategroyFilter 에 넣어준다
  const detailCategroyFilter = CategorysList.filter((el) => el.name !== '전체');
  // console.log(detailCategroyFilter);

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
        <S.CategoryConfirmBtn
          // 24~25
          onClick={() => confirmButtonClickHandler()}
        >
          선택 완료
        </S.CategoryConfirmBtn>
      </S.DropdownConatainer>
    </S.DropdownBox>
  );
};

export default DropdownCategory;
