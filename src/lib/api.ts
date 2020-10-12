import matter from 'gray-matter';
import { IProps as IPostListItem } from '@components/Posts/PostListItem';

export const getAllPosts = async (): Promise<IPostListItem[]> => {
  const context = require.context('../content', false, /\.md$/);
  const posts: IPostListItem[] = [];

  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await import(`../content/${post}`);
    const meta = matter(content.default);
    posts.push({
      path: meta.data.path,
      slug: post.replace('.md', ''),
      title: meta.data.title,
      description: meta.data.description,
      thumbnailUrl: meta.data.thumbnailUrl,
    });
  }

  return posts;
};
