import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Creador de Tablaturas - Franco Piccirilli',
  description: 'Crea y comparte tus tablaturas de guitarra en este editor online gratuito.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script src="https://kit.fontawesome.com/e80c9c3cc8.js" />
    </html>
  )
}
