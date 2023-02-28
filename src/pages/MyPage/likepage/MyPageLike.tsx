import styled from 'styled-components';

const MyPageLike = (props: { uid: string }) => {
  return (
    <MyPageWriteWrap>
      <MyPageWriteTapContainer>likepost</MyPageWriteTapContainer>
      <div></div>
    </MyPageWriteWrap>
  );
};
export default MyPageLike;

const MyPageWriteWrap = styled.div`
  width: 868px;
  height: 735px;
  margin: 0 auto 0 95px;
`;
const MyPageWriteTapContainer = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 40px;

  border-bottom: 3px solid #cbcbcb;
`;
