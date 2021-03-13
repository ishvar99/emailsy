const express=require('express')
const router =express.Router();
const passport= require('passport');
const {handleToken} = require('../controllers/payment')
router.post('/',handleToken)
module.exports=router