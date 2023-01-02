import "./App.css";
import {Route,Routes} from 'react-router-dom'
import { Navbar } from "./components/Navbar";
import RequiredAuth from "./hoc/RequiredAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return <div className="App">
  
  <Navbar/>
  <Routes>

    <Route path='/' element={

      <RequiredAuth>
        <Home/>
      </RequiredAuth>
    } />

<Route path='/login' element={<Login/>} />

  </Routes>
  
  
  
  
  {/* code here */}</div>;
}

export default App;
