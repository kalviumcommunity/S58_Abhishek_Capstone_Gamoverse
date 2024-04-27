const express = require('express');
const app = express();
require('dotenv').config();
const connection=require('./config/db');
const data_routes=require('./Routes/data_routes')



app.use(express.json())

const PORT=process.env.PORT;

app.use('/data',data_routes)




app.listen(8000, async() => {
    try {
       await connection;
       console.log("connected to DB")
    } catch (error) {
       console.log(error)
    }
     console.log(`🚀 server running on PORT: ${PORT}`);
  });