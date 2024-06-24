import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from 'next'
import { Inter, Roboto, Montserrat } from 'next/font/google'
import Providers from './provider'
import { ToastContainer } from 'react-toastify'
import UserInitializer from './components/UserInitializer'

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500']
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '700']  // Ideal for bold headings
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>

        <Providers>
          <UserInitializer/>
        
      <main>{children}</main> 
        <ToastContainer/>
        </Providers>
        </body>
    </html>
  )
}
