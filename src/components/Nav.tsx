'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes'
import Image from "next/image"
import { IconProps, GitHubIcon, TwitterIcon } from "./Icons"

export const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/0xMajita',
    icon: (props: IconProps) => <TwitterIcon {...props} />
  },
  {
    name: 'GitHub',
    href: 'https://github.com/MSalopek',
    icon: (props: IconProps) => <GitHubIcon {...props} />
  },
]

export function SideBar() {
  return <aside
    className="inset-0 overflow-hidden z-0">
    <div className="cursor-pointer h-fit w-16 hidden absolute inset-1/3 left-0 sm:flex">
      <div className="flex h-full flex-col border-l-0 border-2 shadow-md shadow-base-300 border-gray-600 p-6">
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
  return <div className="sticky inset-0 top-0 shadow-md shadow-base-300 z-10 bg-base-100 lg:px-4">
    <div className="container mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <Image alt="logo image" src={"/img/logo.jpg"} width={42} height={42} className="rounded-full hidden lg:block" />
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-normal dropdown-content mt-3 p-1.5 shadow-lg bg-base-100 border border-base-300 w-52 space-y-1.5 dark:text-gray-200">
              <li><a className="py-4 w-full h-full text-lg tracking-tight rounded-none" href="/">Home</a></li>
              <li><a className="py-4 w-full h-full text-lg tracking-tight rounded-none" href="/#about">About</a></li>
              <li><a className="py-4 w-full h-full text-lg tracking-tight rounded-none" href="/blog">Blog</a></li>
              <li><a className="py-4 w-full h-full text-lg tracking-tight rounded-none" href={process.env.NEXT_CALENDLY_LINK}>Book a Consult</a></li>
              <li title="Change Theme" className="flex">
                <MobileThemeToggler />
              </li>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost hover:bg-inherit normal-case text-xl dark:text-white rounded-none">MSalopek</a>
        </div>
        <div className="navbar-end flex lg:hidden">
          <a href="/#contact" className="btn bg-accent rounded-none border-none text-white hover:text-white">Contact</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal dark:text-gray-200 mr-2 gap-x-1">
            <li title="Change Theme">
              <ThemeToggler />
            </li>
            <li><a className="px-3" href="/">Home</a></li>
            <li><a className="px-3" href="/#about">About</a></li>
            <li><a className="px-3" href="/blog">Blog</a></li>
            <li><a className="px-3" href={process.env.NEXT_CALENDLY_LINK}>Book a Consult</a></li>
          </ul>
          <a href="/#contact" className="btn btn-accent rounded-none items-center">Contact</a>
        </div>
      </div>
    </div >
  </div >
}

function ThemeToggler() {
  const { theme, setTheme } = useTheme()

  return <>
    {
      theme === 'dark'
        ? <button onClick={() => { setTheme('light') }} className="btn btn-ghost p-1.5 rounded-full">
          <SunIcon className="w-5 h-5" />
        </button>
        : <button onClick={() => { setTheme('dark') }} className="btn btn-ghost p-1.5 rounded-full">
          <MoonIcon className="w-4 h-4" />
        </button>
    }
  </>
}

function MobileThemeToggler() {
  const { theme, setTheme } = useTheme()

  const toggle = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return <button onClick={() => { toggle() }} className="w-full">
    <p>Theme:</p>
    {
      theme === 'dark'
        ?
        <MoonIcon className="w-4 h-4" />
        :
        <SunIcon className="w-5 h-5" />

    }
  </button>
}