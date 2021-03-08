require('dotenv').config({path:'../.env'})
const express =require('express')
require('./services/passport')
const authRoutes=require('./routes/auth')
const app=express()
const PORT = 5000
const connectDB = require("./database/db")
//connect to database
connectDB()
app.use('/auth/google',authRoutes);
app.listen(process.env.PORT||PORT,()=>{
 console.log(`Server is running on PORT ${PORT}`)
})