import Link from '../components/Link.tsx';

export default function Navbar() {
  return(
    <header className="w-full grid grid-cols-12 h-14 border-b-[0.02rem]">
      <nav className="col-start-2 col-end-12 md:col-start-4 md:col-end-10 flex items-center justify-between">
        <Link href="/"><p className="text-2xl">../</p></Link>
        <ul className="flex items-center justify-center gap-4">
          <li><Link href="/blog">posts</Link></li>
          <li><Link href="/projects">repos</Link></li>
        </ul>
      </nav>
    </header>
  );
};
