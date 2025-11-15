import Articles from '../../../components/Articles.tsx'

export default function CategoryPage( { params }: { params: { category: string} }){
  return(
  <Articles category={params.category} />
  )
} 
