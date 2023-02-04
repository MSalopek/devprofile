import { ArrowDownIcon } from '@heroicons/react/24/solid'

export default function Hero() {
  return <div className="h-screen bg-hero-pattern bg-cover">
    <section className="flex flex-col items-center justify-center h-3/4">

      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <div className="text-center">
          <h1 className="mt-1 text-4xl font-bold tracking-wide text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl">Hey, I&apos;m Matija Salopek</h1>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500 dark:text-gray-300 leading-8 tracking-wider">Fullstack software engineer & consultant passioned about helping startups grow and building scalable solutions</p>
        </div>
      </div>
      <a className="btn btn-accent rounded-none items-center mb-12" href="/#contact">Let&apos;s chat</a>

      <a href="#about"
        className="rounded-full py-4 px-2 border-2 border-gray-500">
        <ArrowDownIcon className="h-6 w-6 mt-2 -mb-1 animate-bounce text-black dark:text-gray-200" />
      </a>
    </section>
  </div>
}

