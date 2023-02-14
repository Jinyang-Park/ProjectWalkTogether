import React from 'react'
import FunctionCategory from './Category/Category'
import FunctionCalendar from './Calendar/Calendar'
import * as S from './Filter.style'

export const FilterBar = () => {
  return (
    <>
      <S.CategoryButtonWrapper>
        <FunctionCategory />

        <FunctionCalendar />
      </S.CategoryButtonWrapper>
    </>
  )
}

export default FilterBar
