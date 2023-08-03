import styled, { css } from 'styled-components';

//배너 상단 박스
export const Bannercontainer = styled.div``;

// 글쓰기 최상위 박스
export const Boxcontents = styled.div`
  position: relative;
  flex-direction: column;
  width: 868px;
  height: 289px;
  top: -67px;
  margin-left: 75px;
  display: flex;
  border-radius: 4px;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid #ffffff;
  box-shadow: 0px 4px 7px rgba(190, 197, 215, 0.81);
  backdrop-filter: blur(5px);
  @media screen and (max-width: 430px) {
    width: 390px;
    height: 141px;
    position: relative;
    right: 55px;
    /* margin: 0 auto; */
  }
`;

export const BoxMain = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 248px;
  top: 30px;
  width: 80%;
`;
export const ThumbnailImgPorlaroid = styled.img`
  width: 1024px;
  height: 293px;
  @media screen and (max-width: 430px) {
    width: 430px;
    height: 123px;
  }
`;
export const CalendarIcon = styled.img`
  width: 26px;
  height: 26px;
  top: 6px;
  margin-right: 10px;
  object-fit: contain;
  @media screen and (max-width: 430px) {
    width: 12px;
    height: 12px;
  }
`;
export const CategoryTitle = styled.p`
  width: auto;
  font-family: 'SUITERegular';
  font-size: 23px;
  justify-content: center;
  @media screen and (max-width: 430px) {
    position: relative;
    bottom: 1px;
    font-size: 10px;
    /* font-family: 'SUITERegular'; */
  }
`;
export const CateogryWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 4px 10px;
  width: fit-content;
  height: 38px;
  border-radius: 4px;
  align-items: center;
  text-align: center;
  color: white;
  background-color: rgba(125, 139, 174, 1);
  @media screen and (max-width: 430px) {
    width: 85px;
    height: 16px;
    position: relative;
    right: 130px;
    bottom: 16px;
    /* margin: 0 auto; */
  }
`;

//제목 입력하는 input
export const InputTitle = styled.input<{ isValidityTitle: boolean }>`
  outline: 1px soild red;
  height: 30px;
  width: 80%;
  margin-top: 8px;
  border-radius: 4px;
  background: none;
  padding: 2px 15px 0px;
  margin-bottom: 10px;
  background: #eef1f7;
  border-radius: 4px;
  font-family: 'SUITERegular';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  &:focus {
    outline: 2px solid #7d8bae;
  }

  ${({ isValidityTitle }) =>
    isValidityTitle === true
      ? css`
          outline: 2px solid #ff8f8f;
        `
      : css``}

  &::placeholder {
    font-family: 'SUIT';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #7d8bae;
  }

  @media screen and (max-width: 430px) {
    width: 217px;
    height: 16px;
    position: relative;
    bottom: 19px;
    right: 132px;
    font-size: 10px;
  }
`;

// 글쓰기 textarea
export const Textarea = styled.textarea<{ isValidityContents: boolean }>`
  position: relative;
  width: 80%;
  height: 73px;
  border-radius: 4px;
  overflow: hidden;
  overflow-wrap: break-word;
  border: none;
  padding: 8px 15px 9px;
  font-family: 'SUITERegular';
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #24264e;
  &:focus {
    outline: 2px solid #7d8bae;
  }
  background: #eef1f7;
  border-radius: 4px;

  ${({ isValidityContents }) =>
    isValidityContents &&
    css`
      outline: 2px solid #ff8f8f;
    `}

  &::placeholder {
    font-family: 'SUIT';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #7d8bae;
  }
  overflow: auto;
  resize: none;
  @media screen and (max-width: 430px) {
    width: 230px;
    height: 33px;
    position: relative;
    right: 132px;
    bottom: 28px;
    overflow-y: hidden;
  }
`;

// 이미지 컨테이너
export const BoxPhoto = styled.div`
  margin: 48px 0px 31px 27px;
  width: 183px;
  height: 204px;
  left: 102px;
  top: 328px;
  background: #eef1f7;
  border: 1px solid #ffffff;
  border-radius: 4px;
  @media screen and (max-width: 430px) {
    width: 82px;
    height: 91px;
    position: relative;
    top: 0px;
    left: -135px;
    margin: auto;
  }
`;

//섬네일이미지
export const ThumnailPhotoChange = styled.img`
  cursor: pointer;
  width: 159px;
  height: 166px;
  margin-left: 12px;
  margin-top: 10px;
  border-radius: 4px;
  @media screen and (max-width: 430px) {
    width: 71.25px;
    height: 70.8px;
    margin: auto;
    z-index: 2;
  }
`;

export const Sticker = styled.img`
  z-index: 1;
  margin-left: 185px;
  top: 300px;
  position: absolute;
  width: 36.64px;
  height: 47px;
  @media screen and (max-width: 430px) {
    width: 16.41px;
    height: 21.06px;
    position: relative;
    top: -32px;
    right: 110px;
  }
`;

export const ThumnailPhoto = styled.input`
  position: relative;
  left: 10%;
  top: 5%;
  background-color: crimson;
`;

//배너 이미지
export const BannerPhoto = styled.input`
  position: relative;
  left: 10%;
  top: 5%;
  background-color: crimson;
`;

export const BannerPhotoChange = styled.img`
  cursor: pointer;
  width: 1024px;
  height: 500px;
`;
export const DropdownButton = styled.div``;
