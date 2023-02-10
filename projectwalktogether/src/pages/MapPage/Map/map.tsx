import React, { useEffect, useRef, useState } from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { useParams } from 'react-router-dom'

import { useRecoilState, useRecoilValue } from 'recoil'
import { useMap } from '../../../hooks/useMap'
import { dbState } from '../../../store/selector'

import styled from 'styled-components'
import * as S from '../Map/map.style'

import { data } from '../../../dummydata'

// 카카오 객체를 window 객체의 interface에 추가
declare global {
  interface Window {
    kakao: any
  }
}

const MapContainer = () => {
  const mapContainer = useRef(null) // 지도를 담을 영역의 DOM 레퍼런스
  const [markerImage, setMarkerImage] = useState<any>(null) // 마커 이미지
  const [DB] = useRecoilValue<any>(dbState)

  // 전역 DB 불러오기

  // 지도가 표시괼 HTML 요소

  // 현재 클릭한 PostingId를 저장하는 state

  const { makeMap, makeMarkers } = useMap(
    mapContainer,
    setMarkerImage,
    markerImage,
    data
  )

  console.log('DB', DB)
  console.log(Array.isArray(DB))
  console.log(data)

  // * 첫 렌더링 시 지도 생성
  useEffect(() => {
    makeMap()
  }, [])

  //* DB가 변경되면 마커 생성
  useEffect(() => {
    makeMarkers()
  }, [markerImage])

  return <S.Mapbox ref={mapContainer}></S.Mapbox>
}

export default MapContainer
