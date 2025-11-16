import { sql } from '../lib/db.ts'

export async function getProjects() {
   try {
    const res = await fetch("https://api.github.com/users/simonegarofalo/repos", {
      cache: "no-store"
    });

    if (!res.ok) throw new Error("GitHub fetch failed");

    const githubRepos = await res.json();    

    const exclude = [
      "bicocca-nextjs", 
      "landing-page", 
      "learning-react", 
      "numQuest", 
      "react-tic-tac-toe", 
      "react-timer", 
      "simone-garofalo",
      "fetch-github-repositories",
      "kangaroo",
      "simonegarofalo"
    ];    

    const filtered = githubRepos
    .filter((repo: any) => !exclude.includes(repo.name))
    .sort((a: any, b: any) => {
      return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
    });

    const dbProjects = await sql`SELECT * FROM projects`;

    const merged = filtered.map((repo: any) => {
      const extra = dbProjects.find((p: any) => p.repo_name == repo.name);

      return{
        ...repo,
        extra,
      };
    });

    return merged;
  }
    catch (err) {
    console.error("Error:", err);
    return [];
  }
}
