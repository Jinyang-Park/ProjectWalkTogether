import * as S from './CardSection.style';
import CardSection from '../../components/CardSection/CardSection';
import { Post, usePosts } from '../../api/postsApi';
// import { onAuthStateChanged } from 'firebase/auth'

const FootOning = () => {
  const postList: Array<Post> = usePosts();

  return (
    <S.LikedListItem>
      {postList.slice(0, 8).map((post: any) => {
        return <CardSection key={post.id} post={post} />;
      })}
    </S.LikedListItem>
  );
};
export default FootOning;
