import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from '@components/Hero'
import Contact from '@components/Contact'
import { AboutMe } from '@components/About'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe/>
      <Contact />
    </main>
  )
}

