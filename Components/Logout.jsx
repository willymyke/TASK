import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import axios from 'axios';

function Logout() {
    const Navigate=useNavigate()
const handleLogout = () => {
    axios.post('http://localhost:2000/logout')
      .then((res) => {
        console.log(res)
        alert(res.data.message)
        Navigate('/login')
        window.location.reload()

      })
  };

  return (
    <div>
     
      
        <button onClick={handleLogout}>Logout</button>
      
         
      
    </div>
  );
}

export default Logout;
