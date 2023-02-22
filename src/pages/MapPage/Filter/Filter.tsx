import React, { useState } from 'react'
import FunctionCategory from './Category/Category'
import FunctionCalendar from './Calendar/Calendar'
import DropdownCategory from '../../../components/DropdownCategoryForWritePage/DropdownCategory'
import * as S from './Filter.style'
import AntCalendarMap from './Calendar/AntCalendarDate'
import DropdownFilterCategory from './../../../components/DropdownFilterCategory/DropdownFilterCategory'
import { useRecoilValue } from 'recoil'

declare interface SetProps {
  setPostCategory: React.Dispatch<React.SetStateAction<string>>
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export const FilterBar = ({
  setPostCategory: string,
  setShow: boolean,
}: SetProps) => {
  const [show, setShow] = useState<any>(false)
  const [TextChange, setTextChange] = useState('카테고리')

  // 카테고리 필터링 적용 위치 알려주세요
  // const CategoryFilter = (e) => {
  //   if (e.target.checked) {
  //     setSelectedCategory([...SelectedCategory, e.target.value])
  //   } else {
  //     setSelectedCategory(
  //       SelectedCategory.filter((category) => category !== e.target.value)
  //     )
  //   }
  // }
  // 카테고리 필터링 사용 위치
  // <S.FilterCategoryCheckbox
  //   type="checkbox"
  //   value={category.CategoryName}
  //   onChange={CategoryFilter}
  // />

  return (
    <>
      <FunctionCategory />
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
      <FunctionCalendar />
    </>
  )
}

export default FilterBar
