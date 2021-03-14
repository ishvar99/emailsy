const Survey = require('../models/survey')
exports.createSurvey= async(req,res)=>{
 const {title,body,subject,recipients}=req.body
 const survey =await Survey.create({
  title,
  body,
  subject,
  recipients:recipients.split(",").map((email)=>({email})),
  user:req.user.id,
  dateSent:Date.now()
 })
}
exports.listSurveys=(req,res)=>{
 
}
