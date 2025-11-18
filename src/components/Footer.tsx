import Link from 'next/link'
import Image from 'next/image'

const blogIcon = '/blog.svg'
const projectsIcon = 'projects.svg'
const docIcon = 'doc.svg'

export default function Footer() {
  return(
    <footer className="w-full grid grid-cols-12 h-14">
      <div className="col-start-2 col-end-12 md:col-start-4 md:col-end-10 flex flex-col items-center justify-center border-t-[0.02rem] py-6 text-sm">
        developed by simonegarofalo
      </div>
    </footer>
  )
}
