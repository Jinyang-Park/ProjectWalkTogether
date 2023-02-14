import React from 'react';
import * as S from './MapPage.style';
import InfoList from './InfoList/InfoList';
import MapContainer from './Map/map';
import FilterBar from './Filter/Filter';

import { AiOutlineSearch } from 'react-icons/ai';
import { RxDividerVertical } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';

const MapPage = () => {
  return (
    <S.MapPageContainer>
      <S.MapPageHeader>
        <S.MapPageSearchBar>
          <AiOutlineSearch size={40} />
          <S.SearchBar placeholder='대화 주제를 검색해 보세요.' />
          <RxDividerVertical size={36} />
          <IoMdClose size={40} />
        </S.MapPageSearchBar>
        <S.MapKaKaoMapContainer>
          <MapContainer />
        </S.MapKaKaoMapContainer>
      </S.MapPageHeader>

      <S.MapPageContentsWrapper>
        <S.MapPageTitle>같이 걸을래요?</S.MapPageTitle>
        <S.UserInfoContainer>
          <FilterBar />

          <InfoList />
        </S.UserInfoContainer>
      </S.MapPageContentsWrapper>
    </S.MapPageContainer>
  );
};

export default MapPage;
