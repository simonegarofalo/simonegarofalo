import Post from '../../../components/Post.tsx'

export default function PostPage({ params }: { params: { category: string; slug: string } }) {
  return(
  <Post category={params.category} slug={params.slug} />
  )
} 
