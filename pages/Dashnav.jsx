import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
 

function Dashnav() {
  
  return (
    <div>
      <div className='link'>
        <h1>🛒 Tech company</h1>
        
        <nav>
          
            <ul>
             
        <Link to ="/"><li>Home</li></Link>
        <Link to="/Products">Products</Link>
        <Link to="/About"><li>About</li></Link>
        <Link to="/Contact"><li>Contact</li></Link>
        <Link to ="/logout"><li>Logout</li></Link>
        </ul>
        </nav>
    </div></div>
    
  )
}

export default Dashnav