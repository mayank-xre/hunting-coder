import React, { useState } from 'react'

const Contact = () => {
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Desc, setDesc] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Name: Name,
      Email_id: Email,
      Desc: Desc
    }
    const res = await fetch("http://localhost:3000/api/postContact", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(data)
    })
    setName('');
    setEmail('');
    setDesc('');
  }
  const handleChange = (e) => {
    if (e.target.id === 'Name') { setName(e.target.value) }
    else if (e.target.id === 'Email') { setEmail(e.target.value) }
    else if (e.target.id === 'TextArea') { setDesc(e.target.value) }
  }
  return (
    <div className="text-white container my-20 px-36">
      <h1 className='text-2xl'>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="Name" className="text-lg">Name</label>
          <input className="w-6/12 h-8 bg-slate-800 rounded border border-x-2 border-y-2 border-gray-600 outline-gray-600" type="text" value={Name} onChange={handleChange} required id="Name" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Email" className="text-lg">Email</label>
          <input className="w-6/12 h-8 bg-slate-800 rounded border border-x-2 border-y-2 border-gray-600 outline-gray-600" type="email" onChange={handleChange} required value={Email} id="Email" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="TextArea" className="text-lg">Desc</label>
          <textarea className="w-6/12 h-48 bg-slate-800 rounded border border-x-2 border-y-2 border-gray-600 outline-gray-600" id="TextArea" onChange={handleChange} value={Desc} required></textarea>
        </div>
        <button className="my-4 bg-violet-600 hover:bg-violet-800 rounded w-16 h-8" type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact