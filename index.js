const express = require('express');
require('dotenv').config();
const PORT =  process.env.PORT || 8002;

const app = express();

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})
