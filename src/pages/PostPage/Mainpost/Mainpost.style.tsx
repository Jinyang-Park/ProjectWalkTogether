import styled from '@emotion/styled';

//배너 상단 박스
export const Bannercontainer = styled.div`
  display: flex;
  background-color: #0000ff19;
  width: 100%;
  height: 500px;
`;

// 글쓰기 최상위 박스
export const Boxcontents = styled.div`
  background-color: #808080;
  position: relative;
  flex-direction: column;
  width: 65%;
  height: 350px;
  left: 17.5%;
  bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 868px) {
  }
`;

export const BoxMain = styled.div`
  width: 65%;
  height: 250px;
  position: relative;
  right: 30px;
  background-color: blanchedalmond;
`;
export const BoxPhoto = styled.div`
  width: 25%;
  height: 250px;
  background-color: yellow;
`;

export const Photo = styled.input`
  width: 80%;
  height: 80%;
  position: relative;
  left: 10%;
  top: 5%;
  background-color: crimson;
`;

//input태그를 감싸는 div
export const TittleBox = styled.div`
  margin: 10px;
  height: 50px;
  width: 80%;

  /* background-color: aqua; */
`;

//제목 입력하는 input
export const InputTitle = styled.input`
  border: none;
  height: 50px;
  width: 100%;
  margin-top: 10px;
`;

//해쉬태그 박스
export const HashtagBox = styled.div`
  height: 50px;
  width: 80%;
  background-color: darkgray;
  margin-top: 5px;
  /* position: relative;
    bottom: 40px; */
`;

//글쓰기 박스
export const WriteBox = styled.div`
  width: 80%;
  height: 40%;
  background-color: white;
  /* position: relative; */
  bottom: 40px;
  border: 1px solid black;
  border-radius: 15px;
`;

// 글쓰기 textarea
export const Textarea = styled.textarea`
  resize: none;
  outline: none;
  border: none;
  position: relative;
  left: 25px;
  margin-top: 5px;
  width: 90%;
  height: 95%;
  border-radius: 15px;
  font-size: 30px;
`;
