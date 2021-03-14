const mongoose =require('mongoose')

const surveySchema= new mongoose.Schema({
 user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
 title:String,
 Subject:String,
 body:String,
 recipients:[{
  email:String,
  responded:{
   type:Boolean,
   default:false
  },
  dateSent:Date,
  lastResponded:Date
 }],
 yes:{
  type:Number,
  default:0
 },
 no:{
  type:Number,
  default:0
 },
})

module.exports=mongoose.model('user',userSchema)
