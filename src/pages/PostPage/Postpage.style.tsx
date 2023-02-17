import styled from 'styled-components';

//가장바깥 배경
export const MainPost = styled.div`
  background-color: black;
`;

export const Boxcontainer = styled.div`
  /* justify-content: center; */
  /* align-items: center; */
  /* display: flex;
  flex-direction: column; */
  /* background-color: blue; */
  /* width: 100%; */
  /* width: 1024px; */
  height: calc(100vh - 100px);
`;

//제출 버튼
export const PostSubmitBox = styled.div`
  position: relative;
  width: 100%;
  height: 10%;
  background-color: aliceblue;
`;

export const PostSubmitBtn = styled.button`
  position: relative;
  left: 800px;
  width: 200px;
  height: 50px;
  font-weight: 700;
`;
