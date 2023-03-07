import { Post, usePosts } from '../../../api/postsApi';
import CardSection from '../../../components/CardSection/CardSection';
import * as S from './MypageLike.style';

const MyPageLike = (props: { uid: string }) => {
  const { uid } = props;
  const posts: Array<Post> = usePosts().filter((post) =>
    post.LikedUsers.includes(uid)
  );

  return (
    <S.MyPageWriteWrap>
      <S.PostListWrap>
        {posts.map((post, i) => {
          return <CardSection post={post} key={i} />;
        })}
      </S.PostListWrap>
    </S.MyPageWriteWrap>
  );
};
export default MyPageLike;
