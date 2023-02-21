import React from 'react';
import { CategorysList } from '../../utils/CategorysList';
import * as S from './DropdownFilterCategory.style';

declare interface SetProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownFilterCategory = ({ setShow }: SetProps) => {
  const confirmButtonClickHandler = () => {
    setShow(false);
  };

  return (
    <S.DropdownBox>
      <S.DropdownConatainer>
        <S.DropdownWapper>
          {CategorysList.map((data) => {
            return <S.CategoryBtn>{data.name}</S.CategoryBtn>;
          })}
        </S.DropdownWapper>
      </S.DropdownConatainer>
      <S.CategoryConfirmBtn onClick={() => confirmButtonClickHandler()}>
        완료
      </S.CategoryConfirmBtn>
    </S.DropdownBox>
  );
};
export default DropdownFilterCategory;
