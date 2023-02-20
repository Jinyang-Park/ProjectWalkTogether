import React, { useEffect, useRef, useState } from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { useParams } from 'react-router-dom'

import { useRecoilState, useRecoilValue } from 'recoil'

import { AiOutlineSearch } from 'react-icons/ai'
import { RxDividerVertical } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'

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
  const [myLoca, setMyLoca] = useState({ lat: null, lng: null })

  //! 초기값을 null 로 하고, null 일 때 가가코 지도를 렌더링 하지 않게

  // 지도 좌표를 저장할 state
  const [position, setPosition] = useState({ lat: null, lng: null })

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

  // 좌표 - 주소 변환을 위한 State
  const [address, setAddress] = useState('')
  const geocoder = new kakao.maps.services.Geocoder()

  // 인포윈도우 Open 여부를 저장하는 state 입니다.
  const [isOpen, setIsOpen] = useState({ lat: '', lng: '', isopen: false })

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

  // console.log(search)

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
        // LatLngBounds 객체에 좌표를 추가
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

  // db의 Post 컬렉션에서 가져온 데이터를 MapMarker에 넣어주기 위한 배열 생성
  const Markers = Post.Post.map((post) => {
    // console.log(Post, post.MeetLatitude_Posting)
    // console.log(post.MeetLongitude_Posting)
    // geocoder를 이용해 좌표 - 주소 변환
    // geocoder.coord2Address(
    //   post.MeetLongitude_Posting,
    //   post.MeetLatitude_Posting,
    //   function (result, status) {
    //     if (status === kakao.maps.services.Status.OK) {
    //       setAddress(result[0].address.address_name)
    //     }
    //   }
    // )

    // 1. setAddress 를 빼보자 (무한루프)

    // console.log('address', address)
    const lat = post.MeetLatitude_Posting
    const lng = post.MeetLongitude_Posting

    return (
      <MapMarker
        key={post.PostingID_Posting}
        position={{
          lat,
          lng,
        }}
        clickable={true} // 마커를 클릭했을 때 클릭 이벤트를 발생시킬지 여부를 지정합니다.
        onClick={() => {
          setIsOpen({
            lat,
            lng,
            isopen: true,
          })
        }}
      >
        {lat === isOpen.lat && (
          <S.InfoWindow
            onClick={() =>
              setIsOpen({
                lat: '',
                lng: '',
                isopen: false,
              })
            }
          >
            <S.ResultListCardImage
              src={post.ThunmnailURL_Posting}
            ></S.ResultListCardImage>
            <S.ResultListCard key={post.PostingID_Posting}>
              <S.ResultListCardTitle>
                {post.Title_Posting}
              </S.ResultListCardTitle>
              <S.ResultListTagList>
                <S.ResultListTag>#음악</S.ResultListTag>
                <S.ResultListTag>#락</S.ResultListTag>
                <S.ResultListTag>#뮤즈파에요</S.ResultListTag>
              </S.ResultListTagList>
              <S.ResultListCardLine />
              <S.ResultListCardLocationTimeDateWrapper>
                <S.ResultListCardLocation>
                  {post.Address_Posting}
                </S.ResultListCardLocation>
                <S.ResultListCardDateTimeLikeWrapper>
                  <S.ResultListCardDateTimeWrapper>
                    <S.ResultListCardDate>
                      {post.RsvDate_Posting}
                    </S.ResultListCardDate>
                    <S.ResultListCardTime>
                      {post.RsvHour_Posting}
                    </S.ResultListCardTime>
                  </S.ResultListCardDateTimeWrapper>
                </S.ResultListCardDateTimeLikeWrapper>
              </S.ResultListCardLocationTimeDateWrapper>
            </S.ResultListCard>
          </S.InfoWindow>
        )}
        {/* <div style={{ color: '#000' }} key={post.PostingID_Posting}> */}
        {/* {post.Title_Posting} */}
        {/* </div> */}
      </MapMarker>
    )
  }, [])

  return (
    <>
      <S.MapPageSearchBar
        onSubmit={(e) => {
          e.preventDefault()
          SearchFunction()
        }}
      >
        <AiOutlineSearch size={40} />
        <S.SearchBar
          placeholder='약속 장소를 검색해보세요.'
          type={'text'}
          value={search}
          onChange={onChange}
        />
        <RxDividerVertical size={36} />
        <IoMdClose size={40} />
      </S.MapPageSearchBar>
      <Map
        center={myLoca}
        style={{ width: '100%', height: '100%' }}
        onCreate={setMap}
      >
        {Markers}
        <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
        <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />
      </Map>
    </>
  )
}

export default MapContainer
