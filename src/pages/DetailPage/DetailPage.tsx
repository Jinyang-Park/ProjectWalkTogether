import * as S from './DetailPage.style';
import Comments from './Comments/Comments';
import CommonStyles from './../../styles/CommonStyles';

const DetailPage = () => {
  return (
    <CommonStyles>
      <S.DetailWapper>
        {/*글 디테일 */}
        <S.DetailContainer>
          <S.ThumbnailImg src='/assets/thumbnailImg.png' />
          <S.DetailTextWrapper>
            <S.DetailTitle>같이음악 들으면서 걸어요</S.DetailTitle>
            <S.DetailHashTag>#락어때요 #뮤즈가짱이에요 #인디곡</S.DetailHashTag>
            <S.DetailAddressWrapper>
              <S.HeartIcon />
            </S.DetailAddressWrapper>
          </S.DetailTextWrapper>
          <S.DetailIntroduceArea>
            <S.IntroImgWrapper>
              <S.UserImg src='/assets/hodu.jpg' />
            </S.IntroImgWrapper>
            <S.IntroContainer>
              <S.IntroUserNickNameArea>
                <S.IntroUserNickName>호두누나</S.IntroUserNickName>
              </S.IntroUserNickNameArea>
              <S.IntroContentsWrapper>
                <S.IntroContents>
                  산책을 좋아하는 평범한 회사원 30살 여자입니다. 요즘 제가 푹
                  빠진 락 음악을 같이 들으며 걸으실분 있으신가요? 락 음악을
                  좋아하는 사람들과 교류하고 싶습니다. 많은 댓글 남겨주세요. 락
                  음악을 좋아하는 사람들과 교류하고 싶습니다. 많은 댓글
                  남겨주세요. 락 음악을 좋아하는 사람들과 교류하고 싶습니다.
                  많은 댓글 남겨주세요. 락 음악을 좋아하는 사람들과 교류하고
                  싶습니다. 많은 댓글 남겨주세요. 락 음악을 좋아하는 사람들과
                  교류하고 싶습니다. 많은 댓글 남겨주세요.
                </S.IntroContents>
              </S.IntroContentsWrapper>
            </S.IntroContainer>
          </S.DetailIntroduceArea>
          <S.DetailLoactionWrapper>
            <S.DeatilLoactionTitle>장소는 이 곳이에요</S.DeatilLoactionTitle>
            <S.DetailLoactionContainer>
              <S.LoactionMap src='/assets/mapimg.png' />
              <S.DetailAddressContainer>
                <S.DetailAddressIcon />
                <S.DetailAddressBox>
                  <S.DetailAddress>
                    서울특별시 강남구 청담동 12번 출구
                  </S.DetailAddress>
                  <S.DetailDate>2/9(목) 19:30PM</S.DetailDate>
                </S.DetailAddressBox>
              </S.DetailAddressContainer>
            </S.DetailLoactionContainer>
          </S.DetailLoactionWrapper>
          {/* 댓글 */}
          <Comments />
        </S.DetailContainer>
      </S.DetailWapper>
    </CommonStyles>
  );
};

export default DetailPage;
