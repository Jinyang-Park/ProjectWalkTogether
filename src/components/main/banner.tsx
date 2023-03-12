import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from '../../assets/Mainpage/Bannerslides.svg';
import Slide from '../../assets/Mainpage/slides.svg';
import * as S from './banner.style';
type SliderProps = {
  arrows: boolean;
  dots: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
};

const settings: SliderProps = {
  arrows: true,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

const MainBanner: React.FC = () => {
  return (
    <S.SliderWrapper {...settings}>
      <S.SlideWrapper>
        <S.BannerContainer>
          <S.BannerTextBox>
            <S.BannerTitle>
              일상에서 함께하는 <br />
              <S.BannerSubTitle>나의 이야기</S.BannerSubTitle>
            </S.BannerTitle>
          </S.BannerTextBox>
          <S.BannerFirstImg src={Banner} />
        </S.BannerContainer>
      </S.SlideWrapper>
      <S.SlideWrapper>
        <S.BannerContainer>
          <S.BannerTextBox>
            <S.BannerTitle>
              걸으면서 공유하는 <br />
              <S.BannerSubTitle>나의 이야기</S.BannerSubTitle>
            </S.BannerTitle>
          </S.BannerTextBox>
          <S.BannerSecondImg src={Slide} />
        </S.BannerContainer>
      </S.SlideWrapper>
    </S.SliderWrapper>
  );
};

export default MainBanner;
