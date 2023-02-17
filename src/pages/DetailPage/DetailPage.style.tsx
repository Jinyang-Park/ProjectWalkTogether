import styled from 'styled-components';
import { MdLocationOn } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';

export const DetailWapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
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
