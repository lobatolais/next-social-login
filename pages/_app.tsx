import { Inter } from "@next/font/google"
import { SessionProvider } from "next-auth/react"

import type { AppProps } from "next/app"

import "styles/globals.scss"

const inter = Inter({
  subsets: ["latin"],
  fallback: ["Helvetica", "sans-serif"],
})

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }

        button {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
