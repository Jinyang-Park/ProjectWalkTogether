import * as S from './CardSection.style';
import CardSection from '../../components/CardSection/CardSection';
import { Post, usePosts } from '../../api/getPosts';

//뜨거운 신발
const LikesComponent = () => {
  let postList: Array<Post> = [...usePosts()].sort(
    (a, b) => b.LikedUsers.length - a.LikedUsers.length
  );

  return (
    <S.LikedListItem>
      {postList

        .slice(0, 8)
        .sort((a, b) => b.LikedUsers.length - a.LikedUsers.length)
        .map((post: any) => {
          return <CardSection key={post.id} post={post} />;
        })}
    </S.LikedListItem>
  );
};
export default LikesComponent;
