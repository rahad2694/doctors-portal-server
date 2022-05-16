const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

//MiddleWares
app.use(express.json());
app.use(cors());

//global get request
app.get('/',(req,res)=>{
    res.send('Server is Running');
})


//Listening to port
app.listen(port,()=>{
    console.log('Listening to port',port);
})