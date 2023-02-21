import React, { useState } from 'react';
import FunctionCategory from './Category/Category';
import FunctionCalendar from './Calendar/Calendar';
import DropdownCategory from '../../../components/DropdownCategoryForWritePage/DropdownCategory';
import * as S from './Filter.style';
import AntCalendarMap from './Calendar/AntCalendarDate';

declare interface SetProps {
  setPostCategory: React.Dispatch<React.SetStateAction<string>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FilterBar = ({
  setPostCategory: string,
  setShow: boolean,
}: SetProps) => {
  const [show, setShow] = useState<any>(false);

  return (
    <>
      <FunctionCategory />
      <S.FilterArea>
        <S.CategoryFilter>
          {/*카테고리영역 */}
          <S.CategoryFilterWarpper>
            <S.FilterCategory
              onClick={() => {
                setShow(true);
              }}
            >
              카테고리
            </S.FilterCategory>
            <S.FilterCalendarIcon />
          </S.CategoryFilterWarpper>
          {/*달력영역 */}
          {/* <S.CategoryFilterWarpper>
            <S.FilterCategory>3월 23일</S.FilterCategory>
            <S.FilterCalendarIcon />
          </S.CategoryFilterWarpper> */}
          <AntCalendarMap />
        </S.CategoryFilter>
        {/*최신순 / 조회순 / 좋아요순*/}
        <S.FilterSortWrapper>
          <S.FilterNewest>
            최신순
            <S.FilterAreaLine></S.FilterAreaLine>
          </S.FilterNewest>
          <S.FilterNewest>
            조회순
            <S.FilterAreaLine></S.FilterAreaLine>
          </S.FilterNewest>
          <S.FilterNewest>좋아요순</S.FilterNewest>
        </S.FilterSortWrapper>
      </S.FilterArea>
      <FunctionCalendar />
    </>
  );
};

export default FilterBar;
