const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const session = require('express-session')
const app = express()
const port= 2000

//middleware::::::::::
app.use(express.json())
app.use(cors())


//Connection:::::::::

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fullstack'
})
conn.connect((err) => {
    if (err) {
        console.log('Failed to connect', err)
    } else {
        console.log('Database connected')
    }
})
///:::::Registeration:::::::::
app.post('/Signup',(req,res)=>{
    const {username,email, password}=req.body
    const sql = "INSERT INTO `users`(`username`, `email`, `password`) VALUES (?,?,?)"
    conn.query(sql,[username, email, password],(err,result)=>{
      if(err){
        console.log("data can not registered!!",err)
        res.json({message:"data can notregistered!!"})
      }  else{
        console.log("user registered well!!")
        res.json({message:"User Registered Welll!!!"})
      }
    })
})
// ::::::::::Login::::::
app.post('/login',(req,res)=>{
  const { email, password }=req.body
  const sql = "SELECT * FROM users WHERE email = ?"
  conn.query(sql,[email],(err,result)=>{
    if(err){console.log(err)}
    else{
      if(result.length == 0){
        res.json({message: "user doesn't exist", err: true})
      }
      const user = result[0]
      if (user.password === password) {
        res.json({message: "Welcome "+user.username, err: false})
      }else{
        res.json({message: "Wrong email or password ", err: true})
      }
    }
  })
})


// Session setup
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // use secure: true in production with HTTPS
}));

// Logout endpoint
app.post('/logout', (req, res) => {
  req.session.destroy(err => {
      if (err) {
          return res.status(500).json({ message: 'Logout failed' });
      }
      res.clearCookie('connect.sid'); // default cookie name
      res.json({ message: 'Logged out' });
  });
});

  
//::::::::::PRODUCT INSERTION:::::::::::

app.post('/insertProduct', (req, res) => {
  const { name, price, category, quantity, description, image } = req.body;
  if (!name || !price || !category || !quantity || !description || !image) {
      return res.status(400).json({ message: 'All product fields are required.' });
  }
  const sql = 'INSERT INTO `products`(`name`, `price`, `category`, `quantity`, `description`, `image`) VALUES (?, ?, ?, ?, ?, ?)'

  conn.query(sql, [name, price, category, quantity, description, image], (err, result) => {
      if (err) {
          console.log("Unable to insert", err);
          res.json({ message: 'Insertion failed' });
      } else {
          console.log("Insertion successful", result);
          res.json({ message: 'Insertion successful' }); // fixed here
      }
  });
});


//::::::::::://SELECTION::::::::::::
app.get('/selectProduct', (req, res) => {
  const sql = "SELECT * FROM products "
  conn.query(sql, (err, result) => {
      if (err) {
          res.json({ message: 'not able to select???' })
      } else {
          res.json(result)

      }
  })
})
    app.listen(port,()=>{
      console.log("server is running on 2K")
    })