import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SelectProduct() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return navigate('/admin-login');

    axios.get('http://localhost:4000/home', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        if (response.status !== 200) {
          navigate('/admin-login');
        } else {
          setUsername(response.data.user.username); 
          setEmail(response.data.user.email)
        }
      })
      .catch(err => {
        console.error('Error fetching user:', err);
        navigate('/admin-login');
      });
  }, []);

  const [data, setData] = useState([])

  const selectApi = () => {
    axios.get('http://localhost:4000/selectProduct')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log('data not selected', err)
        alert('data not found in db')
      })
  }
  useEffect(() => {
    selectApi()
  }, [])
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/admin-login')
  }
  return (
    <div>
      <h1>{username}</h1>
      <h1>{email}</h1>
      <button onClick={handleLogout}>Logout</button>
      <center />
      <table border="1">
        <thead>
          <tr>
            <td>Product-Name</td>
            <td>Product-Price</td>
            <td>Product-Category</td>
            <td>Product-Quantity</td>
            <td>Product-Description</td>
            <td>Product-Image</td>
            <td colSpan="2">Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((datas, index) => (
            <tr key={index}>
              <td>{datas.name}</td>
              <td>{datas.price}</td>
              <td>{datas.category}</td>
              <td>{datas.quantity}</td>
              <td>{datas.description}</td>
              <td>{datas.image}</td>

            </tr>

          ))}
        </tbody>

      </table>

    </div>
  )
}
//:::::::::::::::Function to delete::::::::::::
function HandleDelete(id) {
  axios.delete(`http://localhost:3200/delete/${id}`)
    .then(res => {
      console.log(res.data)
      alert(res.data.message), location.replace('/select')
    })
    .catch(err =>
      console.log('not deleted', err)
    )
}

export default SelectProduct