require('dotenv').config()
const express = require('express')
const app = express()
const port =  process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req,res) =>{
    res.send('Login')
})

app.get('/register',(req,res)=>{
    res.send('<h1>Register Page</h1>')
})

app.get('/home',(req,res)=>{
    res.send("<h2>Home</h2>")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})