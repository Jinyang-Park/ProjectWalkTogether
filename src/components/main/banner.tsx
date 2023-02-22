import Slider from 'react-slick';
import styled from '@emotion/styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
          <BannerFirstImg src="/assets/slide01.png" />
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
          <BannerSecondImg src="/assets/slide01.png" />
        </BannerContainer>
      </SlideWrapper>
    </SliderWrapper>
  );
};

export default MainBanner;
const SliderWrapper = styled(Slider)`
  width: 100%;
  height: 20.625rem;
  .slick-slide {
    position: relative;
    width: 100%;
    height: 20.625rem;
  }
  .slick-dots {
    position: absolute;
    bottom: 0;
    color: #d7d7d7;
    top: 200px;
    right: 340px;
    margin-right: 20px;

    li {
      width: 0.05rem;
      height: 0.1rem;
      margin: 0 0.45rem;
    }
    button {
      margin: 5px;

      width: 0.3rem;
      height: 0.3rem;
      border-radius: 50%;
      background: '#CED3DB';
      &::after {
        background-color: #4d4d4d;
      }
    }
    .slick-active {
      button {
        background: '#d7d3ff';
        width: 0.3rem;
        height: 0.3rem;
      }
    }
  }
`;
const SlideWrapper = styled.div`
  width: 100%;
  height: 27rem;
  overflow: hidden;
`;
const BannerContainer = styled.div`
  width: 64rem;
  height: 100%;
  margin: 0 auto;
  position: relative;
`;
const BannerTextBox = styled.div`
  position: absolute;
  background-color: orange;
  width: 40.25rem;
  height: 12.8125rem;
  left: 9.125rem;
  z-index: 13px;
`;

const BannerTitle = styled.div`
  flex-wrap: wrap;
  width: 50.25rem;
  height: 4.25rem;
  font-weight: 300;
  font-size: 2.25rem;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: '#333D4B';
  margin-bottom: 1.5625rem;
  z-index: 10;
  position: relative;
  top: 80px;
`;
const BannerSubTitle = styled.div`
  width: 35.4375rem;
  height: 4rem;
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 160%;
  color: '#333D4B';
`;
const BannerFirstImg = styled.img`
  position: absolute;
  width: 64rem;
  height: 27rem;
`;
const BannerSecondImg = styled.img`
  position: absolute;
  width: 64rem;
  height: 27rem;
`;
