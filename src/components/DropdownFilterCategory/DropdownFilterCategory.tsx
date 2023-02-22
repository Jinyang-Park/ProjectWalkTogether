import React from 'react';
import { CategorysList } from '../../utils/CategorysList';
import * as S from './DropdownFilterCategory.style';

declare interface SetProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setTextChange: React.Dispatch<React.SetStateAction<string>>;
}

const DropdownFilterCategory = ({ setShow, setTextChange }: SetProps) => {
  const buttonClickHandler = (event: any) => {
    //바로 적용이 안된다
    // setTextChange(event.target.innerText);
    // 아래부분처럼 해결함
    setTextChange(event.target.innerText);
  };
  const confirmButtonClickHandler = () => {
    setShow(false);
  };

  return (
    <S.DropdownBox>
      <S.DropdownConatainer>
        <S.DropdownWapper>
          {CategorysList.map((data) => {
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
export default DropdownFilterCategory;
