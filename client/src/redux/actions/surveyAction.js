import axios from 'axios'
import {FETCH_USER} from './types'
export const createSurvey=(survey,history)=>{
 
 return async (dispatch)=>{
  try{
  const response = await axios.post('/api/surveys',survey)
  console.log(response.data);
  history.push("/surveys")
  dispatch({ type: FETCH_USER, payload: response.data});
  }catch(err){
   console.log(err);
  }
 }
}