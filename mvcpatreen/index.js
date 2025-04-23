const express = require('express')
const connDB = require('./config/db')
const dotenv = require('dotenv')
const app = express()
// load env
dotenv.config();
port = process.env.port

// connect to database
connDB();

app.get('/', (req,res) => {
   res.send("port is running");
})

app.listen(port,() =>{
    console.log(`server is running on port ${port}`);
})