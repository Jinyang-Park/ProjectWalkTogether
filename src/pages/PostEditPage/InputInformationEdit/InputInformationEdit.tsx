import * as S from './InputInformationEdit.style';
import { myLocation, selectedAddress } from '../../../Recoil/Atom';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useState, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import AntCalendarEdit from '../Calendar/AntCalendarDateEdit';
import AntCalendarTimeEdit from '../Calendar/AntCalendarTimeEdit';
import React from 'react';

interface Edit {
  addressEdit: string;
  lat: number;
  lng: number;
}
function InputInformationEdit({ addressEdit, lat, lng }: Edit) {
  // 현재 위치를 가져오기 위한 state 생성
  const [myLoca, setMyLoca] = useState({ lat, lng });
  // const [myLoca, setMyLoca] = useRecoilState(myLocation);

  // 지도 좌표를 저장할 state   (o)
  const [position, setPosition] = useRecoilState(myLocation);

  // 인포윈도우 Open 여부를 저장하는 state 입니다.
  const [isOpen, setIsOpen] = useState({ lat: '', lng: '', isopen: false });

  // db에 올라간 위치가 불러질때 myloca(db에 올라간 위치)를 setPostiton 함수에 넣는 로직
  useEffect(() => {
    setPosition(myLoca);
  }, [myLoca]);

  // 키워드로 장소검색하기를 위한 state
  const [info, setInfo] = useState<any>();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState<any>();
  const [bounds, setBounds] = useState();

  // input value 를 가져오기 위한 state
  const [search, setSearch] = useState('');
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  // 좌표 - 주소 변환을 위한 State (0)
  // const [address, setAddress] = useState('');
  const [address, setAddress] = useRecoilState(selectedAddress);
  const geocoder = new kakao.maps.services.Geocoder();

  // 커스터마이징 된 지도 컨트롤러
  const mapRef = useRef(null);

  // 줌인
  const zoomIn = () => {
    const mapControl = mapRef.current;
    mapControl.setLevel(map.getLevel() - 1);
  };
  // 줌아웃
  const zoomOut = () => {
    const mapControl = mapRef.current;
    mapControl.setLevel(map.getLevel() + 1);
  };
  // 내위치 찾기
  const findMyLocation = () => {
    const mapControl = mapRef.current;
    mapControl.panTo(new kakao.maps.LatLng(myLoca.lat, myLoca.lng));
  };
  // 카카오 길찾기 링크로 이동 (내 위치 -> useState Postion에 저장된 위치)
  const linkToKaKaoNavi = () => {
    const url = `https://map.kakao.com/link/search/${address}`;
    window.open(url);
  };

  // 키워드로 장소검색하기 위한 useEffect
  useEffect(() => {
    SearchFunction();
  }, [map]);

  //  // 지도를 불러오기 위한 함수
  const SearchFunction = () => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(search, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

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
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  };

  // geocoder를 이용해 좌표 - 주소 변환
  const convertAddress = () => {
    geocoder.coord2Address(position.lng, position.lat, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setAddress(result[0].address.address_name);
      }
    });
  };
  convertAddress();

  return (
    <S.MapNInputBox>
      <S.MapAddressTitle>
        <S.Selection> 장소를 선택해 주세요</S.Selection>
        <S.AddressIcon
          src={require('../../../assets/PostPageIcon/AddressIcon.svg').default}
        />
      </S.MapAddressTitle>
      <S.borderline></S.borderline>
      <S.MapBox>
        <S.KakaoMap>
          <Map
            center={myLoca}
            style={{ width: '100%', height: '100%' }}
            level={4}
            onCreate={setMap}
            ref={mapRef}
            onClick={(_t, mouseEvent) => {
              // if setIsOpen is true, set it to false
              // else call setPosition
              if (isOpen.isopen) {
                setIsOpen({
                  lat: '',
                  lng: '',
                  isopen: false,
                });
              } else
                setPosition({
                  lat: mouseEvent.latLng.getLat(),
                  lng: mouseEvent.latLng.getLng(),
                });
            }}
          >
            {position && <MapMarker position={position} />}

            <S.CustomZoomControl className='custom_zoomcontrol'>
              <S.ZoomInButton onClick={zoomIn}>
                {/* <AiOutlinePlus size={40} /> */}
                <S.ZoomInSVG
                  src={
                    require('../../../assets/MapPageIcon/PlusButton.svg')
                      .default
                  }
                />
              </S.ZoomInButton>
              <S.ZoomOutButton onClick={zoomOut}>
                <S.ZoomOutSVG
                  src={
                    require('../../../assets/MapPageIcon/MinusButton.svg')
                      .default
                  }
                />
              </S.ZoomOutButton>
              <S.FindMyLocationButton onClick={findMyLocation}>
                <S.FindMyLocationSVG
                  src={
                    require('../../../assets/MapPageIcon/LocationButton.svg')
                      .default
                  }
                />
              </S.FindMyLocationButton>
              <S.LinkToKaKaoNavibutton onClick={linkToKaKaoNavi}>
                <S.LinkToKaKaoNaviSVG
                  src={
                    require('../../../assets/MapPageIcon/NaviButton.svg')
                      .default
                  }
                />
              </S.LinkToKaKaoNavibutton>
            </S.CustomZoomControl>
          </Map>
          {/* {position && (
            <p>
              {'클릭한 위치의 위도는 ' +
                position.lat +
                ' 이고, 경도는 ' +
                position.lng +
                ' 입니다'}
            </p>
          )} */}
        </S.KakaoMap>
      </S.MapBox>
      <S.InputBox>
        <S.InputAdressBox
          onSubmit={(e) => {
            e.preventDefault();
            SearchFunction();
            e.preventDefault();
            SearchFunction();
          }}
        >
          <S.InputAdress
            bordered={false}
            type={'text'}
            placeholder={'주소를 입력해주세요'}
            value={search}
            onChange={onChange}
          />
        </S.InputAdressBox>
        <S.InpuDayBox>
          <AntCalendarEdit />
        </S.InpuDayBox>
        <S.InputTimeBox>
          <AntCalendarTimeEdit />
        </S.InputTimeBox>
      </S.InputBox>
    </S.MapNInputBox>
  );
}

export default InputInformationEdit;
