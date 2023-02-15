import React, { useEffect, useRef, useState } from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { useParams } from 'react-router-dom'

import { useRecoilState, useRecoilValue } from 'recoil'

// import { dbState } from '../../../store/selector'

import * as S from '../Map/map.style'

import { Map, MapMarker } from '@react-kakao-maps/api'

const MapContainer = () => {
  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: '100%', height: '360px' }}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: '#000' }}>Hello World!</div>
      </MapMarker>
    </Map>
  )
}

export default MapContainer
