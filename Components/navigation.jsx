import React, { useEffect, useState } from 'react'
import Dashnav from '../pages/Dashnav'
import Navbar from './Navbar'

const Navigation = () => {
    const dashpanel = location.pathname.startsWith('/Dashboad')
    const [board, setBoard] = useState(false)
    useEffect(()=>{
        if (dashpanel) {
            setBoard(true)
        }else{
            setBoard(false)
        }
    },[])
  return (
    <div>
        {board ? (
            <>
                <Dashnav/>
            </>
        ) : (
            <>
                <Navbar/>
            </>
        )}
    </div>
  )
}

export default Navigation