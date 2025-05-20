import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
 

function Navbar() {
  
  return (
    <div>
      <div className='link'>
        <h1>🛒 Tech company</h1>
        
        <nav>
          
            <ul>
             
        
        <Link to ="/Signup"><li>Register</li></Link>
        </ul>
        </nav>
    </div></div>
    
  )
}

export default Navbar