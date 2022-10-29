import { createContext, useState } from "react";

export const AppContext = createContext();

function Apicontext({ children }) {
    const [theme, setTheme] = useState("dark")

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return ( 
        <AppContext.Provider value = { {theme: theme, toggleTheme: toggleTheme} }>
            {children}
        </AppContext.Provider>
    )
}

export default Apicontext;

// children