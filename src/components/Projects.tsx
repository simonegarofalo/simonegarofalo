import Link from 'next/link';

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

    const repos = await res.json();

    return (
      <section className="col-start-2 col-end-12 md:col-start-4 md:col-end-10 my-10">
        <h1>All projects</h1>
        {repos.map((repo: any) => (
          <div key={repo.id} className="my-10 p-5 border border-gray-300 rounded-lg">
            <Link
              href={repo.html_url}
              target="_blank"
              className="font-bold hover:underline"
            >
              {repo.name}
            </Link>
            <div className="flex items-center gap-2 pl-1">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: languageColor[repo.language] || "#999" }}></div>
              <span>{repo.language}</span>
            </div>
          </div>
        ))}
      </section>
    );

  } catch (err) {
    console.error("Error:", err);
    return <div>Projects not found</div>;
  }
}

