import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import './globals.css'
import Head from "./head"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sai Win Oo',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body id={'about'} className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
