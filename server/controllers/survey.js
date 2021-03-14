const Survey = require('../models/survey')
const sgMail = require("@sendgrid/mail")
const {SendGridKey} =require('../config/keys')
sgMail.setApiKey(SendGridKey)
const {sendEmail}= require('../services/sendEmail')
exports.createSurvey= async(req,res)=>{
 console.log(req.body)
 const {title,body,subject,recipients}=req.body
 const survey =await Survey.create({
  title,
  body,
  subject,
  recipients:recipients.split(",").map((email)=>({email})),
  user:req.user.id,
  dateSent:Date.now()
 })
 try{
 await sendEmail(survey)
 req.user.credits-=1;
 const user= await req.user.save();
 return res.status(200).json(user)
 }catch(err){
  return res.status(400).json({success:false,message:'Failed to send email'})
 }
}
exports.listSurveys=(req,res)=>{
 
}
