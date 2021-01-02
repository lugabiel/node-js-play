const express = require('express')
const app = express()
const port = 3000

// route to trigger to capture
app.get('/',(req,res)=>{
  res.send('hello worlds');
})

app.listen(port, ()=>{
  console.log(`example app listening on ${port}`)
})
