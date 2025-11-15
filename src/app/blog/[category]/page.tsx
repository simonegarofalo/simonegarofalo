import Articles from '../../../components/Articles.tsx'

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  return <Articles category={category} />;
};

