import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import ErrorPage from 'next/error'

const Blogs = (props) => {
  const [Blogs, setBlogs] = useState(props.Blogs);
  if(Blogs.Error){
    return (
      <ErrorPage statusCode={500}/>
    )
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {Blogs.map((blog) => {
          return (
            <div key={blog.Id}>
              <Link href={`blogpost/${blog.KeyTag}`}>
                <h2 className={styles.h2}>{blog.Title}</h2></Link>
              <p>{blog.MetaDesc.substr(0, 300)}...<Link href={`blogpost/${blog.KeyTag}`}>Read more</Link></p>
            </div>)
        })}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const data = await fetch("http://localhost:3000/api/blogs")
  const Blogs = await data.json();
  return {
    props: { Blogs }
  }
}

export default Blogs