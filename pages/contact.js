import React, { useState } from 'react'
import styles from "../styles/Contact.module.css"

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
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="Name" className={styles.formlabel}>Name</label>
          <input className={styles.input} type="text" value={Name} onChange={handleChange} required id="Name" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="Email" className={styles.formlabel}>Email</label>
          <input className={styles.input} type="email" onChange={handleChange} required value={Email} id="Email" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="TextArea" className={styles.formlabel}>Desc</label>
          <textarea className={styles.textarea} id="TextArea" onChange={handleChange} value={Desc} required></textarea>
        </div>
        <button className={styles.btn} type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact