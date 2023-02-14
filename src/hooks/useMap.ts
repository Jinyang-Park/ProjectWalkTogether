import { useNavigate } from 'react-router-dom'
import { useCallback, useState } from 'react'

declare global {
  interface Window {
    kakao: any
  }
}

const { kakao } = window

export const useMap = (
  mapContainer: any,
  setMarkerImage: any,
  markerImage: any,
  DB: any
) => {
  const navigate = useNavigate()

  // map 객체를 저장할 state
  const [map, setMap] = useState<any>(null)
  const [markers, setMarkers] = useState<any[]>([])

  // * 지도를 생성하는 함수
  const makeMap = useCallback(() => {
    console.log('맵 실행')
    // 지도를 생성할 때 필요한 기본 옵션
    let options = {
      center: new kakao.maps.LatLng(37.56839464, 126.9303023), // 지도의 중심 좌표
      level: 10, // 지도의 확대 수준
    }

    // 지도를 표시할 div와 지도 옵션으로 지도를 생성함
    const newMap = new kakao.maps.Map(mapContainer.current, options)

    // 지도 확대 축소를 제어할 수 있는 줌 컨트롤 생성
    const zoomControl = new kakao.maps.ZoomControl()
    newMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT)

    // 마커 이미지 생성
    const imageSrc =
      'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png'
    const imageSize = new kakao.maps.Size(30, 45)
    setMarkerImage(new kakao.maps.MarkerImage(imageSrc, imageSize))

    setMap(newMap)
  }, [])
  //   mapContainer
  //   setMarkerImage
  // * 마커를 생성하는 함수
  const makeMarkers = useCallback(() => {
    if (!markerImage) return

    // 기존 마커 제거
    // if (markers.length > 0) {
    //     markers.forEach((marker: any) => marker.setMap(null))
    // }

    console.log('DB', DB)
    console.log(Array.isArray(DB))
    // // 마커 표시하기
    const newMarkers: any[] = []
    // //DB 객체를 빈 배열에 넣어주는 코드
    // let DBArray: any[] = []

    // DBArray.push(DB)
    // console.log('DBArray', DBArray)

    DB.forEach((Post: IdbState) => {
      const marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        title: Post.Title_Posting, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됨
        position: new kakao.maps.LatLng(
          Post.MeetLatitude_Posting,
          Post.MeetLongitude_Posting
        ), // 마커를 표시할 위치(위도, 경도)
        image: markerImage, // 커스텀 마커 이미지 설정
        id: Post.PostingID_Posting, // 마커에 ESNTL_ID를 id로 설정
      })

      // 마커 클릭시 해당 bookstoreId로 라우터 이동
      kakao.maps.event.addListener(marker, 'click', () =>
        navigate(`/map/${Post.PostingID_Posting}`)
      )

      // 마커를 배열에 저장
      newMarkers.push(marker)
    })

    // 마커 배열을 state에 저장
    setMarkers(newMarkers)

    // eslint-disable-next-line
  }, [DB, markerImage])

  return { makeMap, makeMarkers, map }
}
