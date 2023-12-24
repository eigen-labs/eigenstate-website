import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import TokenComposition from '@/components/token-composition'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <>
        <Header/>

        <TokenComposition/>

        <Footer/>
    </>
    
  )
}
