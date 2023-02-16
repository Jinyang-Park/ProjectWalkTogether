import styled from 'styled-components'

export const Mapbox = styled.div`
  width: 100%;
  height: 100%;
`

export const InfoWindow = styled.span`
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 235px;
  cursor: pointer;
`
export const ResultListCard = styled.span`
  display: flex;
  flex-direction: column;

  padding: 10px;
`

export const ResultListCardImage = styled.span`
  width: 100%;
  height: 96px;
  margin-bottom: 5px;
`
export const ResultListCardTitle = styled.span`
  font-size: larger;
  font-weight: 600;
  margin-bottom: 5px;
`

export const ResultListCardLocationTimeDateWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 180px;
`
export const ResultListCardLocation = styled.span`
  font-size: smaller;
  color: coral;
  width: 180px;
`
export const ResultListCardLine = styled.span`
  width: 180px;
  height: 1px;
  background-color: gray;
`
export const ResultListCardDateTimeWrapper = styled.span`
  display: flex;
  flex-direction: row;

  justify-content: start;
`
export const ResultListCardDate = styled.span`
  font-size: smaller;
  width: 80px;
`
export const ResultListCardTime = styled.span`
  font-size: smaller;
  width: 80px;
`
export const ResultListTagList = styled.span`
  display: flex;
  flex-direction: row;
  font-size: smaller;
  gap: 5px;
  color: gray;
  margin-top: 5px;
`
export const ResultListTag = styled.span``

export const ResultListCardLike = styled.span`
  margin-left: 20px;
  color: red;
`

export const ResultListCardDateTimeLikeWrapper = styled.span`
  display: flex;
  flex-direction: row;
`
