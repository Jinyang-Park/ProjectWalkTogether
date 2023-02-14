import styled from 'styled-components'

export const MapPageContainer = styled.span`
  display: flex;
  flex-direction: column;
  height: 200vh;
  margin: 30 auto;
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
  margin-left: 50px;
`
export const MapPageSearchBar = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding-left: 15px;
  height: 50px;
  width: 94%;
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
  width: 95%;
  height: 50vh;
  @media screen and (max-width: 344px) {
    width: 300px;
    height: 300px;
  }
`
export const MapPageTitle = styled.span`
  display: flex;

  font-size: 40px;
  margin-left: 50px;
  margin-top: 50px;
  font-weight: 600;
`

export const LineMarker = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5px;
  border-bottom: 1px solid black;
  width: 90%;
`

export const MapPageContentsWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 90%;
  height: 100%;
  gap: 10px;
  margin-top: 20px;
  @media screen and (max-width: 344px) {
    flex-direction: column;
  }
`

export const UserInfoContainer = styled.span`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;
  @media screen and (max-width: 344px) {
    width: 330px;
  }
`
