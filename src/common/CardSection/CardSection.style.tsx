import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';

export const LikedListItem = styled.div`
  width: 20vw;
  height: 20vw;
`;
export const ListItemWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  overflow: hidden;
`;
export const ListItemThumnail = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ListItemThumnailTitle = styled.p`
  height: 48px;
  margin: 30px 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #212121;
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

export const LikeBtnLine = styled(AiOutlineHeart)`
  margin-top: 4px;
  font-size: 24px;
  cursor: pointer;
`;
export const ListItemAddress = styled.p`
  font-size: 15px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: -0.18px;
  margin-top: 10px;
  margin-bottom: 5px;
`;
export const ListItemDate = styled.span`
  font-size: 15px;
  font-weight: 700;
  display: block;
`;
//
