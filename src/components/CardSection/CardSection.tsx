import React, { useEffect, useState } from 'react';
import * as S from './CardSection.style';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentUserUid, paramsState } from '../../Rocoil/Atom';
import { async } from '@firebase/util';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { ref } from 'firebase/storage';
import { dbService } from '../../common/firebase';

interface postProps {
  post: any;
}
const CardSection = ({ post }: postProps) => {
  // console.log('post', post.id);
  const navigate = useNavigate();
  const setParams = useSetRecoilState(paramsState);
  const [likebtn, setLikeBtn] = useState<boolean>(false);
  const uid = useRecoilValue(currentUserUid);

  // post 바뀔때마 실행되는것이다.
  // useEffect(() => {
  //   setParams(post.id);
  // }, [post]);

  // 클릭할때마다 setParams가 바뀌어야된다.
  // <S.CardSectionWrapper
  //       onClick={() => {
  //         setParams(post.id);
  //         navigate(`/detailpage/${post.id}`);
  //       }}
  //     ></S.CardSectionWrapper>
  useEffect(() => {
    setLikeBtn(post.LikedUsers.includes(uid));
  }, [post]);
  // 좋아요 하는 거
  const likepost = async () => {
    const snap = await getDoc(doc(dbService, 'Post', post.id));
    snap.data().LikedUsers.push(uid);
    updateDoc(doc(dbService, 'Post', post.id), {
      LikedUsers: snap.data().LikedUsers,
    });
  };

  // 좋아요 취소
  const unlikepost = async () => {
    const snap = await getDoc(doc(dbService, 'Post', post.id));
    const u = snap.data().LikedUsers.filter((id) => id !== uid);
    updateDoc(doc(dbService, 'Post', post.id), {
      LikedUsers: u,
    });
  };

  return (
    <S.CardBox>
      <S.CardSectionWrapper
        onClick={() => {
          setParams(post.id);
          navigate(`/detailpage/${post.id}`);
        }}
      >
        <S.ListItemWrapper>
          <S.ListItemThumnail src={post.ThunmnailURL_Posting} />
        </S.ListItemWrapper>
        <S.ListItemThumnailTitle>{post.Title_Posting}</S.ListItemThumnailTitle>
        <S.HashTag>
          {post.Hashtag_Posting.map((tagItem, i) => {
            return (
              <>
                {tagItem == '' ? (
                  <div>&nbsp;</div>
                ) : (
                  <div key={i}>{'#' + tagItem}</div>
                )}
              </>
            );
          })}
        </S.HashTag>
        <S.ListItemContainer>
          <S.LikedHeartFlex>
            <S.ListItemAddress>{post.Address_Posting}</S.ListItemAddress>
            <S.LikeBtnLine />
          </S.LikedHeartFlex>
          <S.ListItemDate>
            {post.RsvDate_Posting}
            {post.RsvHour_Posting}
          </S.ListItemDate>
        </S.ListItemContainer>
      </S.CardSectionWrapper>
    </S.CardBox>
  );
};

export default CardSection;
