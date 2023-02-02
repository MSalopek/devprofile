import Link from 'next/link'
import { ArrowDownIcon } from '@heroicons/react/24/solid'

export default function Hero() {
  return <section className="flex flex-col h-screen items-center justify-center">

    <div className="mx-auto max-w-7xl py-16 px-6 sm:py-44 lg:px-8">
      <div className="text-center">
        <h1 className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Take control of your team.</h1>
        <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">Start building for free, then add a site plan to go live. Account plans unlock additional features.</p>
      </div>
    </div>
    <a href="#about"
      className="animate-bounce rounded-full border border-indigo-300 p-1.5">
      <ArrowDownIcon className="h-7 w-7 text-indigo-500" />
    </a>
  </section>
}