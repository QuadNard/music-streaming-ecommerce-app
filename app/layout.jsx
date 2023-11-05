import './globals.css'
import { Inter } from "next/font/google"
import { Header } from '../components/shared/Header';
import { Toaster } from 'sonner';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body className={inter.variable}>
        <Toaster 
        richColors 
        position="top-center"
        />
        <Header />
        {children}
        </body>
    </html>
  )
}