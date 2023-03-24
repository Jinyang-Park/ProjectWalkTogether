import styled from 'styled-components';
import { MdLocationOn } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import { FiMoreVertical } from 'react-icons/fi';
import { FindBox } from './../SignUpPage/SignUpPage.style';

export const DetailAddressContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -150px;
`;
export const DetailAddressIcon = styled.img`
  width: 44px;
  height: 44px;
  object-fit: contain;
`;
export const DetailAddress = styled.h2`
  font-family: 'SUITERegular';
  font-size: 16px;
  font-weight: 500;
  margin-right: 32px;
`;
export const DetailDateWrapper = styled.div`
  display: flex;
`;
export const DetailDate = styled.p`
  font-family: 'SUITERegular';
  font-size: 16px;
  color: #7d8bae;
  font-weight: 500;
  margin-right: 8px;
`;

export const DetailTime = styled.p`
  font-family: 'SUITERegular';
  font-size: 16px;
  color: #7d8bae;
  font-weight: 500;
`;
export const HeartIcon = styled(AiOutlineHeart)`
  font-size: 24px;
`;
export const DetailIntroduceArea = styled.div`
  margin: 64px 0 0;
  margin-bottom: 64px;
  padding: 20px 30px;
  background-color: #fafafa;
  display: flex;
`;
export const IntroImgWrapper = styled.span`
  font-family: 'SUITERegular';
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
  font-family: 'SUITERegular';
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
  font-family: 'SUITERegular';
  font-size: 20px;
  font-weight: 400;
`;
export const DetailLoactionWrapper = styled.div`
  margin-top: 332px;
`;

export const MapAddressTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;
export const DeatilLoactionTitle = styled.h1`
  font-family: 'SUITERegular';
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 12px;
  border-bottom: 2px solid #bec5d7;
  width: 100%;
  margin-bottom: 28px;
`;
export const DetailLoactionContainer = styled.div`
  /* padding: 0px 40px 0; */
`;
export const LoactionTitle = styled.p`
  font-family: 'SUITERegular';
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
`;
export const LoactionMap = styled.img`
  margin-top: 28px;
  width: 100%;
  height: 363px;
  border-radius: 4px;
`;
export const DetailAddressBox = styled.div`
  margin-left: 8px;
`;

// 배너, 썸네일

export const DetailIntroWapper = styled.div``;
export const BannereURL = styled.img`
  width: 1024px;
  height: 293px;
  left: 0px;
  top: 56px;

  background: #d1ddf5;
`;

export const Boxcontents = styled.div`
  position: absolute;
  width: 868px;
  height: 289px;
  margin-left: 78px;
  top: 280px;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid #ffffff;
  box-shadow: 0px 4px 7px rgba(190, 197, 215, 0.81);
  backdrop-filter: blur(5px);
  border-radius: 4px;
  /* display: flex; */
  /* height: 100%; */
  /* overflow: hidden; */
  @media screen and (max-width: 430px) {
    min-width: 480px;
  }
`;
export const BoxPhoto = styled.div`
  margin: 48px 0px 37px 27px;
  width: 183px;
  height: 204px;
  left: 102px;
  top: 328px;

  background: #eef1f7;
  border: 1px solid #ffffff;
  border-radius: 4px;
`;
export const FlexWrapper = styled.div`
  display: flex;
`;
export const ThunmnailURL = styled.img`
  margin: 10px 12px 0px 12px;
  width: 159px;
  height: 158px;
  left: 114px;
  top: 338px;
  border-radius: 4px;
  cursor: pointer;
`;

export const DetailUserName = styled.span`
  font-family: 'SUITERegular';
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin: 0 auto;
  margin-top: 8px;
  cursor: pointer;
`;
export const DetailIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 248px;
  top: 48px;
`;
export const IntroCategoryTitleBtn = styled.div`
  font-family: 'SUITERegular';
  width: fit-content;
  height: 38px;
  padding: 4px 10px;
  border-radius: 4px;
  align-items: center;
  text-align: center;
  color: white;
  background-color: rgba(125, 139, 174, 1);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  // 10px로하면 밑으로 내려간다
  left: 323px;
  top: 328px;
  /* background: #7d8bae; */
  border-radius: 4px;
  margin-bottom: 12px;
`;
export const IntroCategory = styled.span`
  font-family: 'SUITERegular';
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #ffffff;
`;
export const IntroTitle = styled.span`
  font-family: 'SUITERegular';
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;
  color: #24264e;
  margin-bottom: 8px;
`;
export const IntroHashTag = styled.span`
  font-family: 'SUITERegular';
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 10px 0px 0px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #7d8bae;
`;
export const IntroDes = styled.p`
  font-family: 'SUITERegular';
  margin-top: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #24264e;
  width: 80%;
`;
export const ShareBtn = styled.div`
  display: flex;
  position: absolute;
  width: 234px;
  height: 29px;
  bottom: 16px;
  right: 35px;
  justify-content: flex-end;
  align-items: center;
`;
export const LikeWrapper = styled.div`
  width: 56px;
  height: 29px;
  left: 698px;
  top: 524px;
  background: #ffe6e6;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  padding: 3px 5px;
`;
export const StyledHeartIcon = styled(AiOutlineHeart)`
  width: 20px;
  height: 18px;
  margin: 5.5px 0px 5.5px 5px;
`;
export const HeartBtn = styled.p`
  font-family: 'SUITERegular';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #24264e;
  margin-left: 10px;
`;
export const WalktogetherBtn = styled.div`
  display: flex;
  align-items: center;
  font-family: 'SUITERegular';
  width: 135px;
  height: 29px;
  margin-left: 20px;
  background: #eef1f7;
  border-radius: 4px;
  padding: 5px 7px;
  cursor: pointer;
`;
export const WalktogetherWrapper = styled.div`
  display: flex;
  align-items: center;
  /* font-family: 'SUITERegular';
  width: 135px;
  height: 29px;
  margin-left: 20px;
  background-color: #eef1f7;
  border-radius: 4px;
  padding: 0px 5px;
  cursor: pointer; */
`;
export const WalktogetherTitle = styled.p`
  font-family: 'SUITERegular';
  width: 135px;
  height: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #24264e;
`;
export const WalktogetherIcon = styled.img`
  width: 15px;
  height: 15px;
  object-fit: contain;
`;

export const SocialShareBtn = styled(FiShare)`
  width: 24px;
  height: 24px;
  color: black;
  margin-left: 20px;
`;
export const MoreBtn = styled(FiMoreVertical)`
  position: fixed;
  color: black;
  left: 820px;
  bottom: 220px;
`;
export const Loading = styled.div``;
export const PolaroidFolerIcon = styled.img`
  z-index: 1;
  /* left: 189px; */
  margin-left: 185px;
  top: 300px;
  position: absolute;
  width: 36.64px;
  height: 47px;
`;
export const DropdownButton = styled.div``;
export const LikeBtnLine = styled.img`
  width: 20px;
  height: 18px;
  object-fit: contain;
`;
export const LikeBtnFill = styled.img`
  width: 20px;
  height: 18px;
  object-fit: contain;
`;
export const DetailpageWrapper = styled.div`
  margin-left: 78px;
  margin-right: 78px;
`;
export const CompleteBtnTitle = styled.div`
  position: absolute;
  padding: 10px;
  font-family: 'SUITERegular';
  letter-spacing: -2.1px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  border: 1px solid #bec5d7;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 10px;
  color: #7d8bae;
  bottom: 185px;
`;
export const AddressIcon = styled.img`
  bottom: 7px;
  /* left: 520px; */
  width: 24px;
  height: 24px;
  object-fit: contain;
`;
