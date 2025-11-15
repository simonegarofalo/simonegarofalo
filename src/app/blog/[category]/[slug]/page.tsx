import Post from '../../../../components/Post.tsx'

export default async function PostPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;

  return <Post category={category} slug={slug} />;
};
