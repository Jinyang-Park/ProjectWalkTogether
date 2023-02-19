import React from 'react'
import * as S from './MapPage.style'
import InfoList from './InfoList/InfoList'
import MapContainer from './Map/map'
import FilterBar from './Filter/Filter'

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
          TimeStamp_Posting: doc.data().TimeStamp_Posting,
          MeetLatitude_Posting: doc.data().MeetLatitude_Posting,
          MeetLongitude_Posting: doc.data().MeetLongitude_Posting,
          NowLatitude_Posting: doc.data().NowLatitude_Posting,
          NowLongitude_Posting: doc.data().NowLongitude_Posting,
          RsvDate_Posting: doc.data().RsvDate_Posting,
          RsvHour_Posting: doc.data().RsvHour_Posting,
          Nickname: doc.data().Nickname,
          Address_Posting: doc.data().Address_Posting,
          ThunmnailURL_Posting: doc.data().ThunmnailURL_Posting,
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
