import '../styles/globals.css'
import Navbar from '../components/navbar'
import Image from 'next/image'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (<div className='bg-black'>
    <Head>
      <title>Hunting Coder</title>
    </Head>
    <Navbar></Navbar>
    <Component {...pageProps} />
  </div>)
}

export default MyApp
