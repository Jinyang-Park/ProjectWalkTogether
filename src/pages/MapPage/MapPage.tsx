import React from 'react';
import styled from 'styled-components';
import * as S from './MapPage.style';
import InfoList from './InfoList/InfoList';
import MapContainer from './Map/map';
import CommonStyles from './../../styles/CommonStyles';

declare global {
  interface Window {
    kakao: any;
  }
}

const MapPage = () => {
  return (
    <CommonStyles>
      <S.MapPageContainer>
        <S.MapPageHeader>
          <S.EmptyBox></S.EmptyBox>
          <S.MapPageTitle>같이 걷고 싶은 사람들</S.MapPageTitle>
          <S.LineMarker></S.LineMarker>
        </S.MapPageHeader>
        <S.MapPageContentsWrapper>
          <S.MapKaKaoMapContainer>
            <MapContainer />
          </S.MapKaKaoMapContainer>
          <S.UserInfoContainer>
            <InfoList />
          </S.UserInfoContainer>
        </S.MapPageContentsWrapper>
      </S.MapPageContainer>
    </CommonStyles>
  );
};

export default MapPage;
