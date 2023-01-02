import React,{useEffect,useState} from "react";
import { ACTION_SIGN_OUT } from "../../redux/auth/auth.actions";
import {Link,useNavigate} from 'react-router-dom'

import {useDispatch,useSelector} from 'react-redux'
import { ACTION_GET_CART } from "../../redux/cart/cart.actions";


const Navbar = () => {
const {data,loading,error}=useSelector((store)=>store.auth)
const{isAuthenticated}=data;

const navigate=useNavigate()
const dispatch=useDispatch()


const handleLoginClick=()=>{
  if(isAuthenticated){
    dispatch(ACTION_SIGN_OUT)
  }
  else{
    navigate('/login')
  }
}

useEffect(()=>{
  dispatch(ACTION_GET_CART())
},[])

const {data:cartData}=useSelector((store)=>store.cart)

  return (
    <div data-cy="navbar"  style={{display:"flex",justifyContent:"space-between"}} >
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <Link to='/' >

        <a data-cy="navbar-home-link">home</a>
        </Link>
      </div>
      <div style={{display:"flex",gap:'30px'}}>
        <div data-cy="navbar-cart-items-count">Cart:{isAuthenticated?cartData.length:0}</div>
        <button data-cy="navbar-login-logout-button"
        onClick={handleLoginClick}
        
        >{
          isAuthenticated?"Logout":"Login"
        }</button>
      </div>
    </div>
  );
};

export default Navbar;
