import Link from '../components/Link.tsx';
import './Navbar.css';
import Image from "next/image";

const blogIcon = '/blog.svg'
const projectsIcon = 'projects.svg'
const docIcon = 'doc.svg'

export default function Navbar() {
  return(
    <header className="w-full grid grid-cols-12 h-14 border-b-[0.02rem]">
      <nav className="col-start-2 col-end-12 md:col-start-4 md:col-end-10 flex items-center justify-between">
        <Link href="/"><div id="logo"></div></Link>
        <ul className="flex items-center justify-center gap-4">
          <li><Link href="/blog"><Image src={blogIcon} alt="blog-icon" width={16} height={16} className="mr-1"/></Link></li>
          <li><Link href="/projects"><Image src={projectsIcon} alt="projects-icon" width={24} height={24} /></Link></li>
          <li><Link href="" download><Image src={docIcon} alt="cv-icon" width={22} height={22} /></Link></li>
        </ul>
      </nav>
    </header>
  );
};
