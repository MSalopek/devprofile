import Footer from '@components/Footer'
import { SideBar, TopBar } from '@components/Nav'
import Providers from '@components/Provider';
import { ServerThemeProvider } from "next-themes";
import './globals.css'

// * The ServerThemeProvider component is used to ensure that the correct
// * theme is applied on the server-side. It is not required on the client-side.

// * It wraps the html element and takes an attribute prop which is the attribute
// * that will be used to set the theme class on the html element.
// * The default value is "class".
// * The theme class will be applied to the html element on the server-side
// * and then removed on the client-side to prevent a flash of unstyled content.

// * The Providers component wraps the app and provides the context for the
// * useTheme and usePokemon hooks.
// SOURCE: https://github.com/pacocoursey/next-themes/issues/161

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ServerThemeProvider attribute="data-theme">

      <html lang="en" data-theme="dark">
        <head />
        <body>
          <Providers>

            <TopBar />
            <SideBar />
            {children}
            <Footer />
          </Providers>
        </body>
      </html>
    </ServerThemeProvider>
  )
}
