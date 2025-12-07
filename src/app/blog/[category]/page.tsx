import Articles from '../../../components/Articles'

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  return (
    <section className="w-full grid grid-cols-12">
      <Articles category={category} />
    </section>
  )
};

