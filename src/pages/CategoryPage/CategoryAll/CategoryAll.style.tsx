import styled from 'styled-components';
import { LIGHT_BROWN } from '../../../assets/constants/colors';

export const CategoryWrapper = styled.div`
  display: flex;
  grid-gap: 0.75rem 0;
  gap: 1rem 0;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
export const Categoryitem = styled.div`
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* grid-gap: 0.125rem; */
  gap: 0.7rem;
  /* margin-left: 1rem; */
  width: 10rem;
`;
export const Img = styled.img`
  width: 5.25rem;
  height: 5.25rem;
  border-radius: 50%;
`;

export const ImgTitle = styled.p`
  color: ${LIGHT_BROWN};
  font-weight: 700;
`;
