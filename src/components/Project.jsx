import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import { Skills, SourceCode, Website } from "./Icons";

const Project = () => {
    const { theme } = useContext(Context);

    const projects = [
        {
            heading: "react-dynamic-hooks",
            description: `react-dynamic-hooks is a npm package which contains set of React hooks for handling infinite scrolling, cookie state management, and storage state management (session and local storage).`,
            sourceCode: "https://github.com/Devapatel0603/react-dynamic-hooks",
            website: "https://www.npmjs.com/package/react-dynamic-hooks",
        },
        {
            heading: "express-dynamic-middlewares",
            description: `This npm package secures Express apps by validating incoming data (emails, usernames, etc.) and providing custom error handling. It includes middleware to streamline asynchronous operations, enhancing development.`,
            sourceCode:
                "https://github.com/Devapatel0603/express-dynamic-middlewares",
            website:
                "https://www.npmjs.com/package/express-dynamic-middlewares",
        },
        {
            heading: "ChatVerse",
            description: `"ChatVerse" is a clone of "Google Bard," an AI chatbot similar to ChatGPT. After hearing about "ChatGPT," there's no need for more explanation about my project. 😁`,
            sourceCode: "https://github.com/Devapatel0603/ChatVerse",
            website: "",
        },
        {
            heading: "Instagram",
            description: `I am still working on this project. I am creating a full stack instagram clone`,
            sourceCode: "https://github.com/Devapatel0603/ChatVerse",
            website: "",
        },
    ];

    return (
        <>
            <section
                id="projects"
                className="project py-10 w-full text-[var(--text-color)] grid place-items-center"
            >
                <h1 className="font-semibold text-[31px] text-center w-full">
                    Project
                </h1>
                <div className="projects w-full pt-6 grid place-items-center grid-cols-3 gap-4 max-[1000px]:gap-5 max-[700px]:gap-6 max-[1130px]:px-7 max-[1130px]:grid-cols-2 min-[1130px]:px-4 max-[700px]:grid-cols-1 max-[715px]:px-0">
                    {projects.map((project) => (
                        <div
                            key={project.heading}
                            className="relative w-full rounded-[2rem] flex overflow-hidden group duration-[.6s] max-[715px]:w-[90%]"
                        >
                            <div className="image w-full transition-[ease] duration-[0.5s]">
                                <img
                                    src={
                                        theme === "dark"
                                            ? "/darkProject.webp"
                                            : "/lightProject.webp"
                                    }
                                    alt="Project Image"
                                    className="w-full h-[200px] transition-all duration-[0.5s] max-[380px]:h-[230px] hover:scale-[1.1] object-cover"
                                />
                            </div>
                            <div className="info w-full px-2 absolute bottom-0 left-0 h-full bg-[var(--secondary-color)] flex justify-center flex-col items-center text-center translate-y-full group-hover:translate-y-0 transition-[transform] duration-[0.5s] max-[380px]:px-1">
                                <h4 className="text-[16px] font-semibold max-[380px]:text-[16px]">
                                    {project.heading}
                                </h4>
                                <p className="text-[11px]">
                                    {project.description}
                                </p>
                                <div className="links flex w-full justify-around flex-col pt-1">
                                    {project.sourceCode !== "" && (
                                        <a
                                            href={project.sourceCode}
                                            target="_blank"
                                            title="Source Code"
                                            className="flex items-center gap-1 pl-[30%]"
                                        >
                                            <SourceCode />
                                            <p className="text-[11px]">
                                                Source Code
                                            </p>
                                        </a>
                                    )}
                                    {project.website !== "" && (
                                        <a
                                            href={project.website}
                                            target="_blank"
                                            title="Demo"
                                            className="flex items-center gap-1 pl-[30%]"
                                        >
                                            <Website />
                                            <p className="text-[11px]">
                                                Experience Here
                                            </p>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Project;
