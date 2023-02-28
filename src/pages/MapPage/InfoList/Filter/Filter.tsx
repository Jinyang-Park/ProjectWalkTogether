import React, { useState } from 'react';

import DropdownCategory from '../../../../components/DropdownCategoryForWritePage/DropdownCategory';
import * as S from './Filter.style';
import AntCalendarMap from '../Calendar/AntCalendarDate';
import DropdownFilterCategory from '../../../../components/DropdownFilterCategory/DropdownFilterCategory';
import { useRecoilValue, useRecoilState } from 'recoil';

import { Cetegory } from '../../../../Rocoil/Atom';

declare interface SetProps {
  setPostCategory: React.Dispatch<React.SetStateAction<string>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FilterBar = ({
  setPostCategory: string,
  setShow: boolean,
}: SetProps) => {
  const [show, setShow] = useState<any>(false);
  const [TextChange, setTextChange] = useState('카테고리');

  return (
    <>
      <S.FilterArea>
        <S.CategoryFilter>
          {/*카테고리영역 */}
          <S.CategoryFilterWarpper onClick={() => setShow(true)}>
            <S.FilterCategory>{TextChange}</S.FilterCategory>
            <S.FilterCalendarIcon />
          </S.CategoryFilterWarpper>
          {show && (
            <DropdownFilterCategory
              setShow={setShow}
              setTextChange={setTextChange}
              TextChange={TextChange}
            />
          )}
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
    </>
  );
};

export default FilterBar;
