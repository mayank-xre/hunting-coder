import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ErrorPage from 'next/error'

export default function Home(props) {
  const [LatBlogs, setLatBlogs] = useState(props.Blogs)
  if (LatBlogs.Error) {
    return (
      <ErrorPage errorStatus={500} />
    )
  }
  return (
    <div className="bg-black text-white">
          <h1 className="text-3xl text-center my-2">
            Hunting Coder
          </h1>
        <div className="container flex justify-center">
          <Image className="rounded-full" src="/homeimg.jpg" width={157} height={158}></Image>
        </div>
        <p className="text-lg text-center mt-2">
          For Hunting Coders By a coder
        </p>
        <div className="container px-32">
          <h1 className='text-2xl'>Latest Blogs</h1>
          {
            LatBlogs.map((blog) => {
              return (
                <div className="container flex flex-col my-4" key={blog.Id}>
                  <Link href={`blogpost/${blog.KeyTag}`}><h2 className="text-xl cursor-pointer">{blog.Title}</h2></Link>
                  <p className='text-lg'>{blog.MetaDesc.substr(0, 200)}... <Link href={`blogpost/${blog.KeyTag}`} className="">Read More</Link></p>
                </div>
              )
            })
          }
        </div>
        <footer className="bg-gray-800 text-center my-auto">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="">
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