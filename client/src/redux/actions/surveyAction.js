import axios from 'axios'
import {FETCH_USER,FETCH_SURVEYS} from './types'
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
export const fetchSurveys=(survey,history)=>{
 
 return async (dispatch)=>{
  try{
  const response = await axios.get('/api/surveys')
  console.log(response.data);
  dispatch({ type: FETCH_SURVEYS, payload: response.data});
  }catch(err){
   console.log(err);
  }
 }
}