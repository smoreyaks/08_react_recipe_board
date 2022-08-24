import { createContext } from "react";

export const ThemeContext = createContext();    // Context Provider Component


export function ThemeProvider({ children }) {


    return (
        <ThemeContext.Provider value={{ color: 'blue' }}>
            { children };
        </ThemeContext.Provider>
    )

}