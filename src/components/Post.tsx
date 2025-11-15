import Link from 'next/link'
import { sql } from '../lib/db'

type Props = { category?: string, slug?: string };

export default async function Post({ category, slug }: Props) {
  try {

    if(!category || !slug) {
      return <p>Articolo non trovato</p>
    }

    const post = await sql`SELECT * FROM posts WHERE category = ${category} AND slug = ${slug}`;
    const singlePost = post[0];

    if(!singlePost) {
      return <p>Post non trovato</p>
    }

    return (
      <div>
        <h1>{singlePost.title}</h1>
        <p>{singlePost.content}</p>
        <Link href={`/blog/${post.category}`}>{post.category}</Link>
      </div>
    );
  } catch (err) {
    console.error("db query failed:", err);
    return <div>Errore nel recupero degli articolo</div>;
  }
}
