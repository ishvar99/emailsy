import {CREATE_SURVEY} from '../actions/types'
// eslint-disable-next-line import/no-anonymous-default-export
export default (state=null,action)=>{
 switch(action.type){
  case CREATE_SURVEY:{
    return action.payload
  }
  default:
   return state;
 }
}