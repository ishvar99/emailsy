const express=require('express')
const requireLogin =require('../middlewares/requireLogin')
const requireCredits =require('../middlewares/requireCredits')
const router =express.Router();
const {listSurveys,createSurvey} = require('../controllers/survey')
router.get('/',requireLogin,listSurveys)
router.post('/',requireLogin,requireCredits,createSurvey)
module.exports=router