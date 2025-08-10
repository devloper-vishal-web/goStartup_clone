"use client"
import React from 'react'
import { useState } from 'react';
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { FaFacebookF, FaGithub } from 'react-icons/fa6';
import Footer from '../support/footer';

const SignIn = () => {
  const [name, setName] = useState([]);
  const [retypePassword, setRetypePassword] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted", name, email, password, retypePassword);


    const res = await fetch("/api/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password,
          retypePassword
        })
      })
    const data = await res.json()
    console.log(data, res)
    if (res.status === 201) {
      alert("Form submitted successfully");
      setName("");
      setEmail("");
      setPassword("");
      setRetypePassword("");
    } else {
      alert("Failed to submit form");
    }
  }

  return (
    <>
      <div className='signin-container main w-[80vw] mx-auto my-20 p-5 md:p-12 rounded-lg shadow-lg'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-6'>Create Your Account</h2>
        <p className='mb-6 text-slate-500'>Please fill in the details below to create your account.</p>
        <h3 className='text-lg md:text-xl font-semibold mb-4 my-10'>Sign Up with social media</h3>
        <ul className='flex items-center max-sm:justify-between sm:gap-3 text-2xl cursor-pointer my-5 shadow-md'>
          <li className='flex text-base items-center gap-2 px-5 py-2 rounded-lg bg-slate-800/80 font-medium text-slate-400 max-sm:hidden'><FaGoogle className='text-2xl' />Sign up with Google</li>
          <li className='px-2 md:px-3 py-2 rounded-lg bg-slate-800/80 sm:hidden'><FaGoogle /></li>
          <li className='px-2 md:px-3 py-2 rounded-lg bg-slate-800/80 '><FaFacebookF /></li>
          <li className='px-2 md:px-3 py-2 rounded-lg bg-slate-800/80 '><FaTwitter /></li>
          <li className='px-2 md:px-3 py-2 rounded-lg bg-slate-800/80 '><FaGithub /></li>
        </ul>
        <form onSubmit={handleSubmit}>
          <h2 className='text-base my-8 font-semibold mb-4 text-center text-slate-500'>Or create account with email</h2>
          <div className="flex flex-col justify-center items-center gap-12  p-5 mx-auto text-center my-10 w-1/2">
            <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
              <div className='flex flex-col gap-5 justify-between items-start'>
                <h1 className=''>Full Name </h1>
                <input type="text" id='text' name='text' value={name} required placeholder='Jon Andrio' onChange={(e) => setName(e.target.value)} className=' outline-none' />
                <div className="underline border-1  border-slate-800 w-[65vw] md:w-[30vw] mx-auto hover:border-white"></div>
              </div>
              <div className='flex flex-col gap-5 justify-between items-start'>
                <h1 className=''>Email Address</h1>
                <input type="email" id="email" name="email" value={email} required placeholder='jonandrio@example.com' onChange={(e) => setEmail(e.target.value)} className=' outline-none' />
                <div className="underline border-1  border-slate-800 w-[65vw] md:w-[30vw] mx-auto"></div>
              </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
              <div className='flex flex-col gap-5 justify-between items-start'>
                <h1 className=''>Password</h1>
                <input type="password" id="password" name="password" value={password} required placeholder='********' onChange={(e) => setPassword(e.target.value)} className=' outline-none' />
                <div className="underline border-1  border-slate-800 w-[65vw] md:w-[30vw] mx-auto hover:border-white"></div>
              </div>
              <div className='flex flex-col gap-5 justify-between items-start'>
                <h1 className=''>Retype Password</h1>
                <input type="password" id="retype-password" name="retype-password" value={retypePassword} required placeholder='******** ' onChange={(e) => setRetypePassword(e.target.value)} className=' outline-none' />
                <div className="underline border-1  border-slate-800 w-[65vw] md:w-[30vw] mx-auto hover:border-white"></div>
              </div>
            </div>

            <div className='flex flex-col justify-center items-start gap-8 w-[63vw]'>
              <div className='flex gap-2 md:gap-5 justify-center sm:items-center text-slate-400'>
                <input type="checkbox" name="check" id="check" className='w-5 h-5 cursor-pointer bg-slate-800 max-sm:mt-2' />
                <span className='md:text-lg hover:text-blue-600 cursor-pointer'>By creating account means you agree to the Terms and Conditions and our Privacy Policy</span>

              </div>
              <button className='font-semibold md:text-lg px-6 py-3 bg-blue-600 rounded-lg cursor-pointer'>Create Account</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default SignIn
