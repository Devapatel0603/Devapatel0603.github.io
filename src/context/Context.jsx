import React, { Children, useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const [menuIcon, setMenuIcon] = useState(false);
    const [theme, setTheme] = useState(() => {
        if (localStorage.getItem("theme")) {
            return localStorage.getItem("theme");
        } else {
            return "dark";
        }
    });

    const [activeSection, setActiveSection] = useState("home");

    const allColors = ["#00eeff", "#3170d5", "#ff00f4", "#ffc107", "#c969fd"];

    const [lightPrimaryColor, setLightPrimaryColor] = useState("blue");

    const [darkPrimaryColor, setDarkPrimaryColor] = useState("purple");

    const [isSettingOpen, setIsSettingOpen] = useState(false);

    return (
        <Context.Provider
            value={{
                menuIcon,
                setMenuIcon,
                theme,
                setTheme,
                isSettingOpen,
                setIsSettingOpen,
                lightPrimaryColor,
                setLightPrimaryColor,
                darkPrimaryColor,
                setDarkPrimaryColor,
                activeSection,
                setActiveSection,
            }}
        >
            {children}
        </Context.Provider>
    );
};
