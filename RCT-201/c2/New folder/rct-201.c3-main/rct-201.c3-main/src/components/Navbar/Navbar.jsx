import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/auth/auth.actions";



const Navbar = () => {

  const { isLoggedIn , token} =useSelector((store)=> store.auth)
  const dipatch = useDispatch()

  const navigate = useNavigate();
  const handleLoginClick = () => {
    // login screen
    if (isLoggedIn) {
      logout(dipatch);
      // he wants to logout
      navigate("./");

    } else {
      // he wants to login
      navigate("/login");
    }
  };

  const {data:cartData}=useSelector((store)=>store.cart)


  return (
    <div style={{ padding: "10px", display: "flex", gap: "20px" }}>
      Navbar:
      <Link to="./">Home</Link>
      
      <button onClick={handleLoginClick}>
        {/* Spacer */}
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      <p>Token:{token}</p>
      <div data-cy="navbar-cart-items-count">Cart:{isLoggedIn?cartData.length:0}</div>
    </div>
  );
};

export default Navbar;
