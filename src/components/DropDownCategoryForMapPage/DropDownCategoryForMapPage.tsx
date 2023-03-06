import React from 'react';
import { CategorysList } from '../../utils/CategorysList';
import * as S from './DropDownCategoryForMapPage.style';
import { useNavigate } from 'react-router-dom';

declare interface SetProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setTextChange: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  TextChange?: string;
}

const DropdownFilterCategoryForMapPage = ({
  setShow,
  setTextChange,
  setCategory,
  TextChange,
}: SetProps) => {
  const buttonClickHandler = (event: any) => {
    //바로 적용이 안된다
    // setTextChange(event.target.innerText);
    // 아래부분처럼 해결함
    setTextChange(event.target.innerText);
  };

  const navigate = useNavigate();

  const confirmButtonClickHandler = (name: string) => {
    setCategory(name);
    setShow(false);
  };

  // console.log(CategorysList);
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
      <S.CategoryConfirmBtn
        // 24~25
        onClick={() => confirmButtonClickHandler(TextChange)}
      >
        완료
      </S.CategoryConfirmBtn>
    </S.DropdownBox>
  );
};
export default DropdownFilterCategoryForMapPage;
