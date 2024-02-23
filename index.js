require('dotenv').config()
const express = require('express')
// import express from "express"
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('anubratadotcom')
})

app.get('/login', (req,res)=>{
    res.send('<h1> login at youtube</h1>')
})

app.get('/yotube',(req,res)=>{
    res.send('<h2>Sonai Gaming</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})