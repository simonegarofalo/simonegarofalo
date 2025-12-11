import Link from 'next/link';
import Image from 'next/image'

const githubIcon = 'github-icon.svg'
const websiteIcon = 'web.svg'

const languageColor: Record<string, string> = {
  HTML: '#e34c26',
  CSS: '#663399',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Astro: '#ff5a03'
};

export default function Project({ repo }: { repo: any }) {
  return(
    <div className="my-10 p-5 py-10 border border-gray-300 rounded-lg">
      {repo.extra?.image && (
      <Image 
        src={`/${repo.extra.image}`} 
        alt={repo.name} 
        width={30}
        height={30}
      />
      )}
      <Link
        href={repo.html_url}
        target="_blank"
        className="project-title hover:underline"
      >
        {repo.name}
      </Link>
      {repo.extra?.description && (
        <p className="mt-2 text-sm mb-0">{repo.extra.description}</p>
      )}
      <div className="flex items-center gap-1 mt-2 pb-6">  
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: languageColor[repo.language] || "#999" }}></div>
        <span className="text-sm">{repo.language}</span>
      </div>
      <Link href={repo.html_url} target="_blank" className="w-fit inline-block mr-2">
        <div className="w-fit flex gap-1 bg-black text-sm text-white py-1 px-2 rounded">
          <Image src={githubIcon} alt="github-icon" width={16} height={16} />
          <span className="text-[0.7rem]">Source</span>
        </div>
      </Link>
      {repo.extra?.website && (
        <Link href={repo.extra.website} target="_blank" className="w-fit inline-block">
          <div className="w-fit flex gap-1 bg-black text-sm text-white py-1 px-2 rounded">
          <Image src={websiteIcon} alt="website-icon" width={16} height={16} />
          <span className="text-[0.7rem]">Website</span>
        </div>
        </Link>
      )}
    </div>
  )
};
