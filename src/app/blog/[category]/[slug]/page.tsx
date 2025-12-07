import Post from '../../../../components/Post'

export default async function PostPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;

  return (
    <section className="w-full grid grid-cols-12">
      <Post category={category} slug={slug} />
    </section>
  )
};
