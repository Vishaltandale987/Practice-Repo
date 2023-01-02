import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import {useLocation,useNavigate} from 'react-router-dom'
import { ACTION_AUTH_SIGN_IN } from "../redux/auth/auth.actions";
const Login = () => {
const{data,loading,error}=useSelector((store)=>store.auth)
const{isAuthenticated}=data
const[loginCreds,setLoginCreds]=useState({})
const dispatch=useDispatch()
const {state}=useLocation()
const Navigate=useNavigate()


const handleChange=(e)=>{
  const {name,value}=e.target

  setLoginCreds({
    ...loginCreds,
    [name]:value
  })
}


const handleSubmit=(e)=>{
e.preventDefault()
dispatch(ACTION_AUTH_SIGN_IN(loginCreds))
}

useEffect(()=>{
  if(isAuthenticated){
    if(state==null){
      Navigate('/')
      
    }
    else if(state.form){
      Navigate(state.form,{replace:true})
    }
    else{
      Navigate('/')
    }
  }
},[isAuthenticated])

if(loading){
  return <div>...Loading</div>
  
}
else if(error){
  return <div>...error</div>
}

  return (
    <div>
      <form onSubmit={handleSubmit}
      style={{display:"flex",
      flexDirection:"column",
      margin:"auto",
      maxWidth:"200px",
      gap:"8px",
      marginTop:"40px"}}
      
      >
        <input data-cy="login-email" name="email" placeholder="email" onChange={handleChange} />
        <input data-cy="login-password" name="password" placeholder="password" onChange={handleChange} />
        <button data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
