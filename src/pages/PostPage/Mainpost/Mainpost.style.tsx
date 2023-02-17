import styled from '@emotion/styled';

//배너 상단 박스
export const Bannercontainer = styled.div`
  display: flex;
  background-color: #0000ff19;
  width: 100%;
  height: 379px;
`;

// 글쓰기 최상위 박스
export const Boxcontents = styled.div`
  background-color: #cccccc;
  position: relative;
  flex-direction: column;
  width: 868px;
  height: 289px;
  bottom: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-wrap: wrap;
  @media screen and (max-width: 868px) {
  }
`;

export const BoxMain = styled.div`
  margin-top: 30px;
  margin-left: 62px;
  width: 80%;
  height: 229px;
`;
export const ThumbnailImgPorlaroid = styled.img`
  width: 1024px;
  height: 379px;
  /* margin: 5px 35px 20px 24px; */
  /* margin-bottom: 20px; */
`;
export const CalendarIcon = styled.img`
  position: absolute;
  width: 26px;
  height: 26px;
  top: 52px;
  margin-left: 6px;
`;
export const CategoryTitle = styled.div`
  font-size: 23px;
  padding: 0px 0px 0px 30px;
  justify-content: center;
`;
export const CateogryWrapper = styled.div`
  width: 183px;
  height: 38px;
  border-radius: 4px;
  align-items: center;
  text-align: center;
  color: white;
  background-color: #a7a7a7;
`;

//제목 입력하는 input
export const InputTitle = styled.input`
  border: none;
  height: 30px;
  width: 80%;
  margin-top: 10px;
  border-radius: 4px;
  background: none;
  border: 1px solid #3d3a3a;
  padding: 2px 15px 0px;
  margin-bottom: 10px;
  &:focus {
    outline: 2px solid #6a24ff;
  }
`;

//해쉬태그 박스
export const HashtagBox = styled.div`
  /* background-color: darkgray; */
  margin-top: -4px;
  /* margin-bottom: 8px; */
  font-size: 16px;
`;

// 글쓰기 textarea
export const Textarea = styled.textarea`
  position: relative;
  width: 80%;
  height: 80px;
  border-radius: 4px;
  overflow: hidden;
  overflow-wrap: break-word;
  background: none;
  padding: 8px 15px 9px;
  font-family: sans-serif;
  font-size: 15px;
  line-height: 21px;
  /* transition: border-color 0.1s, background-color 0.1s; */
  resize: none;
  border: 1px solid #3d3a3a;

  &:focus {
    outline: 2px solid #6a24ff;
  }
`;

// 이미지 컨테이너
export const BoxPhoto = styled.div`
  width: 183px;
  height: 205px;
  margin-top: 8px;
  position: relative;
  left: 24px;
  background-color: white;
  border-radius: 4px;
`;

// export const BoxPhotoPolaroid = styled.div``;

//섬네일이미지
export const ThumnailPhotoChange = styled.img`
  cursor: pointer;
  width: 159px;
  height: 158px;
  margin-left: 12px;
  margin-top: 10px;
  border-radius: 4px;
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
