import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRoutes";
import { useContext } from "react";
// import { AppContext } from "./Context/AuthContext/AuthContextProvider"

function App() {

  // const { state, dispatch } = useContext(AppContext)
  // console.log(state)
  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App;
