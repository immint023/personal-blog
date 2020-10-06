import { route } from 'next/dist/next-server/server/router';
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  return <p>Post: {id}</p>;
};

export default Post;
