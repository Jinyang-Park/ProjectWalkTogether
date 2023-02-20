import * as S from './DetailPage.style';
import Comments from './Comments/Comments';
import CommonStyles from './../../styles/CommonStyles';
import { useRecoilState, useRecoilValue } from 'recoil';
import { paramsState } from './../PostPage/Hooks/Rocoil/Atom';
import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { dbService } from './../../common/firebase';
import { useParams } from 'react-router-dom';
import { assert } from 'console';

const DetailPage = () => {
  // post.id를 가져오는 부분(댓글과 똑같이 가져옴)

  // 아톰은 새로고침하면 초기화가 된다. 앱이 랜더링이 된다.
  // 리코일은 리덕스와 같아서 새로고침하면 날라간다.

  // const params = useRecoilValue(paramsState);

  // useParams를 사용하여 구조 분해 할당을 하여 사용함
  const { id } = useParams();
  console.log(id);

  const [getPostings, setGetPostings] = useState<any>([]);

  const getPost = async () => {
    const q = doc(dbService, 'Post', id);
    const postData = await getDoc(q);
    //비동기
    setGetPostings(postData.data());
  };

  useEffect(() => {
    getPost();
  }, []);
  console.log(getPostings);

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
              <S.IntroHashTag>#케이팝 #발라드 #인디</S.IntroHashTag>
              <S.IntroDes>{getPostings.Description_Posting}</S.IntroDes>
            </S.DetailIntroWrapper>
            <S.ShareBtn>
              {/*svg로 갈아끼워야함*/}
              <S.StyledHeartIcon />

              <S.HeartBtn>5</S.HeartBtn>
              <S.WalktogetherBtn>
                <S.WalktogetherTitle>함께 걸을래요</S.WalktogetherTitle>
              </S.WalktogetherBtn>
            </S.ShareBtn>
          </S.BoxPhoto>
        </S.Boxcontents>
        {/*장소*/}
        <S.DetailLoactionWrapper>
          <S.DeatilLoactionTitle>장소는 이 곳이에요</S.DeatilLoactionTitle>
          <S.DetailLoactionContainer>
            <S.LoactionMap src='/assets/mapimg.png' />
            <S.DetailAddressContainer>
              <S.DetailAddressIcon />
              <S.DetailAddressBox>
                <S.DetailAddress>
                  서울특별시 강남구 청담동 12번 출구
                </S.DetailAddress>
                <S.DetailDate>2/9(목) 19:30PM</S.DetailDate>
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
