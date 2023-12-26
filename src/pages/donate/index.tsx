import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Donate from '@/components/donate'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <>
        <Header/>
        <Donate/>
        <Footer/>
    </>
    
  )
}
