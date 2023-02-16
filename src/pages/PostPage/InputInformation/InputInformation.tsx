import * as S from './InputInformation.style'
import MaterialUIPickers from '../Hooks/Calendar/MuiCalendar'
import BasicDatePicker from '../Hooks/Calendar/MuiDate'
// import MapContainer from '../../MapPage/Map/map';
import MuiTime from '../Hooks/Calendar/MuiTime'

import {
  Map,
  MapMarker,
  ZoomControl,
  MapTypeControl,
} from 'react-kakao-maps-sdk'
import { useState, useEffect } from 'react'
import React from 'react'

function InputInformation() {
  // 현재 위치를 가져오기 위한 state 생성
  const [myLoca, setMyLoca] = useState({ lat: 36.5, lng: 127.8 })

  // 지도 좌표를 저장할 state
  const [position, setPosition] = useState({ lat: 36.5, lng: 127.8 })

  // 사용자 위치를 가져오기 위한 useEffect
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

  // 주소-좌표 변환 객체를 생성합니다
  var geocoder = new kakao.maps.services.Geocoder()

  return (
    <S.MapNInputBox>
      PostPageInputinfomation
      <S.MapBox>
        안녕하세요
        <S.KakaoMap>
          {' '}
          <Map
            center={myLoca}
            style={{ width: '100%', height: '100%' }}
            onClick={(_t, mouseEvent) =>
              setPosition({
                lat: mouseEvent.latLng.getLat(),
                lng: mouseEvent.latLng.getLng(),
              })
            }
          >
            <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
            <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />
            {position && <MapMarker position={position} />}
          </Map>
          {position && (
            <p>
              {'클릭한 위치의 위도는 ' +
                position.lat +
                ' 이고, 경도는 ' +
                position.lng +
                ' 입니다'}
            </p>
          )}
        </S.KakaoMap>
      </S.MapBox>
      <S.InputBox>
        <S.InputAdressBox>
          <input />
        </S.InputAdressBox>
        <S.InpuDayBox>
          <BasicDatePicker />
        </S.InpuDayBox>

        <S.InputTimeBox>
          {/* <MaterialUIPickers /> */}

          <MuiTime />
        </S.InputTimeBox>
      </S.InputBox>
    </S.MapNInputBox>
  )
}

export default InputInformation
