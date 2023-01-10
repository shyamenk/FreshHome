import Head from 'next/head'
import {Inter} from '@next/font/google'
import NavBar from '@/components/layout/NavBar'
import Hero from '@/components/layout/HeroSection'
import Spinner from '@/components/shared/Spinner'
import Feature from '@/components/layout/Feature'

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
      <Hero />
      <Feature />
    </>
  )
}
