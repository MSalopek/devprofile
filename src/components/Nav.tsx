import Image from "next/image"
import { IconProps, GitHubIcon, TwitterIcon } from "./Icons"

export const socialLinks = [
  {
    name: 'Twitter',
    href: '#',
    icon: (props: IconProps) => <TwitterIcon {...props} />
  },
  {
    name: 'GitHub',
    href: '#',
    icon: (props: IconProps) => <GitHubIcon {...props} />
  },
]

export function SideBar() {
  return <aside
    className="inset-0 overflow-hidden z-0">
    <div className="cursor-pointer h-fit w-16 hidden absolute inset-1/3 left-0 sm:flex">
      <div className="flex h-full flex-col rounded-tr-sm rounded-br-sm bg-base-100 p-6 shadow">
        <div className="flex flex-col items-center justify-center gap-4">
          {socialLinks.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </aside>
}

export function TopBar() {
  return <div className="sticky inset-0 top-0 shadow-md z-10 bg-base-100">
    <div className="container mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <Image alt="logo image" src={"/img/logo.jpg"} width={42} height={42} className="rounded-full hidden lg:block" />
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-1.5">
              <li><a className="py-4 w-full h-full text-lg tracking-tight" href="/">Home</a></li>
              <li><a className="py-4 w-full h-full text-lg tracking-tight" href="/#about">About</a></li>
              <li><a className="py-4 w-full h-full text-lg tracking-tight" href="/blog">Blog</a></li>
              <li><a className="py-4 w-full h-full text-lg tracking-tight" href="/booking">Book a Consult</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">MSalopek</a>
        </div>
        <div className="navbar-end flex lg:hidden">
          <a href="/#contact" className="btn bg-accent border-none text-white hover:text-white">Contact</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            <li><a href="/">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/booking">Book a Consult</a></li>
          </ul>
          <a href="/#contact" className="btn bg-accent border-none text-white hover:text-white">Contact</a>
        </div>
      </div>
    </div>
  </div>

}
