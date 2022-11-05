import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AuthContext/AuthContextProvider";


// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`

const Navbar = () => {
  const {state} = useContext(AppContext)
  console.log("navbar",state.token)
  return( 
  <div>
    <h1> Navbar</h1> 
    <h3>Token:- {state.token}</h3>

    <Link to="/">
      <h3>Home</h3>
    </Link>
    <Link to="/login">
      <h3>Login</h3>
    </Link>

    <Link to="/cart">
      <h3>Cart</h3>
    </Link>
  </div>
  )
};

export default Navbar;
