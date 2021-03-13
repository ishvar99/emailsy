exports.handleToken=async(req,res)=>{

 const {token} =req.body
 console.log(token);
 const charge = await stripe.charges.create({
  amount: 500,
  currency: 'inr',
  source: token.id,
  description: 'Credits worth $5',
});
console.log(charge)
req.user.credits+=5;
const user =await req.user.save();
}