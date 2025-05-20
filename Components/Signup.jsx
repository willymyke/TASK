import React from 'react'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


function Signup() {
  const[username, setUsername]=useState('')
  const[email, setEmail]=useState('')
  const[password, setPassword]= useState('')
  const navigate= useNavigate()
 
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:2000/Signup', {username,email,password})
    .then((res) => {
      console.log(res)
      alert(res.data.message)
      navigate('/Login')
    })
    .catch(err =>console.log(err))
    
  }
  return (
    <div className='form'>
      <h1>REGISRATE YOUR INFO⤵</h1>
      <form onSubmit={handleSubmit} method='post'>
      <label htmlFor="">  Username: <br /></label>
        <input type="text" name='username' onChange={e => setUsername(e.target.value)} placeholder='Enter Your Username' required/> <br />
      <label htmlFor="">  Email: <br /></label>
        <input type="email" name='email' onChange={e => setEmail(e.target.value)} placeholder='Enter Your Email' required /> <br />
      <label htmlFor="">  Password: <br /></label>
        <input type="password" name='password' onChange={e => setPassword(e.target.value)} placeholder='Enter Your Password' required /> <br /><br />
        <button type='submit'>Register</button>
        
      </form>
      <p>If you Have an Account!!!<Link to ="/Login">Login</Link></p>
    </div>
  )
}

export default Signup