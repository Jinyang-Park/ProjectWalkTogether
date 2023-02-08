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
            <DetailAddressIcon />
            <DetailAddress>서울특별시 강남구 청담동</DetailAddress>
            <DetailDate>2/9(목) 19:30</DetailDate>
            <HeartIcon />
          </DetailAddressWrapper>
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
                  산책을 좋아하는 평범한 회사원 30살 여자입니다. 요즘 제가 푹
                  빠진 락 음악을 같이 들으며 걸으실분 있으신가요? 락 음악을
                  좋아하는 사람들과 교류하고 싶습니다. 많은 댓글 남겨주세요
                </IntroContents>
              </IntroContentsWrapper>
            </IntroContainer>
          </DetailIntroduceArea>
        </DetailTextWrapper>
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

export const DetailWapper = styled.div``;
export const DetailContainer = styled.div``;
export const ThumbnailImg = styled.img``;
export const DetailTextWrapper = styled.div``;
export const DetailTitle = styled.h1``;
export const DetailHashTag = styled.p``;
export const DetailAddressWrapper = styled.div``;
export const DetailAddressIcon = styled(MdLocationOn)``;
export const DetailAddress = styled.h2``;
export const DetailDate = styled.p``;
export const HeartIcon = styled(AiOutlineHeart)``;
export const DetailIntroduceArea = styled.div``;
export const IntroImgWrapper = styled.span``;
export const UserImg = styled.img``;
export const IntroContainer = styled.div``;
export const IntroUserNickNameArea = styled.div``;
export const IntroUserNickName = styled.p``;
export const IntroContentsWrapper = styled.div``;
export const IntroContents = styled.p``;
export const DetailLoactionWrapper = styled.div``;
export const DeatilLoactionTitle = styled.h1``;
export const DetailLoactionContainer = styled.div``;
export const LoactionTitle = styled.p``;
export const LoactionMap = styled.img``;
export const DetailCommentsWrapper = styled.div``;
export const CommentTitle = styled.h1``;
export const DetailCommentContainer = styled.div``;
export const CommentUserImgWrapper = styled.span``;
export const CommtentUserImg = styled.img``;
