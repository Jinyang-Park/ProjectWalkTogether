import * as S from './MypageTabbar.style';

const MypageTabbar = (props: {
  currentpage: string;
  setCurrentPage: (arg0: string) => void;
}) => {
  const { currentpage, setCurrentPage } = props;

  return (
    <S.TabbarWrap>
      <S.UserWriteBtn
        onClick={() => {
          setCurrentPage('Post');
        }}
        style={{
          color: currentpage === 'Post' ? '#000' : '#CBCBCB',
          borderBottom: '2px solid #CBCBCB',
          borderBottomColor: currentpage === 'Post' ? '#000' : '#CBCBCB',
        }}
      >
        내가 쓴 글
      </S.UserWriteBtn>
      <S.UserInterest
        onClick={() => {
          setCurrentPage('Interest');
        }}
        style={{
          borderBottom: '2px solid #CBCBCB',
          // marginBottom: '-10px',
          color: currentpage === 'Interest' ? '#000' : '#CBCBCB',
          borderBottomColor: currentpage === 'Interest' ? '#000' : '#CBCBCB',
        }}
      >
        찜
      </S.UserInterest>
    </S.TabbarWrap>
  );
};
export default MypageTabbar;
