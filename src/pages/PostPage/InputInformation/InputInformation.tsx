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

  // 키워드로 장소검색하기를 위한 state
  const [info, setInfo] = useState<any>()
  const [markers, setMarkers] = useState([])
  const [map, setMap] = useState<any>()
  const [bounds, setBounds] = useState()

  // input value 를 가져오기 위한 state
  const [search, setSearch] = useState('')
  const onChange = (e) => {
    setSearch(e.target.value)
  }

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

  // 키워드로 장소검색하기 위한 useEffect
  useEffect(() => {
    SearchFunction()
  }, [map])

  //  // 지도를 불러오기 위한 함수
  const SearchFunction = () => {
    if (!map) return
    const ps = new kakao.maps.services.Places()

    ps.keywordSearch(search, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds()
        let markers = []

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          // markers.push({
          //   position: {
          //     lat: data[i].y,
          //     lng: data[i].x,
          //   },
          //   content: data[i].place_name,
          // })
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }
        setMarkers(markers)

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds)
      }
    })
  }

  console.log(search)

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
            level={3}
            onClick={(_t, mouseEvent) =>
              setPosition({
                lat: mouseEvent.latLng.getLat(),
                lng: mouseEvent.latLng.getLng(),
              })
            }
            onCreate={setMap}
          >
            <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
            <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />
            {position && <MapMarker position={position} />}
            {/* {markers.map((marker) => (
              <MapMarker
                key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                position={marker.position}
                onClick={() => setInfo(marker)}
              >
                {info && info.content === marker.content && (
                  <div style={{ color: '#000' }}>{marker.content}</div>
                )}
              </MapMarker>
            ))} */}
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
        <S.InputAdressBox
          onSubmit={(e) => {
            e.preventDefault()
            SearchFunction()
          }}
        >
          <input
            type={'text'}
            placeholder={'주소를 입력해주세요'}
            value={search}
            onChange={onChange}
          />
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
