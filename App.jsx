import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Dashboad from './pages/Dashboad'
import Navigation from './Components/navigation'
import Logout from './Components/Logout'
function App() {
  return (
    <div  className='body'>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboad' element={<Dashboad/>}/>
        <Route path='/logout' element={<Logout/>}/>
         
        

        
         
      </Routes>
    </div>
  )
}

export default App