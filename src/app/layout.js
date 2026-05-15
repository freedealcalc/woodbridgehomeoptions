import { Playfair_Display, Source_Serif_4, DM_Mono } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
  axes: ['opsz'],
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://www.woodbridgehomeoptions.com'),
  title: 'Sell My House Fast in Woodbridge VA | Woodbridge Home Options',
  description: 'Think selling fast means leaving money on the table? Think again. Dan White shows Woodbridge, VA sellers every path — and which one puts the most cash in your pocket. Free consultation.',
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${sourceSerif.variable} ${dmMono.variable}`}>
        {children}
      </body>
    </html>
  )
}