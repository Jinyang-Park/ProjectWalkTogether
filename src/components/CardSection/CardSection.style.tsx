import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';

export const CardBox = styled.div`
  width: 180px;
  height: 207px;
  margin-bottom: 70px;
`;
export const CardSectionWrapper = styled.div`
  cursor: pointer;
  /* width: 180px;
  height: 207px; */
`;
export const ListItemWrapper = styled.div`
  /* position: relative; */
  /* overflow: hidden; */
  width: 180px;
  height: 96px;
`;
export const ListItemThumnail = styled.img`
  /* width: 100%;
  height: 100%; */
  object-fit: cover;
  border-radius: 4px;
`;
export const ListItemThumnailTitle = styled.p`
  width: 165px;
  margin: 8px 0px 0px 0px;
  /* overflow: hidden; */
  object-fit: contain;
  font-size: 16px;
  font-family: 'SUITERegular';
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -2px;
  color: #212121;
`;
export const HashTag = styled.p`
  font-family: 'SUITERegular';
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px 0px 8px 0px;
  gap: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 21px;
`;
export const ListItemContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid #ddd;
  padding-top: 8px;
`;
export const LikedHeartFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LikeBtnLine = styled.img`
  width: 25px;
  height: 20px;
  margin-left: 9rem;
  margin-top: 30px;
  cursor: pointer;
`;
export const LikeBtnFill = styled.img`
  width: 25px;
  height: 20px;
  margin-left: 9rem;
  margin-top: 30px;
  cursor: pointer;
  object-fit: contain;
`;
export const ListItemAddress = styled.p`
  font-family: 'SUITERegular';
  /* margin-top: 5px; */
  font-weight: 400;
  letter-spacing: -0.1px;
  font-size: 12px;
  line-height: 15px;
`;
export const ListItemDate = styled.span`
  font-family: 'SUITERegular';
  letter-spacing: -0.1px;
  margin-top: 2px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  margin-right: 3px;
`;
export const ListItemHour = styled.span`
  font-family: 'SUITERegular';
  letter-spacing: -0.1px;
  margin-top: 2px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;
