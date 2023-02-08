// import { FormEvent, useCallback, useState } from 'react'

// export const useSearch = (
//     DBDefault: any,
//     search: any,
//     setDB: any,
//     setSearch: any,
//     openFilterEnum: any
// ) => {
//     // 검색 form 제출 핸들링 함수
//     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault()

//         let result = DBDefault

//         if (search) {
//             result = result.filter(
//                 (item: any) =>
//                     item.FCLTY_NM.includes(search) ||
//                     item.FCLTY_ROAD_NM_ADDR.includes(search)
//             )
//         }

//         if (currentCategory !== '카테고리 전체') {
//             result = result.filter((item: any) =>
//                 item.MLSFC_NM.includes(currentCategory)
//             )
//         }

//         if (parking) {
//             result = result.filter((item: any) => item.ADIT_DC.includes('주차'))
//         }

//         if (cafe) {
//             result = result.filter((item: any) => item.ADIT_DC.includes('카페'))
//         }

//         if (openFilter === 0) {
//             result = result.filter((item: any) => item.isOpen === true)
//         }

//         setDB(result)
//         setSearch('')
//     }

//     const [currentCategory, setCurrentCategory] =
//         useState<string>('카테고리 전체')

//     const [parking, setParking] = useState<boolean>(false)
//     const [cafe, setCafe] = useState<boolean>(false)
//     const [openFilter, setOpenFilter] = useState<number>(openFilterEnum.ALL)

//     // 검색 결과 초기화 핸들링 함수
//     const handleResetResult = useCallback(() => {
//         setDB(DBDefault)
//         setCurrentCategory('카테고리 전체')
//         setCafe(false)
//         setParking(false)
//         setOpenFilter(2)
//         setSearch('')
//     }, [setDB, setCurrentCategory, setCafe, setParking, setOpenFilter])

//     return {
//         handleSubmit,
//         handleResetResult,
//         setCurrentCategory,
//         setCafe,
//         setParking,
//         setOpenFilter,
//         openFilter,
//         currentCategory,
//         parking,
//         cafe,
//     }
// }
