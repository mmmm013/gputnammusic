import { Inter, Merriweather } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const merriweather = Merriweather({ 
  weight: ['700', '900'], 
  subsets: ['latin'], 
  variable: '--font-merriweather' 
})

export const metadata = {
  title: 'L Cole Farms | Regenerative Hub',
  description: 'Family & Farm Forever. Est. 100+ Years.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}