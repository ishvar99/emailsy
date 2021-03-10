require('dotenv').config()
const express =require('express')
const keys =require('./config/keys')
require('./services/passport')
const cookieSession =require('cookie-session')
const authRoutes=require('./routes/auth')
const app=express()
const path = require("path")
const PORT = 5000
const connectDB = require("./database/db")
const passport = require('passport')
//connect to database
connectDB()
app.use(cookieSession({
 maxAge:30 * 24 * 60 * 60 * 1000,
 keys:[keys.CookieKey]
}))
app.use(passport.initialize())
app.use(passport.session())
app.use('/api/auth/google',authRoutes);
if (process.env.NODE_ENV === "production") {
 app.use(express.static(path.join(__dirname, "../../client", "build")))
 app.get("*", (req, res) => {
   res.sendFile(path.join(__dirname, "../../client", "build", "index.html"))
 })
}
app.listen(process.env.PORT||PORT,()=>{
 console.log(`Server is running on PORT ${PORT}`)
})