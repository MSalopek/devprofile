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
