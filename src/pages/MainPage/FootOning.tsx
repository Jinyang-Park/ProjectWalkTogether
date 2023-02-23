import React, { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { authService, dbService } from '../../common/firebase';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as S from './CardSection.style';
import { paramsState } from '../../Rocoil/Atom';
import {
  query,
  collection,
  where,
  orderBy,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';
// import { onAuthStateChanged } from 'firebase/auth'
interface postProps {
  post: any;
}

const FootOning = () => {
  const setParams = useSetRecoilState(paramsState);
  const { id } = useParams();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const q = query(
      collection(dbService, 'Post'),
      // Category_Posting이 파람스로 넘겨준 애들과 같은 애들만 뿌려줘라
      orderBy('createdAt', 'desc')
      // orderBy('TimeStamp_Posting', 'desc')
    );
    onSnapshot(q, (snapshot) => {
      const getpostList = snapshot.docs.map((doc) => {
        const postList = {
          id: doc.id,
          ...doc.data(),
        };
        return postList;
      });
      setPostList(getpostList);
    });
  }, []);

  console.log(postList);
  // import { useSetRecoilState } from 'recoil
  const navigate = useNavigate();

  return (
    <>
      {postList.map((item) => {
        return (
          <>
            <S.LikedListItem>
              <S.CardBox>
                <S.CardSectionWrapper
                  onClick={() => {
                    setParams(item.id);
                    navigate(`/detailpage/${item.id}`);
                  }}
                >
                  <S.ListItemWrapper>
                    <S.ListItemThumnail src={item.ThunmnailURL_Posting} />
                  </S.ListItemWrapper>
                  <S.ListItemThumnailTitle>
                    {item.Title_Posting}
                  </S.ListItemThumnailTitle>
                  {/* <S.HashTag>#케이팝 #발라드</S.HashTag> */}
                  <S.ListItemContainer>
                    <S.LikedHeartFlex>
                      <S.ListItemAddress>
                        {item.Address_Posting}
                      </S.ListItemAddress>
                      <S.LikeBtnLine />
                    </S.LikedHeartFlex>
                    <S.ListItemDate>
                      {item.RsvDate_Posting}
                      {item.RsvHour_Posting}
                    </S.ListItemDate>
                  </S.ListItemContainer>
                </S.CardSectionWrapper>
              </S.CardBox>
            </S.LikedListItem>
          </>
        );
      })}
    </>
  );
};
export default FootOning;
