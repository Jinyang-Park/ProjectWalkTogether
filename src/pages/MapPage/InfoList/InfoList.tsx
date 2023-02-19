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
              <S.ResultListCardImage>
                {/* {post.ThunmnailURL_Posting} */}
              </S.ResultListCardImage>
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
                  {post.Address_Posting}
                </S.ResultListCardLocation>
                <S.ResultListCardDateTimeLikeWrapper>
                  <S.ResultListCardDateTimeWrapper>
                    <S.ResultListCardDate>
                      {post.RsvDate_Posting}
                    </S.ResultListCardDate>
                    <S.ResultListCardTime>
                      {post.RsvHour_Posting}
                    </S.ResultListCardTime>
                  </S.ResultListCardDateTimeWrapper>
                  <S.ResultListCardLike>♡</S.ResultListCardLike>
                </S.ResultListCardDateTimeLikeWrapper>
              </S.ResultListCardLocationTimeDateWrapper>
            </S.ResultListCard>
          )
        })}
      </S.ResultList>
    </>
  )
}

export default InfoList
