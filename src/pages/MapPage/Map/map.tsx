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

const MapContainer = (Post) => {
  // 현재 위치를 가져오기 위한 state 생성
  const [myLoca, setMyLoca] = useState({ lat: 36.5, lng: 127.8 })

  // 인포윈도우 Open 여부를 저장하는 state 입니다.
  const [isOpen, setIsOpen] = useState(false)

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

  console.log('Post', Post)

  // db의 Post 컬렉션에서 가져온 데이터를 MapMarker에 넣어주기 위한 배열 생성
  const Markers = Post.Post.map((post) => {
    console.log(Post, post.MeetLatitude_Posting)
    console.log(post.MeetLongitude_Posting)

    return (
      <MapMarker
        position={{
          lat: post.MeetLatitude_Posting,
          lng: post.MeetLongitude_Posting,
        }}
        clickable={true} // 마커를 클릭했을 때 클릭 이벤트를 발생시킬지 여부를 지정합니다.
        onClick={() => {
          setIsOpen(true)
        }}
      >
        {isOpen && (
          <S.InfoWindow onClick={() => setIsOpen(false)}></S.InfoWindow>
        )}
        {/* <div style={{ color: '#000' }} key={post.PostingID_Posting}> */}
        {/* {post.Title_Posting} */}
        {/* </div> */}
      </MapMarker>
    )
  }, [])

  return (
    <Map center={myLoca} style={{ width: '100%', height: '100%' }}>
      {Markers}
      <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
      <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />
    </Map>
  )
}

export default MapContainer
