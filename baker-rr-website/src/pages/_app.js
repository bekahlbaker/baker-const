import { Saira } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const saira = Saira({ subsets: ['latin'] })
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={saira.className}>
      <Component {...pageProps} />
    </main>
  )
}