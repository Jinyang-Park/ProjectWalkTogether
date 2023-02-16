import styled from 'styled-components'

export const MapPageContainer = styled.span`
  display: flex;
  flex-direction: column;
  height: 200vh;
  @media screen and (max-width: 344px) {
    flex-direction: column;
    height: inherit;
    overflow-y: auto;
  }
`

export const MapPageHeader = styled.span`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`
export const MapPageSearchBar = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding-left: 15px;
  height: 50px;

  margin-bottom: 3px;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
`
export const SearchBar = styled.input`
  width: 85%;
  height: 50px;
  font-size: 25px;
  margin-left: 20px;
  ::placeholder {
    color: #bfbfbf;
  }
`

export const MapKaKaoMapContainer = styled.span`
  display: flex;
  flex-direction: column;

  height: 50vh;
  @media screen and (max-width: 344px) {
    width: 300px;
    height: 300px;
  }
`
export const MapPageTitle = styled.span`
  display: flex;

  font-size: 40px;

  margin-top: 50px;
  font-weight: 600;
`

export const LineMarker = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5px;
  border-bottom: 1px solid black;
`

export const MapPageContentsWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  height: 100%;
  gap: 10px;
  @media screen and (max-width: 344px) {
    flex-direction: column;
  }
`

export const UserInfoContainer = styled.span`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media screen and (max-width: 344px) {
  }
`
