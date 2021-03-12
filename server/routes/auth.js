const express=require('express')
const router =express.Router();
const passport= require('passport');
const {currentUser,logoutUser}=require('../controllers/auth')
router.get('/',passport.authenticate('google',{
 scope:['email','profile']}))
router.get('/callback',passport.authenticate('google'),(req,res)=>res.redirect('/surveys')) //user redirected after authentication and passport tries to authenticate the code query parameter
router.get('/logout',logoutUser)
router.get('/me',currentUser)
module.exports=router