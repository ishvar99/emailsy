require('dotenv').config({path:'../.env'})
const express =require('express')
const passport =require('passport')
const authRoutes=require('./routes/auth')
const app=express()
const PORT = 5000
const GoogleStrategy = require('passport-google-oauth20').Strategy;
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken) {
  console.log(accessToken);
  }
));
app.use('/auth/google',authRoutes);
app.listen(process.env.PORT||PORT,()=>{
 console.log(`Server is running on PORT ${PORT}`)
})