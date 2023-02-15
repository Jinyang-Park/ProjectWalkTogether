import React, { useEffect, useRef, useState } from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { useParams } from 'react-router-dom'

import { useRecoilState, useRecoilValue } from 'recoil'

// import { dbState } from '../../../store/selector'

import * as S from '../Map/map.style'

import {
  Map,
  MapMarker,
  ZoomControl,
  MapTypeControl,
} from 'react-kakao-maps-sdk'

const MapContainer = () => {
  const [myLoca, setMyLoca] = useState({ lat: 36.5, lng: 127.8 })
  React.useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어온다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setMyLoca({
            lat: position.coords.latitude, // 위도
            lng: position.coords.longitude, // 경도
          })
        },
        (err) => {
          alert('현재 위치를 표시할 수 없어요')
        },
        { enableHighAccuracy: true } // 위치정보의 정확도를 높이는 옵션
      )
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때
      alert('현재 위치를 표시할 수 없어요')
    }
  }, [])

  return (
    <Map center={myLoca} style={{ width: '100%', height: '100%' }}>
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: '#000' }}>Hello World!</div>
      </MapMarker>

      <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
      <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />
    </Map>
  )
}

export default MapContainer
