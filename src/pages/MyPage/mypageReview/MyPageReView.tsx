import * as S from './MyPageReview.style';

interface infotype {
  option: string;
  count: number;
}

const MyPageReView = (props: {
  userInfo: { review: infotype[]; reviewcount: number };
}) => {
  const userInfomation = props.userInfo;
  if (!userInfomation) return;
  const userReview: infotype[] = userInfomation.review;
  const userReviewCount = userInfomation.reviewcount;


  return (
    <S.MyPageReViewWrap>
      <S.MyPageReViewText>
        총 {userReviewCount}건의 후기를 받으셨어요.
      </S.MyPageReViewText>

      <S.MyPageReViewListContainer>
        {userReview.map((item, id) => {
          return (
            <S.ReViewCard key={id}>
              <S.UserEvaluationImg
                src={require('../../../assets/MypageIcon/Avatar.svg').default}
              />
              <S.UserEvaluationScore>{item.count}</S.UserEvaluationScore>
              <S.UserEvaluationText>{item.option}</S.UserEvaluationText>
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
