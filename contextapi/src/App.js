import './App.css';
import { useContext } from "react"
import{ AppContext } from "./Compounts/Apicontext"

const style = {
  light:{
    color:"black",
    background: "white"
  },
  dark:{
    color:"white",
    background: "grey"
  }
}

function App() {
  const value = useContext(AppContext)
  console.log(value)

  return (
    <div className="App" style={value.theme === "dark" ? {...style.dark} :{...style.light}}>
    
    <h1>ass</h1>
    <p>Theme is {value.theme}</p>
    <button onClick={value.toggleTheme}>Change Theme</button>
    
    </div>
  );
}

export default App;
