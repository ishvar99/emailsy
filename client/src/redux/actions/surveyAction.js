import axios from 'axios'
import {FETCH_USER} from './types'

export const createSurvey=(survey)=>{
 return async (dispatch)=>{
  try{
  const response = await axios.post('/api/surveys',survey)
  console.log(response.data);
  dispatch({ type: FETCH_USER, payload: response.data});
  }catch(err){
   console.log(err);
  }
 }
}