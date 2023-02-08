import styled from 'styled-components'

export const HeaderLine = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 50px;
    margin-top: 30px;
    margin-left: 50px;
    margin-bottom: 10px;
`
export const HeaderLineTitle = styled.span`
    font-size: 30px;
    font-weight: 600;
`
export const HeaderLineCategory = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
    width: 120px;
    height: 40px;
`
export const SearchLine = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
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
    color: gray; ;
`
export const ResultList = styled.span`
    display: flex;
    flex-direction: column;
`
export const ResultListCard = styled.span`
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
`
export const ResultListCardTitle = styled.span`
    font-size: larger;
    font-weight: 600;
`

export const ResultListCardLocationTimeDateWrapper = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const ResultListCardLocation = styled.span`
    font-size: smaller;
    color: coral;
`
export const ResultListCardDate = styled.span`
    font-size: smaller;
`
export const ResultListCardTime = styled.span`
    font-size: smaller;
    margin-right: 150px;
`
export const ResultListTagList = styled.span`
    display: flex;
    flex-direction: row;
    gap: 5px;
    color: gray;
`
export const ResultListTag = styled.span``
