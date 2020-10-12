import CodeBlock from '@components/CodeBlock';
import Image from '@components/Image';
import Layout from '@components/Layout';
import { getAllPosts } from '@lib/api';
import matter, { GrayMatterFile } from 'gray-matter';
import { NextPage } from 'next';
import ReactMarkdown from 'react-markdown';

interface IProps extends GrayMatterFile<any> {}

const Post: NextPage<IProps> = ({ content, data }) => {
  return (
    <Layout title={data.title}>
      <h1>{data.title}</h1>
      <ReactMarkdown
        source={content}
        renderers={{ code: CodeBlock, image: Image }}
      />
    </Layout>
  );
};

export async function getStaticProps(context: any) {
  const { id: slug } = context.params;
  const content = await import(`../../content/${slug}.md`);
  const data = JSON.stringify(matter(content.default));
  return {
    props: JSON.parse(data),
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  return {
    paths: posts.map((item) => ({
      params: { id: item.slug },
    })),
    fallback: false,
  };
}

export default Post;
