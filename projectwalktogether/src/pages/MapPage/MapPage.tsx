import React from 'react'
import styled from 'styled-components'
import * as S from './MapPage.style'

const MapPage = () => {
    return (
        <S.MapPageContainer>
            <S.MapPageHeader>
                <S.MapPageTitle>같이 걷고 싶은 사람들</S.MapPageTitle>
                <S.LineMarker></S.LineMarker>
            </S.MapPageHeader>
            <S.MapKaKaoMapContainer></S.MapKaKaoMapContainer>
            <S.UserInfoContainer></S.UserInfoContainer>
        </S.MapPageContainer>
    )
}

export default MapPage
