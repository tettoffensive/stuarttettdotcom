import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen space-y-14 lg:space-y-24">
      <Head>
        <title>〰️ Stuart Tett 〰️</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <About/>
      </main>     
    </div>
  )
}

export default Home
