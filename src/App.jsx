import { useContext, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Context } from "./context/Context";
import { ToastContainer } from "react-toastify";

const App = () => {
    const { theme, lightPrimaryColor, darkPrimaryColor, setActiveSection } =
        useContext(Context);

    const sectionRefs = useRef({});

    const sections = ["home", "about", "projects", "tech-stack", "contact"];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                const sectionElement = sectionRefs.current[section];
                if (sectionElement) {
                    const sectionTop = sectionElement.offsetTop;
                    const sectionHeight = sectionElement.offsetHeight;

                    if (
                        scrollPosition >= sectionTop &&
                        scrollPosition < sectionTop + sectionHeight
                    ) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sections, setActiveSection]);

    return (
        <>
            <div
                className={`${theme} bg-[var(--bg-color)] min-h-dvh transition-[400ms] ${
                    theme === "light" ? lightPrimaryColor : darkPrimaryColor
                } scrollbar-none`}
            >
                <Navbar />
                <div className="main duration-[0.4s] ml-[300px] text-[var(--text-color)] max-[1000px]:ml-0 scrollbar-none">
                    <div
                        id="home"
                        ref={(el) => (sectionRefs.current.home = el)}
                    >
                        <Home />
                    </div>
                    <div
                        id="about"
                        ref={(el) => (sectionRefs.current.about = el)}
                    >
                        <About />
                    </div>
                    <div
                        id="projects"
                        ref={(el) => (sectionRefs.current.projects = el)}
                    >
                        <Project />
                    </div>
                    <div
                        id="tech-stack"
                        ref={(el) => (sectionRefs.current["tech-stack"] = el)}
                    >
                        <Skills />
                    </div>
                    <div
                        id="contact"
                        ref={(el) => (sectionRefs.current.contact = el)}
                    >
                        <Contact />
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                theme={theme === "dark" ? "dark" : "light"}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
};

export default App;
