import React, { useEffect, useState } from 'react';
import * as S from './CardSection.style';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentUserUid, paramsState } from '../../Rocoil/Atom';
import { async } from '@firebase/util';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { ref } from 'firebase/storage';
import { authService, dbService } from '../../common/firebase';
import { red } from '@mui/material/colors';
import CommonStyles from './../../styles/CommonStyles';

interface postProps {
  post: any;
}
const CardSection = ({ post }: postProps) => {
  // console.log('post', post.id);
  const navigate = useNavigate();
  const setParams = useSetRecoilState(paramsState);
  const [likebtn, setLikeBtn] = useState<boolean>(false);
  const uid = useRecoilValue(currentUserUid);

  // console.log(post);

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
    console.log(post.id);
    let p = post;
    p.LikedUsers.push(uid);

    // doc = getDocs(Post 중에 PostingID_Posting === post.PostingID_Posting인 것들)[0]
    // updateDoc(doc, likderifjsif)

    updateDoc(doc(dbService, 'Post', post.id), {
      LikedUsers: p.LikedUsers,
    })
      .then((s) => console.log('succes', s))
      .catch((e) => console.log(e));
  };

  // 좋아요 취소
  const unlikepost = async () => {
    console.log(post.id);

    const u = post.LikedUsers.filter((id: string) => id !== uid);
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
          <S.ListItemThumnail src={post.ThumbnailURL_Posting} />
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
          <S.AddressDateHourWrapper>
            <S.ListItemAddress>{post.Address_Posting}</S.ListItemAddress>
            <S.ListItemDate>{post.RsvDate_Posting}</S.ListItemDate>
            <S.ListItemHour>{post.RsvHour_Posting}</S.ListItemHour>
          </S.AddressDateHourWrapper>
        </S.ListItemContainer>
      </S.CardSectionWrapper>
      <S.LikedHeartFlex>
        {likebtn ? (
          <S.LikeBtnFill
            src={require('../../assets/HeartFill2.svg').default}
            onClick={() => {
              unlikepost();
            }}
          />
        ) : (
          <S.LikeBtnLine
            src={'/assets/HeartLine.svg'}
            onClick={() => {
              likepost();
              console.log('좋아요');
            }}
          />
        )}
      </S.LikedHeartFlex>
    </S.CardBox>
  );
};

export default CardSection;
