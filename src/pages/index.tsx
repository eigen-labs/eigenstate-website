import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <>
        <Header/>
        {/* <div className='h-screen bg-green-500 z-0'></div> */}
        <Footer/>
    </>
    
  )
}
