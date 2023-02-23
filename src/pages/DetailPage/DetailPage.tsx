import * as S from './DetailPage.style';
import Comments from './Comments/Comments';
import CommonStyles from './../../styles/CommonStyles';
import DetailMap from './DetailMap/DetailMap';
import { useRecoilState, useRecoilValue } from 'recoil';
import { paramsState } from '../../Rocoil/Atom';
import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { authService, dbService } from './../../common/firebase';
import { useParams } from 'react-router-dom';
import { assert } from 'console';
import DropdownCategory from '../../components/DropdownCategoryForWritePage/DropdownCategory';
import DropBox from './DropBox/DropBox';

interface getPostings {
  BannereURL_Posting: string;
  Category_Posting: string;
  Description_Posting: string;
  Nickname: string;
  ThunmnailURL_Posting: string;
  Title_Posting: string;
  UID: string;
  children: JSX.Element | JSX.Element[];
}

const DetailPage = () => {
  // 아톰은 새로고침하면 초기화가 된다. 앱이 랜더링이 된다.
  // 리코일은 리덕스와 같아서 새로고침하면 날라간다.
  // const params = useRecoilValue(paramsState);

  // useParams를 사용하여 구조 분해 할당을 하여 사용함
  const { id } = useParams();
  // console.log(id);

  const [getPostings, setGetPostings] = useState<any>({});
  const [showBox, setShowBox] = useState<any>(false);

  // getPost 함수에서 비동기로 데이터를 가져오기 때문에 isLoading을 사용하여 로딩중인지 아닌지를 확인
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getPost = async () => {
    const q = doc(dbService, 'Post', id);
    const postData = await getDoc(q);
    //비동기
    setGetPostings(postData.data());

    // isLoading 이 false가 되면 로딩이 끝난 것, true면 로딩중으로 isLoading을 관리
    setIsLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getPost();
  }, []);

  // console.log(getPostings);
  // getPostings 콘솔로그 찍어보면 post에 해당된 db확인 가능
  // console.log(getPostings.UID);
  console.log(getPostings);
  console.log(authService.currentUser);
  return (
    <>
      <CommonStyles>
        <S.DetailIntroWapper>
          <S.BannereURL src={getPostings.BannereURL_Posting} />
        </S.DetailIntroWapper>
        <S.Boxcontents>
          <S.BoxPhoto>
            {/*썸네일*/}
            <S.ThunmnailURL src={getPostings.ThunmnailURL_Posting} />
            <S.DetailUserName>{getPostings.Nickname}</S.DetailUserName>
            {/*인트로영역*/}
            <S.DetailIntroWrapper>
              <S.IntroCategoryTitleBtn>
                <S.IntroCategory>
                  {getPostings.Category_Posting}
                </S.IntroCategory>
              </S.IntroCategoryTitleBtn>
              <S.IntroTitle>{getPostings.Title_Posting}</S.IntroTitle>
              <S.IntroHashTag></S.IntroHashTag>
              <S.IntroDes>{getPostings.Description_Posting}</S.IntroDes>
            </S.DetailIntroWrapper>
            <S.ShareBtn>
              <S.LikeWrapper>
                {/*svg로 갈아끼워야함(StyledHeartIcon)*/}
                <S.StyledHeartIcon />
                <S.HeartBtn>5</S.HeartBtn>
              </S.LikeWrapper>
              {/* 현재 user가 쓴 글인지 판별 */}
              {getPostings.UID !== authService.currentUser?.uid ? (
                <S.WalktogetherBtn>
                  <S.WalktogetherTitle>함께 걸을래요</S.WalktogetherTitle>
                </S.WalktogetherBtn>
              ) : (
                <S.MoreBtn
                  onClick={() => {
                    setShowBox(true);
                  }}
                />
              )}
              {/*post.id인 id를 DropBox로 넘겨준다*/}

              {showBox && (
                <DropBox
                  setShowBox={setShowBox}
                  id={id}
                  getPostings={getPostings}
                />
              )}
              {/*svg로 갈아끼워야함(SocialShareBtn)*/}
              <S.SocialShareBtn />
              {/*svg로 갈아끼워야함(ShareBtn)*/}
            </S.ShareBtn>
          </S.BoxPhoto>
        </S.Boxcontents>
        {/*장소*/}
        <S.DetailLoactionWrapper>
          <S.DeatilLoactionTitle>장소는 이 곳이에요</S.DeatilLoactionTitle>
          <S.DetailLoactionContainer>
            {/*  지도 들어오는 위치에요 */}
            {/* isLoading 이 True 이면, Loading... 출력, False면 DetailMap 컴포넌트를 렌더링 한다. */}
            {isLoading ? ( // isLoading이 true면
              <S.Loading>로딩중...</S.Loading>
            ) : (
              // isLoading이 false면
              <DetailMap getPostings={getPostings} />
            )}

            <S.DetailAddressContainer>
              <S.DetailAddressIcon />
              <S.DetailAddressBox>
                <S.DetailAddress>{getPostings.Address_Posting}</S.DetailAddress>
                <S.DetailDateWrapper>
                  <S.DetailDate>{getPostings.RsvDate_Posting}</S.DetailDate>
                  <S.DetailTime>{getPostings.RsvHour_Posting}</S.DetailTime>
                </S.DetailDateWrapper>
              </S.DetailAddressBox>
            </S.DetailAddressContainer>
          </S.DetailLoactionContainer>
        </S.DetailLoactionWrapper>
        {/* 댓글 */}
        <Comments param={id} />
      </CommonStyles>
    </>
  );
};

export default DetailPage;
