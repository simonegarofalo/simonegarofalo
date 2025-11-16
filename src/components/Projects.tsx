import Link from 'next/link';
import Image from 'next/image'
import { getProjects } from '../lib/projects.ts'
import Project from '../components/Project.tsx'

export default async function Projects() {
  const repos = await getProjects();
    return (
      <section className="col-start-2 col-end-12 md:col-start-4 md:col-end-10 my-10">
        <h1>All projects</h1>
        {repos.map((repo: any) => (
        <Project key={repo.id} repo={repo}/>
        ))}
      </section>
    );
}
