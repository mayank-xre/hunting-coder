import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'
const Slug = (props) => {
  const [Blog, setBlog] = useState(props.Blog);
  function createMarkup(content) {
    return {__html: content};
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{Blog.title}</h1>
        <div dangerouslySetInnerHTML={createMarkup(Blog.content)}/>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const data = await fetch(`http://localhost:3000/api/getBlog?slug=${context.query.slug}`);
  const Blog = await data.json();
  return {
    props: { Blog }
  }
}