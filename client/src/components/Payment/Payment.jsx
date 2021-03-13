import StripeCheckout from 'react-stripe-checkout'

import React from 'react'

const Payment = () => {
 console.log(process.env.REACT_APP_STRIPE_KEY)
 return (
  <StripeCheckout
   amount={500}
   token={(token)=>console.log(token)}  //stripe verify token first
   stripeKey={process.env.REACT_APP_STRIPE_KEY}
  />
 )
}

export default Payment
