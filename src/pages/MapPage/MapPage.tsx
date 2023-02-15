import React from 'react'
import * as S from './MapPage.style'
import InfoList from './InfoList/InfoList'
import MapContainer from './Map/map'
import FilterBar from './Filter/Filter'

import { AiOutlineSearch } from 'react-icons/ai'
import { RxDividerVertical } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import CommonStyles from './../../styles/CommonStyles'

import { doc, getDocs, collection, query, orderBy } from 'firebase/firestore'
import { dbService } from '../../common/firebase'
import { useEffect, useState } from 'react'

import { useRecoilValue } from 'recoil'
import type { DocumentAny } from '../../../src/assets/constants/types'

import useGeolocation from '../../hooks/useGeoLocation'

const MapPage = () => {
  // firestore에서 데이터 'Post' 가져오기
  const [Post, setPosting] = useState<DocumentAny[]>([])

  // firestore에서 데이터 'Post' 가져오기
  const syncpostingstatewithfirestore = () => {
    const q = query(collection(dbService, 'Post'), orderBy('TimeStamp_Posting'))
    getDocs(q).then((querySnapshot) => {
      // DocumentAny[] 는 any 아닌척 하고 싶어서 대신 작성함 types.d.ts
      // 타입 지정은 아래쪽과 같이 해야함
      const firestorePostingList: DocumentAny[] = []
      querySnapshot.forEach((doc) => {
        firestorePostingList.push({
          UID: doc.data().UID,
          Title_Posting: doc.data().Title_Posting,
          Description_Posting: doc.data().Description_Posting,
          Category_Posting: doc.data().Category_Posting,
          PostingID_Posting: doc.data().PostingID_Posting,
        })
      })
      setPosting(firestorePostingList)
    })
  }
  useEffect(() => {
    syncpostingstatewithfirestore()
  }, [])

  // console.log('Post', Post)

  return (
    <CommonStyles>
      <S.MapPageContainer>
        <S.MapPageHeader>
          <S.MapPageSearchBar>
            <AiOutlineSearch size={40} />
            <S.SearchBar placeholder='대화 주제를 검색해 보세요.' />
            <RxDividerVertical size={36} />
            <IoMdClose size={40} />
          </S.MapPageSearchBar>
          <S.MapKaKaoMapContainer>
            {/* Map Container */}
            <MapContainer Post={Post} />
          </S.MapKaKaoMapContainer>
        </S.MapPageHeader>

        <S.MapPageContentsWrapper>
          <S.MapPageTitle>같이 걸을래요?</S.MapPageTitle>
          <S.UserInfoContainer>
            {/* Filter Bar */}
            <FilterBar />

            {/* Posting List */}
            <InfoList Post={Post} />
          </S.UserInfoContainer>
        </S.MapPageContentsWrapper>
      </S.MapPageContainer>
    </CommonStyles>
  )
}

export default MapPage
