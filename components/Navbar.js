import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="container">
      <ul className='flex flex-row justify-end pr-8 text-white'>
        <Link href="/"><li className="mx-2 my-2">Home</li></Link>
        <Link href="/about"><li className="mx-2 my-2">About</li></Link>
        <Link href="/blogs"><li className="mx-2 my-2">Blogs</li></Link>
        <Link href="/login"><li className="mx-2 my-2">Login</li></Link>
        <Link href="/create"><li className="mx-2 my-2">Create</li></Link>
        <Link href="/contact"><li className="mx-2 my-2">Contact</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar