import React from 'react'

const SurveyField = ({input,label,meta:{error,touched}}) => {
 return (
  <div>
   <input {...input} placeholder={label} style={{marginBottom:'5px'}}/>
   <div className="red-text" style={{marginBottom:'20px'}}>
   {touched && error}
   </div>
  
  </div>
 )
}

export default SurveyField
