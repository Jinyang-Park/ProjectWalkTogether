import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';

export const CardBox = styled.div`
  width: 180px;
  height: 207px;
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
  /* height: 48px; */
  /* width: 200px; */
  margin: 8px 0px 0px 0px;
  /* overflow: hidden; */
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.97px;
  letter-spacing: normal;
  color: #212121;
`;
export const HashTag = styled.p`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px 0px 8px 0px;
  gap: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`;
export const ListItemContainer = styled.div`
  border-top: 1px solid #ddd;
  padding-top: 5px;
`;
export const LikedHeartFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LikeBtnLine = styled.img`
  position: absolute;
  width: 25px;
  height: 20px;
  margin-left: 9rem;
  margin-top: 30px;
  cursor: pointer;
`;
export const LikeBtnFill = styled.img`
  position: absolute;
  width: 25px;
  height: 20px;
  margin-left: 9rem;
  margin-top: 30px;
  cursor: pointer;
  object-fit: contain;
`;
export const ListItemAddress = styled.p`
  margin-top: 5px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;
export const ListItemDate = styled.span`
  margin-top: 2px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;
