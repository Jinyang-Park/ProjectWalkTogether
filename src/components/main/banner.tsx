import Slider from 'react-slick';
import styled from '@emotion/styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import BannerImage from '../assets/SlideContainer/BannerSlide.png';
import Banner from '../../assets/Mainpage/Bannerslides.svg';
import Slide from '../../assets/Mainpage/slides.svg';
const settings = {
  arrows: true,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

const MainBanner = () => {
  return (
    <SliderWrapper {...settings}>
      <SlideWrapper>
        <BannerContainer>
          <BannerTextBox>
            <BannerTitle>
              일상에서 함께하는 <br />
              <BannerSubTitle>나의 이야기</BannerSubTitle>
            </BannerTitle>
          </BannerTextBox>
          <BannerFirstImg src={Banner} />
        </BannerContainer>
      </SlideWrapper>
      <SlideWrapper>
        <BannerContainer>
          <BannerTextBox>
            <BannerTitle>
              걸으면서 공유하는 <br />
              <BannerSubTitle>나의 이야기</BannerSubTitle>
            </BannerTitle>
          </BannerTextBox>
          <BannerSecondImg src={Slide} />
        </BannerContainer>
      </SlideWrapper>
    </SliderWrapper>
  );
};

export default MainBanner;
const SliderWrapper = styled(Slider)`
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
  }
`;
const SlideWrapper = styled.div`
  width: 100%;
  height: 432px;
  overflow: hidden;
`;
const BannerContainer = styled.div`
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  position: relative;
`;
const BannerTextBox = styled.div`
  position: absolute;
  width: 644px;
  height: 205px;
  left: 146px;
  z-index: 13px;
`;

const BannerTitle = styled.div`
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
`;
const BannerSubTitle = styled.div`
  width: 567px;
  height: 64px;
  font-weight: 600;
  font-size: 36px;
  line-height: 160%;
  color: '#333D4B';
`;
const BannerFirstImg = styled.img`
  position: absolute;
  width: 1024px;
  height: 432px;

  /* background-image: ; */
`;
const BannerSecondImg = styled.img`
  position: absolute;
  width: 1024px;
  height: 432px;
`;
