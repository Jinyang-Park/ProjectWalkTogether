import React from 'react'

import * as S from './InfoList.style'

const InfoList = ({ Post }) => {
  return (
    <>
      {/* <S.HeaderLine>
      { <S.HeaderLineTitle></S.HeaderLineTitle>
        <S.HeaderLineCategory></S.HeaderLineCategory>
      </S.HeaderLine> */}

      <S.SearchLineTotalCount>총 n 건의 검색결과</S.SearchLineTotalCount>
      <S.ResultList>
        {Post.map((post) => {
          return (
            <S.ResultListCard key={post.PostingID_Posting}>
              <S.ResultListCardImage></S.ResultListCardImage>
              <S.ResultListCardTitle>
                {post.Title_Posting}
              </S.ResultListCardTitle>
              <S.ResultListTagList>
                <S.ResultListTag>#음악</S.ResultListTag>
                <S.ResultListTag>#락</S.ResultListTag>
                <S.ResultListTag>#뮤즈파에요</S.ResultListTag>
              </S.ResultListTagList>
              <S.ResultListCardLine />
              <S.ResultListCardLocationTimeDateWrapper>
                <S.ResultListCardLocation>
                  서울특별시 강남구 청담동
                </S.ResultListCardLocation>
                <S.ResultListCardDateTimeLikeWrapper>
                  <S.ResultListCardDateTimeWrapper>
                    <S.ResultListCardDate>2/9 (목)</S.ResultListCardDate>
                    <S.ResultListCardTime>14:00</S.ResultListCardTime>
                  </S.ResultListCardDateTimeWrapper>
                  <S.ResultListCardLike>♡</S.ResultListCardLike>
                </S.ResultListCardDateTimeLikeWrapper>
              </S.ResultListCardLocationTimeDateWrapper>
            </S.ResultListCard>
          )
        })}

        {/* 카드 */}
        <S.ResultListCard>
          <S.ResultListCardImage></S.ResultListCardImage>
          <S.ResultListCardTitle>
            같이 음악 들으면서 걸어요
          </S.ResultListCardTitle>
          <S.ResultListTagList>
            <S.ResultListTag>#음악</S.ResultListTag>
            <S.ResultListTag>#락</S.ResultListTag>
            <S.ResultListTag>#뮤즈파에요</S.ResultListTag>
          </S.ResultListTagList>
          <S.ResultListCardLine />
          <S.ResultListCardLocationTimeDateWrapper>
            <S.ResultListCardLocation>
              서울특별시 강남구 청담동
            </S.ResultListCardLocation>
            <S.ResultListCardDateTimeLikeWrapper>
              <S.ResultListCardDateTimeWrapper>
                <S.ResultListCardDate>2/9 (목)</S.ResultListCardDate>
                <S.ResultListCardTime>14:00</S.ResultListCardTime>
              </S.ResultListCardDateTimeWrapper>
              <S.ResultListCardLike>♡</S.ResultListCardLike>
            </S.ResultListCardDateTimeLikeWrapper>
          </S.ResultListCardLocationTimeDateWrapper>
        </S.ResultListCard>
        {/* 카드 */}
      </S.ResultList>

      <S.ResultList>
        {/* 카드 */}
        <S.ResultListCard>
          <S.ResultListCardImage></S.ResultListCardImage>
          <S.ResultListCardTitle>
            같이 음악 들으면서 걸어요
          </S.ResultListCardTitle>
          <S.ResultListTagList>
            <S.ResultListTag>#음악</S.ResultListTag>
            <S.ResultListTag>#락</S.ResultListTag>
            <S.ResultListTag>#뮤즈파에요</S.ResultListTag>
          </S.ResultListTagList>
          <S.ResultListCardLine />
          <S.ResultListCardLocationTimeDateWrapper>
            <S.ResultListCardLocation>
              서울특별시 강남구 청담동
            </S.ResultListCardLocation>
            <S.ResultListCardDateTimeLikeWrapper>
              <S.ResultListCardDateTimeWrapper>
                <S.ResultListCardDate>2/9 (목)</S.ResultListCardDate>
                <S.ResultListCardTime>14:00</S.ResultListCardTime>
              </S.ResultListCardDateTimeWrapper>
              <S.ResultListCardLike>♡</S.ResultListCardLike>
            </S.ResultListCardDateTimeLikeWrapper>
          </S.ResultListCardLocationTimeDateWrapper>
        </S.ResultListCard>
        {/* 카드 */}
      </S.ResultList>
    </>
  )
}

export default InfoList
