import { FormEvent, useCallback, useState } from 'react'

export const useSearch = (
  DBDefault: any,
  search: any,
  setDB: any,
  setSearch: any,
  openFilterEnum: any
) => {
  // 검색 form 제출 핸들링 함수
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let result = DBDefault

    if (search) {
      result = result.filter(
        (item: any) =>
          item.FCLTY_NM.includes(search) ||
          item.FCLTY_ROAD_NM_ADDR.includes(search)
      )
    }

    if (currentCategory !== '카테고리') {
      result = result.filter((item: any) =>
        item.MLSFC_NM.includes(currentCategory)
      )
    }

    setDB(result)
    setSearch('')
  }

  const [currentCategory, setCurrentCategory] =
    useState<string>('카테고리 전체')

  // 검색 결과 초기화 핸들링 함수
  const handleResetResult = useCallback(() => {
    setDB(DBDefault)
    setCurrentCategory('카테고리 전체')
    setSearch('')
  }, [setDB, setCurrentCategory, setSearch, DBDefault])

  return {
    handleSubmit,
    handleResetResult,
    setCurrentCategory,
    currentCategory,
  }
}
