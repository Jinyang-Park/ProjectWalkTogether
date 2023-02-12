import React from 'react'

import * as S from './InfoList.style'

const InfoList = () => {
    return (
        <>
            <S.HeaderLine>
                <S.HeaderLineTitle>같이 걸을래?</S.HeaderLineTitle>
                <S.HeaderLineCategory>카테고리전체</S.HeaderLineCategory>
            </S.HeaderLine>
            <S.SearchLine>
                <S.SearchLineSearchByLocation>
                    내 위치에서 검색
                </S.SearchLineSearchByLocation>
                <S.SearchLineSearchInputBox>검색</S.SearchLineSearchInputBox>
            </S.SearchLine>
            <S.SearchLineTotalCount>총 n 건의 검색결과</S.SearchLineTotalCount>
            <S.ResultList>
                {/* 카드 */}
                <S.ResultListCard>
                    <S.ResultListCardTitle>
                        같이 음악 들으면서 걸어요
                    </S.ResultListCardTitle>
                    <S.ResultListCardLocationTimeDateWrapper>
                        <S.ResultListCardLocation>
                            서울특별시 강남구 청담동
                        </S.ResultListCardLocation>
                        <S.ResultListCardDate>2021.08.01</S.ResultListCardDate>
                        <S.ResultListCardTime>14:00</S.ResultListCardTime>
                    </S.ResultListCardLocationTimeDateWrapper>
                    <S.ResultListTagList>
                        <S.ResultListTag>#음악</S.ResultListTag>
                        <S.ResultListTag>#락</S.ResultListTag>
                        <S.ResultListTag>#뮤즈파에요</S.ResultListTag>
                    </S.ResultListTagList>
                </S.ResultListCard>
                {/* 카드 */}
                <S.ResultListCard>
                    <S.ResultListCardTitle>
                        정치 이야기 해요
                    </S.ResultListCardTitle>
                    <S.ResultListCardLocationTimeDateWrapper>
                        <S.ResultListCardLocation>
                            서울특별시 강남구 송파구
                        </S.ResultListCardLocation>
                        <S.ResultListCardDate>2022.10.20</S.ResultListCardDate>
                        <S.ResultListCardTime>19:00</S.ResultListCardTime>
                    </S.ResultListCardLocationTimeDateWrapper>
                    <S.ResultListTagList>
                        <S.ResultListTag>#이야기잘듣는좌파</S.ResultListTag>
                        <S.ResultListTag>
                            #공격적이지않은우파환영
                        </S.ResultListTag>
                        <S.ResultListTag>
                            #요즘뉴스어떻게생각하시는지
                        </S.ResultListTag>
                    </S.ResultListTagList>
                </S.ResultListCard>
            </S.ResultList>
        </>
    )
}

export default InfoList
