const keys=require('../config/keys')
const passport =require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User=require("../models/user")
passport.use(new GoogleStrategy({
 clientID: keys.GoogleClientID,
 clientSecret: keys.GoogleClientSecret,
 callbackURL: "/auth/google/callback"
},
async (accessToken,refreshToken,profile,done)=>{
 try{
 const foundUser= await User.findOne({googleId:profile.id})
 if(foundUser){
  done(null,foundUser)
 }
 else{
  const user =await User.create({googleId:profile.id})
  done(null,user)
 }
}catch(err){
 console.log(err)
}
}

));