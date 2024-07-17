import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Moon, Sun, Settings, Cross } from "./Icons";

const Setting = () => {
    const {
        menuIcon,
        setMenuIcon,
        theme,
        setTheme,
        setIsSettingOpen,
        isSettingOpen,
        lightPrimaryColor,
        setLightPrimaryColor,
        darkPrimaryColor,
        setDarkPrimaryColor,
    } = useContext(Context);

    const handleSetting = () => {
        setIsSettingOpen((prev) => !prev);
    };

    return (
        <>
            <div
                className={`setting duration-[0.4s] z-50 theme fixed top-[80px] right-[25px] cursor-pointer h-[40px] w-[40px] rounded-[50%] flex justify-center items-center shadow-[0_0_10px_var(--primary-color)] bg-[var(--bg-color)] text-[var(--primary-color)] border-[var(--primary-color)] border-[2px] hover:bg-[var(--primary-color)] hover:text-[var(--bg-color)] overflow-hidden ${
                    isSettingOpen ? "rotate-[-90deg]" : ""
                }`}
                onClick={handleSetting}
            >
                {!isSettingOpen ? <Settings /> : <Cross />}
            </div>
            <div
                className={`flex justify-center items-center duration-[.5s] gap-3 transform h-[40px] z-30 fixed top-[80px] right-[25px] bg-[var(--nav-bg-color)] w-[40px] rounded-full ${
                    isSettingOpen ? "w-[230px]" : ""
                }`}
            >
                <div
                    className={`green bg-[#37b182] duration-[.5s] rounded-full h-[30px] w-[30px] cursor-pointer fixed ${
                        isSettingOpen ? "right-[50px]" : "right-[0px]"
                    }`}
                    onClick={() => {
                        if (theme === "light") {
                            setLightPrimaryColor("green");
                        } else {
                            setDarkPrimaryColor("green");
                        }
                    }}
                ></div>
                <div
                    className={`skyblue bg-[#00eeff] duration-[.5s] rounded-full h-[30px] w-[30px] cursor-pointer fixed ${
                        isSettingOpen ? "right-[85px]" : "right-[0px]"
                    }`}
                    onClick={() => {
                        if (theme === "light") {
                            setLightPrimaryColor("skyblue");
                        } else {
                            setDarkPrimaryColor("skyblue");
                        }
                    }}
                ></div>
                <div
                    className={`red bg-[#ff004f] duration-[.5s] rounded-full h-[30px] w-[30px] cursor-pointer fixed ${
                        isSettingOpen ? "right-[120px]" : "right-[0px]"
                    }`}
                    onClick={() => {
                        if (theme === "light") {
                            setLightPrimaryColor("red");
                        } else {
                            setDarkPrimaryColor("red");
                        }
                    }}
                ></div>
                <div
                    className={`purple bg-[#c969fd] duration-[.5s] rounded-full h-[30px] w-[30px] cursor-pointer fixed ${
                        isSettingOpen ? "right-[155px]" : "right-[0px]"
                    }`}
                    onClick={() => {
                        if (theme === "light") {
                            setLightPrimaryColor("purple");
                        } else {
                            setDarkPrimaryColor("purple");
                        }
                    }}
                ></div>
                <div
                    className={`blue bg-[#3170d5] duration-[.5s] rounded-full h-[30px] w-[30px] cursor-pointer fixed ${
                        isSettingOpen ? "right-[190px]" : "right-[0px]"
                    }`}
                    onClick={() => {
                        if (theme === "light") {
                            setLightPrimaryColor("blue");
                        } else {
                            setDarkPrimaryColor("blue");
                        }
                    }}
                ></div>
            </div>
        </>
    );
};

export default Setting;
