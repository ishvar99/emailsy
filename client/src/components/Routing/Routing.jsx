import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Landing from '../Landing/Landing'
import About from '../About/About'
const Routing=()=>{
return (
 <Switch>
  <Route exact path="/" component={Landing}></Route>
  <Route exact path="/about" component={About}></Route>
 </Switch>
)
}
export default Routing