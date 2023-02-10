import React, { useEffect } from 'react'

import styled from 'styled-components'
import * as S from '../Map/map.style'

const { kakao } = window

const MapContainer = () => {
    useEffect(() => {
        const container = document.getElementById('showMap')
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        }

        const map = new kakao.maps.Map(container, options)
    }, [])

    return <S.Mapbox id="showMap"></S.Mapbox>
}

export default MapContainer
