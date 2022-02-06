import React, { useState, createContext, useContext } from "react";

const themes = {
    color: {
        foreground: "#FF0000",
        background: "#FFFF00", 
        color: "red"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222", 
        color: "white"
    }
};

const ThemeContext = createContext();

function Cont() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Layout/>
        </ThemeContext.Provider>
    );
}

function Layout() {
    const theme = useContext(ThemeContext);
    const [color, setColorMode] = useState(theme)

    function colorMode() {
        setColorMode(themes.color)
    }

    function darkMode() {
        setColorMode(themes.dark)
    }
    return (
        <div>
            <h1 style={color}>Use Context</h1>
            <p style={color}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <button onClick={colorMode}>Color Theme</button>
            <button onClick={darkMode}>Dark Theme</button>

        </div>
    );
}

export { Cont, Layout }