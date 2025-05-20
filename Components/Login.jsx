import axios from 'axios'
import React, {useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'

function Login() {
  const[email, setEmail]= useState('')
  const[password, setPassword]= useState('')
  const navigate= useNavigate()
  const handleLogin =(e)=>{
    e.preventDefault()
    axios.post('http://localhost:2000/login',{ email, password })
     .then((res)=>{
        if (res.data.err === true) {
          alert(res.data.message)
          setEmail(''), setPassword('')
        }else{
          alert(res.data.message)
          navigate('/dashboad')
          window.location.reload()
        }
     }) 
    .catch(err => {
      console.error("Login failed:", err);
      alert("Login failed. Please check your credentials or server.");
    });
  }  
  return (
    <div className='form'>
        <h1>If You Have An Account Login Here⤵</h1>
         <form onSubmit={handleLogin}  id='login' method='post'>
       
      <label htmlFor="">  Email: <br /></label>
        <input type="email" name='email' onChange={e=> setEmail(e.target.value)} placeholder='enter your email' /> <br />
      <label htmlFor="">  Password: <br /></label>
        <input type="password" name='password' onChange={e=> setPassword(e.target.value)} placeholder='enter your password' /> <br /><br />
        <button type='submit'>Login</button>
        
      </form>
      <p>If You Don't Have An Account!!!<Link to ="/Signup">Signup</Link></p>
    </div>
  )
}

export default Login