import CardSection from '../../../components/CardSection/CardSection';
import * as S from './MypageWrite.style';
import { Post, usePosts } from '../../../api/postsApi';

const MyPageWrite = (props: { uid: string }) => {
  const { uid } = props;

  const posts: Array<Post> = usePosts().filter((post) => post.UID === uid);

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
export default MyPageWrite;
