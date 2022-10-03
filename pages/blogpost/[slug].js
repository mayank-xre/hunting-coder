import React, { useEffect, useState } from 'react'
import styles from '../../styles/BlogPost.module.css'
import ErrorPage from 'next/error'

const Slug = (props) => {
  const [Blog, setBlog] = useState(props.Blog);
  if(Blog.Error){
    return(<ErrorPage statusCode={500}/>)
  }
  function createMarkup(content) {
    return {__html: content};
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{Blog.Title}</h1>
        <div dangerouslySetInnerHTML={createMarkup(Blog.Content)}/>
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
export default Slug