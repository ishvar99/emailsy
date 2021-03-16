import axios from 'axios'
import {CREATE_SURVEY} from './types'

export const createSurvey=(survey)=>{
 return async (dispatch)=>{
  try{
  const response = await axios.post('/api/surveys',survey)
  console.log(response.data);
  dispatch({ type: CREATE_SURVEY, payload: response.data});
  }catch(err){
   console.log(err);
  }
 }
}