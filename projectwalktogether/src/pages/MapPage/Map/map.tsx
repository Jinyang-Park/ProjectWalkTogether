import React, { useEffect, useRef, useState } from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { useParams } from 'react-router-dom'

import { useRecoilState, useRecoilValue } from 'recoil'
import { useMap } from '../../../hooks/useMap'

import styled from 'styled-components'
import * as S from '../Map/map.style'

const { kakao } = window

// 카카오 객체를 window 객체의 interface에 추가
declare global {
    interface Window {
        kakao: any
    }
}

const MapContainer = () => {
    // 전역 DB 불러오기

    // 지도가 표시괼 HTML 요소

    // 현재 클릭한 PostingId를 저장하는 state

    const { makeMap, makeMarkers, map } = useMap(
        mapContainer,
        setMarkerImage,
        markerImage,
        DB
    )

    // * 첫 렌더링 시 지도 생성
    useEffect(() => {
        makeMap()
    }, [makeMap])

    //* 아래 useEffect는 지도를 불러오는 함수
    useEffect(() => {
        const container = document.getElementById('showMap')
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        }
        const map = new kakao.maps.Map(container, options)
    }, [])

    //* DB가 변경되면 마커 생성
    useEffect(() => {
        makeMarkers()
    }, [DB, makeMarkers, markerImage])

    return <S.Mapbox id="showMap"></S.Mapbox>
}

export default MapContainer
