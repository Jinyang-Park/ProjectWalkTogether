import * as S from './MyPageReview.style';

const MyPageReView = () => {
  const a = [1, 2, 3];
  return (
    <S.MyPageReViewWrap>
      <S.MyPageReViewText>총 {20}건의 후기를 받으셨어요.</S.MyPageReViewText>

      <S.MyPageReViewListContainer>
        {a.map((el) => {
          return (
            <S.ReViewCard>
              <S.UserEvaluationImg />
              <S.UserEvaluationScore>{7}</S.UserEvaluationScore>
              <S.UserEvaluationText>
                친절하고 매너가 좋아요!
              </S.UserEvaluationText>
            </S.ReViewCard>
          );
        })}
        {/* <ReViewCard>
          <UserEvaluationImg />
          <UserEvaluationScore>{7}</UserEvaluationScore>
          <UserEvaluationText>친절하고 매너가 좋아요!</UserEvaluationText>
        </ReViewCard> */}
      </S.MyPageReViewListContainer>
    </S.MyPageReViewWrap>
  );
};
export default MyPageReView;
