import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './styles/globals.scss'
import Sidebar from './components/Sidebar/Sidebar'
import StoreProvider from './store/StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TV application',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreProvider>
      <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
        <body className={inter.className}>
          <div className="flex">
            <Sidebar />
            {children}
          </div>
        </body>
      </html>
    </StoreProvider>
  )
}
