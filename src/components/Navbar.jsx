import React, { useContext, useEffect, useRef, useState } from "react";
import {
    Cross,
    Github,
    House,
    Instagram,
    LinkedIn,
    Mail,
    Menu,
    Moon,
    Project,
    Skills,
    Sun,
    User,
} from "./Icons";
import Footer from "./Footer";
import { Context } from "../context/Context";
import Setting from "./Setting";

const Navbar = () => {
    const [isRotatedTheme, setIsRotatedTheme] = useState(false);
    const NavRef = useRef();
    const ThemeRef = useRef();
    const {
        menuIcon,
        setMenuIcon,
        theme,
        setTheme,
        activeSection,
        setActiveSection,
    } = useContext(Context);

    const handleLinkClick = (e, section) => {
        e.preventDefault();
        setMenuIcon(false);

        const targetSection = document.getElementById(section);
        targetSection.scrollIntoView({ behavior: "smooth" });

        setActiveSection(section);
    };

    const handleThemeClick = () => {
        setIsRotatedTheme(true);
        setTimeout(() => {
            if (theme === "dark") {
                setTheme("light");
                localStorage.setItem("theme", "light");
            } else {
                setTheme("dark");
                localStorage.setItem("theme", "dark");
            }
            setIsRotatedTheme(false);
        }, 150);
    };

    return (
        <>
            <div
                className={`menu duration-[0.4s] fixed top-[25px] left-[25px] cursor-pointer h-[40px] w-[40px] rounded-[50%] hidden justify-center items-center border-[2px] z-50 text-[var(--primary-color)] bg-[var(--bg-color)] shadow-[0_0_10px_var(--primary-color)]  border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--bg-color)] max-[1000px]:flex`}
                onClick={() => {
                    setMenuIcon((prev) => !prev);
                }}
            >
                {menuIcon ? <Cross /> : <Menu />}
            </div>

            <div
                className={`duration-[0.4s] theme fixed top-[20px] right-[25px] cursor-pointer h-[40px] w-[40px] rounded-[50%] flex justify-center items-center z-50 shadow-[0_0_10px_var(--primary-color)] bg-[var(--bg-color)] text-[var(--primary-color)] border-[var(--primary-color)] border-[2px] hover:bg-[var(--primary-color)] hover:text-[var(--bg-color)] ${
                    isRotatedTheme ? "rotate-90" : ""
                }`}
                onClick={handleThemeClick}
                ref={ThemeRef}
            >
                {theme === "dark" ? <Sun /> : <Moon />}
            </div>

            <Setting />

            <div
                className={`header h-dvh w-[300px] py-[15px] px-[30px] duration-[0.4s] bg-[var(--nav-bg-color)] overflow-y-auto fixed left-0 bottom-0 top-0 z-10 max-[300px]:w-dvw ${
                    menuIcon
                        ? "left-0"
                        : "max-[1000px]:left-[-300px] max-[300px]:left-[-100dvw]"
                } `}
                ref={NavRef}
            >
                <div className="profile text-center my-[10px] mx-[0px] flex flex-col items-center">
                    <img
                        src="/profile.jpeg"
                        alt="Profile Image"
                        className="w-[150px] h-[150px] rounded-[50%] border-[var(--img-bg-color)] border-[10px] object-cover"
                    />
                    <h1
                        className={`text-[var(--primary-color)] font-semibold text-[25px] mt-1`}
                    >
                        Dev Patel
                    </h1>
                    <div className="social-icons text-[var(--text-color)] flex gap-3 mt-3">
                        <a
                            href="https://github.com/Devapatel0603"
                            target="_blank"
                            className="duration-[0.4s] w-[36px] h-[36px] rounded-[50%] leading-[37px] flex justify-center items-center text-[var(--primary-color)] border-[2px] border-[var(--img-bg-color)] hover:bg-[var(--primary-color)] hover:text-[var(--nav-bg-color)] hover:shadow-[0_0_10px_var(--primary-color)] shadow-none"
                        >
                            <Github />
                        </a>
                        <a
                            href="https://linkedin.com/in/devpatel0603"
                            target="_blank"
                            className="duration-[0.4s] w-[36px] h-[36px] rounded-[50%] leading-[37px] flex justify-center items-center text-[var(--primary-color)] border-[2px] border-[var(--img-bg-color)] hover:bg-[var(--primary-color)] hover:text-[var(--nav-bg-color)] hover:shadow-[0_0_10px_var(--primary-color)] shadow-none"
                        >
                            <LinkedIn />
                        </a>
                        <a
                            href="https://www.instagram.com/devpatel5435"
                            target="_blank"
                            className="duration-[0.4s] w-[36px] h-[36px] rounded-[50%] leading-[37px] flex justify-center items-center text-[var(--primary-color)] border-[2px] border-[var(--img-bg-color)] hover:bg-[var(--primary-color)] hover:text-[var(--nav-bg-color)] hover:shadow-[0_0_10px_var(--primary-color)] shadow-none"
                        >
                            <Instagram />
                        </a>
                    </div>
                </div>
                <div className="navbar mt-[30px] text-[var(--text-color)]">
                    <ul>
                        <li>
                            <a
                                href="#home"
                                onClick={(e) => handleLinkClick(e, "home")}
                                className={`flex items-center gap-[7px] py-[7px] px-[10px] my-[7px]  font-normal text-[15px] tracking-[0.6px] group ${
                                    activeSection === "home" || ""
                                        ? "text-[var(--primary-color)]"
                                        : "text-[var(--text-color)]"
                                }`}
                            >
                                <div
                                    className={`flex items-center icon group-hover:text-[var(--primary-color)] ${
                                        activeSection === "home" || ""
                                            ? "text-[var(--primary-color)]"
                                            : "text-[var(--text-color)]"
                                    }`}
                                >
                                    <House />
                                </div>
                                <p className="flex items-center group-hover:text-[var(--primary-color)]">
                                    Home
                                </p>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                onClick={(e) => handleLinkClick(e, "about")}
                                className={`flex items-center gap-[7px] py-[7px] px-[10px] my-[7px]  font-normal text-[15px] tracking-[0.6px] group ${
                                    activeSection === "about"
                                        ? "text-[var(--primary-color)]"
                                        : "text-[var(--text-color)]"
                                }`}
                            >
                                <div
                                    className={`flex items-center icon group-hover:text-[var(--primary-color)] ${
                                        activeSection === "about"
                                            ? "text-[var(--primary-color)]"
                                            : "text-[var(--text-color)]"
                                    }`}
                                >
                                    <User />
                                </div>
                                <p className="flex items-center group-hover:text-[var(--primary-color)]">
                                    About
                                </p>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                onClick={(e) => handleLinkClick(e, "projects")}
                                className={`flex items-center gap-[7px] py-[7px] px-[10px] my-[7px]  font-normal text-[15px] tracking-[0.6px] group ${
                                    activeSection === "projects"
                                        ? "text-[var(--primary-color)]"
                                        : "text-[var(--text-color)]"
                                }`}
                            >
                                <div
                                    className={`flex items-center icon group-hover:text-[var(--primary-color)] ${
                                        activeSection === "projects"
                                            ? "text-[var(--primary-color)]"
                                            : "text-[var(--text-color)]"
                                    }`}
                                >
                                    <Project />
                                </div>
                                <p className="flex items-center group-hover:text-[var(--primary-color)]">
                                    Project
                                </p>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#tech-stack"
                                onClick={(e) =>
                                    handleLinkClick(e, "tech-stack")
                                }
                                className={`flex items-center gap-[7px] py-[7px] px-[10px] my-[7px]  font-normal text-[15px] tracking-[0.6px] group ${
                                    activeSection === "tech-stack"
                                        ? "text-[var(--primary-color)]"
                                        : "text-[var(--text-color)]"
                                }`}
                            >
                                <div
                                    className={`flex items-center icon group-hover:text-[var(--primary-color)] ${
                                        activeSection === "tech-stack"
                                            ? "text-[var(--primary-color)]"
                                            : "text-[var(--text-color)]"
                                    }`}
                                >
                                    <Skills />
                                </div>
                                <p className="flex items-center group-hover:text-[var(--primary-color)]">
                                    Tech Stack
                                </p>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                onClick={(e) => handleLinkClick(e, "contact")}
                                className={`flex items-center gap-[7px] py-[7px] px-[10px] my-[7px]  font-normal text-[15px] tracking-[0.6px] group ${
                                    activeSection === "contact"
                                        ? "text-[var(--primary-color)]"
                                        : "text-[var(--text-color)]"
                                }`}
                            >
                                <div
                                    className={`flex items-center icon group-hover:text-[var(--primary-color)] ${
                                        activeSection === "contact"
                                            ? "text-[var(--primary-color)]"
                                            : "text-[var(--text-color)]"
                                    }`}
                                >
                                    <Mail />
                                </div>
                                <p className="flex items-center group-hover:text-[var(--primary-color)]">
                                    Contact
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Navbar;
