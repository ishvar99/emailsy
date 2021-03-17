const _ =require('lodash')
const {Path} =require('path-parser')
const {URL}=require('url')
const Survey = require('../models/survey')
const sgMail = require("@sendgrid/mail")
const {SendGridKey} =require('../config/keys')
sgMail.setApiKey(SendGridKey)
const {sendEmail}= require('../services/sendEmail')
const keys=require('../config/keys')
const {RedirectDomainDev,RedirectDomainProd}=keys
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
 try{
  let urlY,urlN;
  if(process.env.NODE_ENV==="production"){
   urlY=`${RedirectDomainProd}/api/surveys/${survey._id}/yes`
   urlN=`${RedirectDomainProd}/api/surveys/${survey._id}/no`
  }
  else{
   urlY=`${RedirectDomainDev}/api/surveys/${survey._id}/yes`
   urlN=`${RedirectDomainDev}/api/surveys/${survey._id}/no`
  }
 await sendEmail(survey,urlY,urlN)
 req.user.credits-=1;
 const user= await req.user.save();
 return res.status(200).json(user)
 }catch(err){
  return res.status(400).json({success:false,message:'Failed to send email'})
 }
}
exports.listSurveys=(req,res)=>{
 
}
exports.thanks=(req,res)=>{
 res.json({'msg':'Thank you for feedback!'})
}
exports.surveyWebhooks=(req,res)=>{
 const p =new Path('/api/surveys/:surveyId/:response')
 const events= _.chain(req.body)
 .map(({email,url})=>{
 const pathname= new URL(url).pathname
 const match = p.test(pathname)
 if(match){
  return {email,surveyId:match.surveyId,response:match.response}
 }
 })
 .compact(events)
 .uniqBy(compactEvents,'email','surveyId');
 console.log(events)
 res.send({})
}
