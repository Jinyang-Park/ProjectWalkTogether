import CardSection from '../../../components/CardSection/CardSection';
import * as S from './MypageWrite.style';
import { Post, usePosts } from '../../../api/postsApi';

const MyPageWrite = (props: { uid: string }) => {
  const { uid } = props;

  const { posts, refetch } = usePosts();
  const filteredPosts: Array<Post> = posts.filter((post) => post.UID === uid);

  return (
    <S.MyPageWriteWrap>
      <S.PostListWrap>
        {filteredPosts.map((post, i) => {
          return <CardSection post={post} key={i} refetch={refetch} />;
        })}
      </S.PostListWrap>
    </S.MyPageWriteWrap>
  );
};
export default MyPageWrite;
