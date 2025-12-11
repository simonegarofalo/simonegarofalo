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
      <div className="col-start-2 col-end-12 md:col-start-4 md:col-end-10 mt-14 mb-10">
        <h1 className="post-title">{singlePost.title}</h1>
         <p className="text-sm mt-2 mb-4 text-gray-500"><i>{`Milan, ${new Date(singlePost.created_at).toLocaleDateString("it-IT")}`}</i></p>
         <div dangerouslySetInnerHTML={{ __html: singlePost.content }} />
      </div>
    );
  } catch (err) {
    console.error("db query failed:", err);
    return <div>Errore nel recupero degli articolo</div>;
  }
}
