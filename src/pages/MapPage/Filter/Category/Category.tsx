import React from 'react'
import * as S from './Category.style'

import { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

export const FunctionCategory = () => {
  // 카테고리 드롭다운 상태
  const [openCategory, setOpenCategory] = useState<boolean>(false)

  return (
    <>
      <S.CategoryWrapper></S.CategoryWrapper>
    </>
  )
}

export default FunctionCategory
