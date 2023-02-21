import styled from 'styled-components'

export const HeaderLine = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  margin-top: 30px;
  margin-bottom: 10px;
  @media screen {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const HeaderLineTitle = styled.span`
  font-size: 30px;
  font-weight: 600;
  @media screen {
    font-size: Large;
  }
`
export const HeaderLineCategory = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  width: 120px;
  height: 40px;
  @media screen {
    width: 100px;
    height: 30px;
  }
`
export const SearchLine = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
export const SearchLineSearchByLocation = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: smaller;
`
export const SearchLineSearchInputBox = styled.span`
  width: 100%;
  height: 15px;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid black;
`
export const SearchLineTotalCount = styled.span`
  font-size: smaller;
  color: gray;

  margin-bottom: 100px;
`
export const ResultList = styled.span`
  display: flex;
  flex-direction: row;

  gap: 50px;
`
export const ResultListCard = styled.span`
  display: flex;
  flex-direction: column;

  padding: 10px;
  border: 1px solid black;
`

export const ResultListCardImage = styled.img`
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
