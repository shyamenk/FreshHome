import Head from 'next/head'
import {Inter} from '@next/font/google'
import NavBar from '@/components/NavBar'
import Hero from '@/components/HeroSection'
import Spinner from '@/components/Spinner'

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Commerce Application | Fullstack</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
    </>
  )
}
