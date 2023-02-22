import styled from 'styled-components';

const MyPageBanner = () => {
  return (
    <BannerWrap>
      <BannerImg />
      <BannerImgLabel htmlFor='bannerInput'>
        <BannerImgBtn src={'/assets/editicon.png'} />
      </BannerImgLabel>
      <BannerImgInput type='file' id='bannerInput' />
    </BannerWrap>
  );
};
export default MyPageBanner;

const BannerWrap = styled.div`
  width: 100%;
  height: 293px;

  position: relative;
`;
const BannerImg = styled.img`
  width: 100%;
  height: 100%;

  background: #d1ddf5;
`;
const BannerImgLabel = styled.label``;
const BannerImgBtn = styled.img`
  width: 50px;
  height: 50px;
  right: 40px;
  bottom: 10px;

  cursor: pointer;

  border-radius: 50%;
  position: absolute;
`;
const BannerImgInput = styled.input`
  display: none;
`;
