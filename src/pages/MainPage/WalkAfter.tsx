import * as S from './CardSection.style';
import CardSection from '../../components/CardSection/CardSection';
import { Post, usePosts } from '../../api/postsApi';

//뜨거운 신발
const WalkAfter = () => {
  const postList: Array<Post> = usePosts().filter(
    (post) => post.ProceedState_Posting === 'postingDone'
  );

  return (
    <S.LikedListItem>
      {postList.slice(0, 8).map((post: any) => {
        return <CardSection key={post.id} post={post} />;
      })}
    </S.LikedListItem>
  );
};
export default WalkAfter;
