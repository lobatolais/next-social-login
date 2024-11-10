import type { Metadata } from "next"
import { auth } from "auth"
import { SessionProvider } from "next-auth/react"
import { Inter } from "next/font/google"
import "styles/globals.scss"

const inter = Inter({
  subsets: ["latin"],
  fallback: ["Helvetica", "sans-serif"],
})

export const metadata: Metadata = {
  title: "next-social-login",
  description:
    "An easy authentication way to Github, Google or Facebook using NextAuth.js.",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  return (
    <html lang="en" className={inter.className}>
      <body>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  )
}
