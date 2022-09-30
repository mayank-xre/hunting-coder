import '../styles/globals.css'
import Navbar from '../components/navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <title>Hunting Coder</title>
    </Head>
    <Navbar></Navbar>
    <Component {...pageProps} />
  </>)
}

export default MyApp
