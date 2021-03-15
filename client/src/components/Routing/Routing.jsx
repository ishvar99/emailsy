import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Landing from '../Landing/Landing'
import Dashboard from '../Dashboard/Dashboard'
import Survey from '../Survey/Survey'
const Routing=()=>{
return (
 <Switch>
  <Route exact path="/" component={Landing}></Route>
  <Route exact path="/surveys" component={Dashboard}></Route>
  <Route exact path="/surveys/new" component={Survey}></Route>
 </Switch>
)
}
export default Routing