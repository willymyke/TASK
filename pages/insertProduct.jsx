import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import axios from 'axios';


function InsertProduct() {
const [name, setName]= useState('')
const [price, setPrice]= useState('')
const [category, setCategory] = useState('')
const [quantity, setQuantity]= useState('')
const [description, setDescription]= useState('')
const [image, setImage]= useState('')
const navigate = useNavigate()
function HandleSubmit(e){
  e.preventDefault()
  axios.post('http://localhost:4000/insertProduct', {name,price,category,quantity,description,image})
  .then((res) => {
    console.log(res)
    alert(res.data.message)
    navigate('/selectProduct')
  })
  .catch(err =>
    console.log('not inserted', err)
  )
}

  return (
    <div>
<form onSubmit={HandleSubmit}>
 Product Name: <br />
<input type="text" value={name} onChange={e =>setName(e.target.value)}
 placeholder='enter product Name' name='name' required /> <br /><br />
 Product Price: <br />
<input type="text" value={price} onChange={e =>setPrice(e.target.value)}
 placeholder='enter product price' name='price' required/> <br /> <br />
 Product Category: <br />
 <input type="text" value={category} onChange={e =>setCategory(e.target.value)}
 placeholder='enter product Category' name='category' required/> <br /> <br />
 Product Quantity: <br />
 <input type="text" value={quantity} onChange={e =>setQuantity(e.target.value)}
 placeholder='enter product Quantity' name='quantity' required/> <br /> <br />
 Product Discription: <br />
 <textarea name="description" value={description} onChange={e =>setDescription(e.target.value)}
 placeholder='Enter product description'  required /> <br /> <br />
 Upload product Image: <br />
 <input
    type="file" name="image" onChange={e => setImage(e.target.files[0])} accept="image/*" required/> <br /> <br />
 <button type="submit">SUBMIT</button>




</form>
    </div>
  )
}

export default InsertProduct