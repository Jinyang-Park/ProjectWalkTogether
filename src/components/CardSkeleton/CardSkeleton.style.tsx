import styled, { keyframes } from 'styled-components';

// export const CardSkeleton = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   grid-gap: 49.3px;
//   margin-top: 36px;
// `;
// export const CardImg = styled.div`
//   width: 100%;
//   object-fit: cover;
//   border-radius: 4px;
//   background-color: red;
// `;
// export const CardImgWarpper = styled.div``;
// export const CardTitleWrapper = styled.div``;
// export const CardTitle = styled.div`
//   width: 165px;
//   background-color: red;
// `;
// export const CardHashtagWapper = styled.div``;
// export const CardHashTag = styled.div`
//   width: 165px;
//   background-color: red;
// `;
// export const CardDesWrapper = styled.div``;
// export const CardDes = styled.div`
//   width: 165px;
//   background-color: red;
// `;
export const CardListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 49.3px;
  margin-top: 36px;
`;

const SkeletonLoadingAnimation = keyframes`
   0% {
    transform: translateX(-100%);
  }
  50%,
  100% {
    transform: translateX(100%);
  }
`;
export const CardSkeletonMap = styled.div`
  width: 180px;
  height: 96px;
  background-color: #f2f2f2;
  border-radius: 4px;
  /* margin-bottom: 35.66px;
  border-radius: 7px; */
  overflow: hidden;
  position: relative;
  @media (max-width: 820px) {
    width: 164px;
    height: 177px;
    margin-bottom: 0px;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${SkeletonLoadingAnimation} 1s infinite linear;
    @media (max-width: 820px) {
      width: 164px;
      height: 177px;
      margin-bottom: 0px;
    }
  }
`;
