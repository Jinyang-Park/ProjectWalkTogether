import styled from '@emotion/styled';
import Slider from 'react-slick';

export const SliderWrapper = styled(Slider)`
  width: 100%;
  height: 432px;

  .slick-slide {
    position: relative;
    width: 100%;
    height: 432px;
  }
  .slick-dots {
    position: absolute;
    bottom: 0;
    color: #d7d7d7;
    top: 280px;
    right: 335px;
    margin-right: 20px;

    li {
      width: 0.8px;
      height: 1.6px;
      margin: 0 7.2px;
    }
    button {
      margin: 5px;

      width: 4.8px;
      height: 4.8px;
      border-radius: 50%;
      background: '#CED3DB';
      &::after {
        background-color: #4d4d4d;
      }
    }
    .slick-active {
      button {
        background: '#d7d3ff';
        width: 4.8px;
        height: 4.8px;
      }
    }

    @media screen and (max-width: 430px) {
      min-width: 430px;
      height: 207.44px;
    }
  }
`;
export const SlideWrapper = styled.div`
  width: 100%;
  height: 432px;
  overflow: hidden;
  @media screen and (max-width: 430px) {
    min-width: 430px;
    height: 207.44px;
  }
`;
export const BannerContainer = styled.div`
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  position: relative;
`;
export const BannerTextBox = styled.div`
  position: absolute;
  width: 644px;
  height: 205px;
  left: 146px;
  z-index: 13px;
  @media screen and (max-width: 430px) {
    font-size: 28px;
  }
`;

export const BannerTitle = styled.div`
  flex-wrap: wrap;
  width: 804px;
  height: 68px;
  font-weight: 300;
  font-size: 36px;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: '#333D4B';
  margin-bottom: 25px;
  z-index: 10;
  position: relative;
  top: 150px;
  @media screen and (max-width: 430px) {
    font-size: 28px;
    position: absolute;
    right: -50px;
    top: 40px;
  }
`;
export const BannerSubTitle = styled.div`
  width: 567px;
  height: 64px;
  font-weight: 600;
  font-size: 36px;
  line-height: 160%;
  color: '#333D4B';
  @media screen and (max-width: 430px) {
    font-size: 28px;
    position: absolute;
    left: 0px;
    top: 60px;
  }
`;
export const BannerFirstImg = styled.img`
  position: absolute;
  width: 1024px;
  height: 432px;
  @media screen and (max-width: 430px) {
    width: 430px;
    height: 207.44px;
  }

  /* background-image: ; */
`;
export const BannerSecondImg = styled.img`
  position: absolute;
  width: 1024px;
  height: 432px;
  @media screen and (max-width: 430px) {
    width: 430px;
    height: 207.44px;
  }
`;
