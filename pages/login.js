import React, { useState } from 'react'
import {ToastContainer,toast} from 'react-toastify'

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
        <div className="container text-white my-20 px-36">
            <h1 className='text-2xl my-4 text-left'>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="Email" className="text-lg">Email</label>
                    <input id="Email" className="w-6/12 h-8 bg-slate-800 rounded border border-x-2 border-y-2 border-gray-600 outline-gray-600" value={Email} onChange={handleChange} type="Email"></input>
                </div>
                <div className="flex flex-col my-4">
                    <label htmlFor="PassWord" className="text-lg">Password</label>
                    <input id="Password" className="w-6/12 h-8 bg-slate-800 rounded border border-x-2 border-y-2 border-gray-600 outline-gray-600" value={Pass} onChange={handleChange} type="Password"></input>
                </div>
                <button className="bg-violet-600 hover:bg-violet-800 rounded w-16 h-8" type="submit">Login</button>
            </form>
        </div>
        </>
    )
}

export default Login