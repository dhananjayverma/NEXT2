import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <h1>Post {id}</h1>
      <p>This is the content for post {id}.</p>
    </Layout>
  );
};

export default Post;
