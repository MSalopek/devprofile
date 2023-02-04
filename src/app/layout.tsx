import Footer from '@components/Footer'
import { SideBar, TopBar } from '@components/Nav'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <TopBar />
        <SideBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
