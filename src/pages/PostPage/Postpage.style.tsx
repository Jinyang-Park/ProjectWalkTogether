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
  /* height: calc(100vh - 100px); */
  margin-bottom: 100px;
`;

//제출 버튼
export const PostSubmitBox = styled.div`
  margin-top: -50px;
  /* background-color: aliceblue; */
`;

export const PostSubmitBtn = styled.button`
  position: relative;
  left: 726px;
  width: 218px;
  height: 42px;
  font-weight: 700;
  border-radius: 4px;

  background-color: rgba(125, 139, 174, 1);
  color: white;
`;
