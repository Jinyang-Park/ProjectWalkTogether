import styled from '@emotion/styled';

//배너 상단 박스
export const Bannercontainer = styled.div`
  /* display: flex;
  background-color: #0000ff19;
  width: 100%;
  height: 379px; */
`;

// 글쓰기 최상위 박스
export const Boxcontents = styled.div`
  position: relative;
  flex-direction: column;
  width: 868px;
  height: 289px;
  top: -67px;
  /* bottom: 200px; */
  margin-left: 75px;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  /* align-items: center; */
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid #ffffff;
  box-shadow: 0px 4px 7px rgba(190, 197, 215, 0.81);
  backdrop-filter: blur(5px);

  @media screen and (max-width: 868px) {
  }
`;

export const BoxMain = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 248px;
  top: 48px;
  /* margin-top: 30px;
  margin-left: 62px; */
  width: 80%;
  /* height: 229px; */
`;
export const ThumbnailImgPorlaroid = styled.img`
  width: 1024px;
  height: 293px;
  /* margin: 5px 35px 20px 24px; */
  /* margin-bottom: 20px; */
`;
export const CalendarIcon = styled.img`
  position: absolute;
  width: 26px;
  height: 26px;
  top: 52px;
  margin-left: 6px;
  object-fit: contain;
`;
export const CategoryTitle = styled.div`
  font-size: 23px;
  /* padding: 0px 0px 0px 30px; */
  justify-content: center;
`;
export const CateogryWrapper = styled.div`
  width: fit-content;
  height: 38px;
  padding: 4px 10px;
  border-radius: 4px;
  align-items: center;
  text-align: center;
  color: white;
  background-color: rgba(125, 139, 174, 1);
  display: flex;
`;

//제목 입력하는 input
export const InputTitle = styled.input`
  border: none;
  height: 30px;
  width: 80%;
  margin-top: 8px;
  border-radius: 4px;
  background: none;
  border: none;
  padding: 2px 15px 0px;
  margin-bottom: 10px;
  background: #eef1f7;
  border-radius: 4px;

  &:focus {
    outline: 2px solid #6a24ff;
  }
`;

//해쉬태그 박스

// 글쓰기 textarea
export const Textarea = styled.textarea`
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
  font-size: 12px;
  line-height: 21px;

  color: #24264e;

  &::placeholder {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #24264e;
  }

  overflow: auto;
  /* transition: border-color 0.1s, background-color 0.1s; */
  resize: none;
  /* border: 1px solid #3d3a3a; */
  &:focus {
    outline: 2px solid #6a24ff;
  }
  background: #eef1f7;
  border-radius: 4px;
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
`;

// export const BoxPhotoPolaroid = styled.div``;

//섬네일이미지
export const ThumnailPhotoChange = styled.img`
  cursor: pointer;
  width: 159px;
  height: 166px;
  margin-left: 12px;
  margin-top: 10px;
  border-radius: 4px;
`;

export const Sticker = styled.img`
  z-index: 1;
  /* left: 189px; */
  margin-left: 185px;
  top: 300px;
  position: absolute;
  width: 36.64px;
  height: 47px;
`;

export const ThumnailPhoto = styled.input`
  width: 80%;
  height: 80%;
  position: relative;
  left: 10%;
  top: 5%;
  background-color: crimson;
`;

//배너 이미지
export const BannerPhoto = styled.input`
  width: 80%;
  height: 80%;
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
