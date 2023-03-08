import * as S from './CardSection.style';
import CardSection from '../../components/CardSection/CardSection';
import { Post, usePosts } from '../../api/postsApi';
import React, { useEffect, useState } from 'react';
import CardSkeleton from '../../components/CardSkeleton/CardSkeleton';
// import { onAuthStateChanged } from 'firebase/auth'

const FootOning = () => {
  // skeleton UI Loading
  const [isloading, setIsLoading] = useState<boolean>(true);

  const postList: Array<Post> = usePosts();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });
  // console.log(isloading);
  return (
    <>
      {isloading ? (
        <CardSkeleton />
      ) : (
        <S.LikedListItem>
          {postList.slice(0, 8).map((post: any) => {
            return <CardSection key={post.id} post={post} />;
          })}
        </S.LikedListItem>
      )}
    </>
  );
};
export default FootOning;
