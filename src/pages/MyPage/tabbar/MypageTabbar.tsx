import styled from 'styled-components';

const MypageTabbar = (props: {
  currentpage: string;
  setCurrentPage: (arg0: string) => void;
}) => {
  const { currentpage, setCurrentPage } = props;

  return (
    <>
      <UserWriteBtn
        onClick={() => {
          setCurrentPage('Post');
        }}
      >
        내가 쓴 글
      </UserWriteBtn>
      <UserInterest
        onClick={() => {
          setCurrentPage('Interest');
        }}
      >
        찜
      </UserInterest>
    </>
  );
};
export default MypageTabbar;

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
