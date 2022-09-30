import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hunting Coder
        </h1>
        <div className={styles.imageWrap}>
          <Image className={styles.myImg} src="/homeimg.jpg" width={237} height={158}></Image>
        </div>
        <p className={styles.description}>
          For Hunting Coders By a coder
        </p>
        <div className='blogs'>
          <h1>Latest Blogs</h1>
          <div className='blogItem'>
            <h2>How to learn javascript in 2022</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa neque cupiditate a earum vero qui</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
