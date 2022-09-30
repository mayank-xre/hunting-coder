import React from 'react'
import { useRouter } from 'next/router'
useRouter
const Slug = () => {
    const router=useRouter()
    const {slug}=router.query
  return (
    <div>Slug : {slug}</div>
  )
}

export default Slug