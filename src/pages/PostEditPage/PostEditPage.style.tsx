import styled from 'styled-components';

//가장바깥 배경
export const MainPost = styled.div`
  background-color: black;
`;

export const Boxcontainer = styled.div`
  margin-bottom: 100px;
  /* height: calc(100vh - 500px); */
`;

//제출 버튼
export const PostSubmitBox = styled.div`
  margin-top: -115px;
  /* background-color: aliceblue; */
`;

export const PostSubmitBtn = styled.button`
  position: relative;
  left: 726px;
  width: 218px;
  height: 42px;
  font-weight: 700;
  border-radius: 4px;
  /* margin-top: 64px; */

  background-color: rgba(125, 139, 174, 1);
  color: white;
`;
