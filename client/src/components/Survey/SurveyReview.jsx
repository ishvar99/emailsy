import React from 'react'

const SurveyReview = ({surveyReview}) => {
 return (
  <div>
   <h5>Please confirm your entries</h5>
   <button className='yellow darken-3 btn-flat' onClick={()=>surveyReview(false)}>
    Back
   </button>
  </div>
 )
}

export default SurveyReview
