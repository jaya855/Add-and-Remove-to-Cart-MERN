const express=require('express');
const router = require('./Routes/toDoRoute')
const cors=require('cors')
const dotenv=require('dotenv')
const app=express();
const dbConnect=require('./Config/dbConnect');
dotenv.config();
app.use(cors())
app.use(express.json())

app.use('/api/v1',router);

dbConnect()
const PORT=process.env.PORT || 4000
app.listen(4000,(req,res)=>{
    console.log(`app is listening at port ${PORT}`);
})