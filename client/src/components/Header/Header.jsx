import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {FetchUser} from '../../redux/actions/authAction'
import Payment from '../Payment/Payment'
const Header = () => {
 const auth = useSelector((state) => state.auth)
 const dispatch = useDispatch()
 const renderContent=()=>{
  switch(auth){
   case null:
    return;
    case false:
     return <li><a href="/api/auth/google">Login With Google</a></li>
     default:
      return [
        <li key="1"><Payment/></li>,
      <li key="2"><a href="/api/auth/google/logout">Logout</a></li>
    ]
  }
 }
 useEffect(() => {
  dispatch(FetchUser())
}, [])
 return (
    <nav>
    <div className="nav-wrapper">
      <Link to={auth?'/surveys':'/'} className="left p-2 brand-logo">Emailsy</Link>
      <ul className="right">
        {renderContent()}
      </ul>
    </div>
  </nav>
  
 )
}

export default Header
