import Link from 'next/link';
import Image from 'next/image'

const githubIcon = 'github-icon.svg'

const languageColor: Record<string, string> = {
  HTML: '#e34c26',
  CSS: '#663399',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Astro: '#ff5a03'
};

export default async function Projects() {
  try {
    const res = await fetch("https://api.github.com/users/simonegarofalo/repos", {
      cache: "no-store"
    });

    if (!res.ok) {
throw new Error("Could not fetch this resource");
    }

    const exclude = [
      "bicocca-nextjs", 
      "landing-page", 
      "learning-react", 
      "numQuest", 
      "react-tic-tac-toe", 
      "react-timer", 
      "simone-garofalo",
      "fetch-github-repositories",
      
    ];

    const projectRepos = await res.json();

    const repos = projectRepos
    .filter((repo: any) => !exclude.includes(repo.name))
    .sort((a: any, b: any) => {
      return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
    });


    return (
      <section className="col-start-2 col-end-12 md:col-start-4 md:col-end-10 my-10">
        <h1>All projects</h1>
        {repos.map((repo: any) => (
          <div key={repo.id} className="my-10 p-5 py-10 border border-gray-300 rounded-lg">
            <Link
              href={repo.html_url}
              target="_blank"
              className="project-title hover:underline"
            >
              {repo.name}
            </Link>
            <div className="flex items-center gap-1 pb-4">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: languageColor[repo.language] || "#999" }}></div>
              <p className="text-sm">{repo.language}</p>
            </div>
            <Link href={repo.html_url} target="_blank" className="w-fit inline-block">
              <div className="w-fit flex gap-1 bg-black text-sm text-white py-1 px-2 rounded">
                <Image src={githubIcon} alt="github-icon" width={16} height={16} />
                <p className="text-[0.7rem]">Source</p>
              </div>
            </Link>
          </div>
        ))}
      </section>
    );

  } catch (err) {
    console.error("Error:", err);
    return <div>Projects not found</div>;
  }
}

