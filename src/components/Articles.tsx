import Link from 'next/link'
import { sql } from '../lib/db'

type Props = { category?: string };

const categoryColors: Record<string, string> = {
  cs: "bg-blue-500 text-white px-2",
  life: "bg-green-500 text-white",
  default: "bg-gray-300"
};

export default async function Articles({ category }: Props) {
  try {
    let posts;

    if (category) {
      posts = await sql`
        SELECT * FROM posts
        WHERE category = ${category}
        ORDER BY created_at DESC
      `;
    } else {
      posts = await sql`
        SELECT * FROM posts
        ORDER BY created_at DESC
      `;
    };

    return (
      <section className="col-start-2 col-end-12 md:col-start-4 md:col-end-10 my-10">
          <h1>{category ? `${category}` : "All articles"}</h1>
          {posts.map((post: any) => (
            <div className="my-10" key={post.id}>
            <div className="flex flex-col">
             <Link href={`/blog/${post.category}`} className="w-fit">
                <div className={`min-w-10 h-8 flex justify-center items-center px-2 rounded ${categoryColors[post.category] || categoryColors.default}`}>
                {post.category}
                </div>
              </Link>
              <Link href={`/blog/${post.category}/${post.slug}`} className="preview-post-title w-fit">{post.title}</Link>
              </div>
              <p className="mb-4">{post.content}</p>
            <Link href={`/blog/${post.category}/${post.slug}`} className="read-more"><i>Read more</i></Link>
            </div>
          ))}
      </section>
    );
  } catch (err) {
    console.error("db query failed:", err);
    return <div>Errore nel recupero degli articoli</div>;
  };
};
