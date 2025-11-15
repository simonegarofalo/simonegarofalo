import Link from 'next/link'
import { sql } from '../lib/db'

type Props = { category?: string };

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
      <div className="col-start-2 col-end-12">
        <h1>{category ? `${category}` : "Tutti gli articoli"}</h1>
        {posts.map((post: any) => (
          <div key={post.id}>
            <h2><Link href={`/blog/${post.category}/${post.slug}`}>{post.title}</Link></h2>
            <p>{post.content}</p>
            <Link href={`/blog/${post.category}`}>{post.category}</Link>
          </div>
        ))}
      </div>
    );
  } catch (err) {
    console.error("db query failed:", err);
    return <div>Errore nel recupero degli articoli</div>;
  };
};
