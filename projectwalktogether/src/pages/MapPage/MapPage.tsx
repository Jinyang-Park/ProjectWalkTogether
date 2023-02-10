import React from 'react'
import styled from 'styled-components'
import * as S from './MapPage.style'
import InfoList from './InfoList/InfoList'
import MapContainer from './Map/map'
import { currentLocationState } from '../../store/selector'

declare global {
    interface Window {
        kakao: any
    }
}

const { kakao } = window

// GeoLocation으로 Kakao API 에 현재 위치를 표시하는 함수
const CurrentLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude, // 위도
                lon = position.coords.longitude // 경도
            const locPosition = new window.kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
                message = '<div style="padding:5px;">현재 위치</div>' // 인포윈도우에 표시될 내용입니다

            // 마커와 인포윈도우를 표시합니다
            displayMarker(locPosition, message)
        })
    } else {
        const locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667),
            message = 'geolocation을 사용할수 없어 기본 위치로 이동합니다.'

        currentLocationState['lat'] = 33.450701
        currentLocationState['lon'] = 126.570667

        displayMarker(locPosition, message)
    }
    return true
}

// 현재 위치를 표시하는 마커를 생성하고 지도위에 표시하고, 인포 윈도우 표시하는 함수
const displayMarker = (locPosition: any, message: any) => {
    let imageSize = new window.kakao.maps.Size(24, 35) // 마커이미지의 크기입니다
    let imageSrc =
        'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png' // 마커이미지의 주소입니다
    let markerImage = new kakao.amps.MarkerImage(imageSrc, imageSize)

    // 마커를 생성합니다
    const marker = new window.kakao.maps.Marker({
        map: Map,
        position: locPosition,
        image: markerImage, // 마커이미지 설정
    })

    // 인포윈도우에 표시할 내용입니다
    const iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true

    // 인포윈도우를 생성합니다
    const infowindow = new window.kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
    })

    // 인포윈도우를 마커위에 표시합니다
    infowindow.open(Map, marker)

    // 지도 중심좌표를 접속위치로 변경합니다
    // Map.setCenter(locPosition)
}

const MapPage = () => {
    return (
        <S.MapPageContainer>
            <S.MapPageHeader>
                <S.EmptyBox></S.EmptyBox>
                <S.MapPageTitle>같이 걷고 싶은 사람들</S.MapPageTitle>
                <S.LineMarker></S.LineMarker>
            </S.MapPageHeader>
            <S.MapPageContentsWrapper>
                <S.MapKaKaoMapContainer>
                    <MapContainer />
                </S.MapKaKaoMapContainer>
                <S.UserInfoContainer>
                    <InfoList />
                </S.UserInfoContainer>
            </S.MapPageContentsWrapper>
        </S.MapPageContainer>
    )
}

export default MapPage
