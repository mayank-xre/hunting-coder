import React, { useState } from 'react'
import {ToastContainer,toast} from 'react-toastify'
import styles from "../styles/Login.module.css"

const Login = () => {
    const [Email, setEmail] = useState('')
    const [Pass, setPass] = useState('')
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const res=await fetch("http://localhost:3000/api/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({Email:Email,PassWord:Pass})
        });
        const data=await res.json()
        if(data.Error){
            toast.error("Invalid Credentials",{
                closeOnClick:true,
                pauseOnHover:true,
                draggable:true,
                position:"top-right",
                autoClose:5000
            })
        }
        console.log(res);
        setEmail('');
        setPass('');
    };
    const handleChange=(e)=>{
        if(e.target.id=="Email"){
            setEmail(e.target.value);
        }
        else{
            setPass(e.target.value);
        }
    }
    return (
        <>
        <ToastContainer position="top-right" autoClose={5000}/>
        <div className={styles.container}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.mb3}>
                    <label htmlFor="Email" className={styles.formlabel}>Email</label>
                    <input id="Email" className={styles.input} value={Email} onChange={handleChange} type="Email"></input>
                </div>
                <div className={styles.mb3}>
                    <label htmlFor="PassWord" className={styles.formlabel}>Password</label>
                    <input id="Password" className={styles.input} value={Pass} onChange={handleChange} type="Password"></input>
                </div>
                <button className={styles.btn} type="submit">Login</button>
            </form>
        </div>
        </>
    )
}

export default Login