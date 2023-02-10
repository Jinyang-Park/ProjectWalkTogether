import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

const DetailPage = () => {
  return (
    <DetailWapper>
      <DetailContainer>
        <ThumbnailImg src='/assets/thumbnailImg.png' />
        <DetailTextWrapper>
          <DetailTitle>같이음악 들으면서 걸어요</DetailTitle>
          <DetailHashTag>#락어때요 #뮤즈가짱이에요 #인디곡</DetailHashTag>
          <DetailAddressWrapper>
            <DetailAddressContainer>
              <DetailAddressIcon />
              <DetailAddress>서울특별시 강남구 청담동</DetailAddress>
              <DetailDate>2/9(목) 19:30</DetailDate>
            </DetailAddressContainer>
            <HeartIcon />
          </DetailAddressWrapper>
        </DetailTextWrapper>
        <DetailIntroduceArea>
          <IntroImgWrapper>
            <UserImg src='/assets/hodu.jpg' />
          </IntroImgWrapper>
          <IntroContainer>
            <IntroUserNickNameArea>
              <IntroUserNickName>호두누나</IntroUserNickName>
            </IntroUserNickNameArea>
            <IntroContentsWrapper>
              <IntroContents>
                산책을 좋아하는 평범한 회사원 30살 여자입니다. 요즘 제가 푹 빠진
                락 음악을 같이 들으며 걸으실분 있으신가요? 락 음악을 좋아하는
                사람들과 교류하고 싶습니다. 많은 댓글 남겨주세요. 락 음악을
                좋아하는 사람들과 교류하고 싶습니다. 많은 댓글 남겨주세요. 락
                음악을 좋아하는 사람들과 교류하고 싶습니다. 많은 댓글
                남겨주세요. 락 음악을 좋아하는 사람들과 교류하고 싶습니다. 많은
                댓글 남겨주세요. 락 음악을 좋아하는 사람들과 교류하고 싶습니다.
                많은 댓글 남겨주세요.
              </IntroContents>
            </IntroContentsWrapper>
          </IntroContainer>
        </DetailIntroduceArea>
        <DetailLoactionWrapper>
          <DeatilLoactionTitle>만나는 장소</DeatilLoactionTitle>
          <DetailLoactionContainer>
            <LoactionTitle>서울특별시 강남구 청담역 12번출구</LoactionTitle>
            <LoactionMap src='/assets/mapimg.png' />
          </DetailLoactionContainer>
        </DetailLoactionWrapper>
        <DetailCommentsWrapper>
          <CommentTitle>댓글</CommentTitle>
          <DetailCommentContainer>
            <CommentUserImgWrapper>
              <CommtentUserImg src='/assets/hodu.jpg' />
            </CommentUserImgWrapper>
          </DetailCommentContainer>
        </DetailCommentsWrapper>
      </DetailContainer>
    </DetailWapper>
  );
};

export default DetailPage;

export const DetailWapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 1152px;
  margin: 0 auto;
`;
export const DetailContainer = styled.div``;
export const ThumbnailImg = styled.img`
  background-position: 50%;
  background-size: cover;
  position: relative;
  height: 496px;
`;
export const DetailTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* text-align: center; */
  padding-bottom: 1.5rem;
  /* max-width: 46rem; */
`;
export const DetailTitle = styled.h1`
  font-weight: 600;
  text-align: left;
  font-size: 1.75rem;
  margin-bottom: 0.25rem;
  margin-top: 1.5rem;
`;
export const DetailHashTag = styled.p`
  font-size: 1rem;
  letter-spacing: -0.0238rem;
  text-align: left;
`;
export const DetailAddressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.0625rem solid #f2efed;
  margin-top: 1rem;
  padding-top: 0.75rem;
`;
// export const DetailDateWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;
export const DetailAddressContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
export const DetailAddressIcon = styled(MdLocationOn)`
  margin-right: 0.5rem;
`;
export const DetailAddress = styled.h2`
  font-weight: 700;
  margin-right: 2rem;
`;
export const DetailDate = styled.p`
  font-weight: 700;
`;
export const HeartIcon = styled(AiOutlineHeart)`
  font-size: 1.5rem;
`;
export const DetailIntroduceArea = styled.div`
  margin: 4rem 0 0;
  margin-bottom: 4rem;
  padding: 20px 30px;
  background-color: #fafafa;
  display: flex;
`;
export const IntroImgWrapper = styled.span`
  /* position: relative; */
  cursor: pointer;
  background: #fafafa;
`;
export const UserImg = styled.img`
  width: 80px;
  height: 80px;
  margin: 0;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 30px;
  /* background-color: #d8dde2; */
`;
export const IntroContainer = styled.div`
  width: 100%;
`;
export const IntroUserNickNameArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 8px;
`;
export const IntroUserNickName = styled.p`
  cursor: pointer;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  color: #080403;
`;
export const IntroContentsWrapper = styled.div`
  color: #080403;
  margin: 0;
  white-space: pre-wrap;
`;
export const IntroContents = styled.p`
  font-size: 20px;
  font-weight: 400;
`;
export const DetailLoactionWrapper = styled.div`
  padding: 40px 40px 0;
`;
export const DeatilLoactionTitle = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 10px;
  border-bottom: 0.0625rem solid #f2efed;
`;
export const DetailLoactionContainer = styled.div`
  padding: 0px 40px 0;
`;
export const LoactionTitle = styled.p`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
`;
export const LoactionMap = styled.img`
  margin-top: 20px;
`;
export const DetailCommentsWrapper = styled.div`
  position: relative;
  display: flex;
  margin-top: 80px;
`;
export const CommentTitle = styled.h1``;
export const DetailCommentContainer = styled.div``;
export const CommentUserImgWrapper = styled.span``;
export const CommtentUserImg = styled.img`
  width: 5rem;
  height: 5rem;
`;
