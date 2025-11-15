import Link from '../components/Link.tsx';
import './Navbar.css'
export default function Navbar() {
  return(
    <header className="w-full grid grid-cols-12 h-14 border-b-[0.02rem]">
      <nav className="col-start-2 col-end-12 flex items-center justify-between">
        <div id="logo"></div>
        <ul className="flex gap-2">
          <li><Link href="../blog">blog</Link></li>
          <li><Link href="../progetti">progetti</Link></li>
          <li><Link href="" download>cv</Link></li>
        </ul>
      </nav>
    </header>
  );
};
