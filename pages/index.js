import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import ErrorPage from 'next/error'

export default function Home(props) {
  const [LatBlogs, setLatBlogs] = useState(props.Blogs)
  if(LatBlogs.Error){
    return(
      <ErrorPage errorStatus={500}/>
    )
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hunting Coder
        </h1>
        <div className={styles.imageWrap}>
          <Image className={styles.myImg} src="/homeimg.jpg" width={157} height={158}></Image>
        </div>
        <p className={styles.description}>
          For Hunting Coders By a coder
        </p>
        <div className='blogs'>
          <h1>Latest Blogs</h1>
          {
            LatBlogs.map((blog) => {
              return (
                <div className='blogItem' key={blog.Id}>
                  <Link href={`blogpost/${blog.KeyTag}`}><h2 className={styles.h2}>{blog.Title}</h2></Link>
                  <p>{blog.MetaDesc.substr(0, 200)}... <Link href={`blogpost/${blog.KeyTag}`} className={styles.read}>Read More</Link></p>
                </div>
              )
            })
          }
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

export async function getServerSideProps(context) {
  const data = await fetch("http://localhost:3000/api/getLatest");
  const Blogs = await data.json();
  return {
    props: { Blogs }
  }
}