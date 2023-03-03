import styled from 'styled-components';

const MypageTabbar = (props: {
  currentpage: string;
  setCurrentPage: (arg0: string) => void;
}) => {
  const { currentpage, setCurrentPage } = props;

  return (
    <TabbarWrap>
      <UserWriteBtn
        onClick={() => {
          setCurrentPage('Post');
        }}
        style={{
          fontWeight: currentpage === 'Post' ? 'bold' : 'normal',
        }}
      >
        내가 쓴 글
      </UserWriteBtn>
      <UserInterest
        onClick={() => {
          setCurrentPage('Interest');
        }}
        style={{
          fontWeight: currentpage === 'Interest' ? 'bold' : 'normal',
        }}
      >
        찜
      </UserInterest>
    </TabbarWrap>
  );
};
export default MypageTabbar;

const TabbarWrap = styled.div`
  width: 100%;
  border-bottom: 3px solid #cbcbcb;
  margin-bottom: 50px;

  margin-top: 50px;
`;

const UserWriteBtn = styled.button`
  width: 90px;
  height: 47px;
  margin-right: 13px;

  background: none;
`;
const UserInterest = styled.button`
  width: 38px;
  height: 47px;

  background: none;
`;
