import { useSelector } from "react-redux";
import { useLocation,Navigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {

  const {data}=useSelector((store)=>store.auth)
  const {isAuthenticated}=data

const {pathname}=useLocation()

if(isAuthenticated){

  return children;
}

  return(
    <Navigate to='/login'
    state={{from:pathname}}
    replace
     />
  )
};


export default RequiredAuth;
