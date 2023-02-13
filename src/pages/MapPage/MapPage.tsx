import React from 'react'
import styled from 'styled-components'
import * as S from './MapPage.style'
import InfoList from './InfoList/InfoList'
import MapContainer from './Map/map'
import { currentLocationState } from '../../store/selector'

const MapPage = () => {
  return (
    <S.MapPageContainer>
      <S.MapPageHeader>
        <S.EmptyBox></S.EmptyBox>
        <S.MapKaKaoMapContainer>
          <MapContainer />
        </S.MapKaKaoMapContainer>
        <S.MapPageTitle>같이 걷고 싶은 사람들</S.MapPageTitle>
        <S.LineMarker></S.LineMarker>
      </S.MapPageHeader>
      <S.MapPageContentsWrapper>
        <S.UserInfoContainer>
          <InfoList />
        </S.UserInfoContainer>
      </S.MapPageContentsWrapper>
    </S.MapPageContainer>
  )
}

export default MapPage
