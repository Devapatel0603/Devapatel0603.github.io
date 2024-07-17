import React from "react";
import {
    C,
    CSS,
    PHP,
    FLASK,
    HTML,
    JAVA,
    JS,
    MONGODB,
    MYSQL,
    NODE,
    PYTHON,
    REACT,
} from "./Icons";

const Skills = () => {
    const skills = [
        <div className="w-full h-full">
            <CSS />
            <p className="text-center">CSS</p>
        </div>,
        <div className="w-full h-full">
            <HTML />
            <p className="text-center">HTML</p>
        </div>,
        <div className="w-full h-full">
            <JS />
            <p className="text-center">JS</p>
        </div>,
        <div className="w-full h-full">
            <REACT />
            <p className="text-center">ReactJS</p>
        </div>,

        <div className="w-full h-full">
            <MONGODB />
            <p className="text-center">MongoDB</p>
        </div>,
        <div className="w-full h-full">
            <MYSQL />
            <p className="text-center">MySQL</p>
        </div>,
        <div className="w-full h-full">
            <NODE />
            <p className="text-center">NodeJS</p>
        </div>,
        <div className="w-full h-full">
            <FLASK />
            <p className="text-center">Flask</p>
        </div>,
        <div className="w-full h-full">
            <JAVA />
            <p className="text-center">Java</p>
        </div>,
        <div className="w-full h-full">
            <PYTHON />
            <p className="text-center">Python</p>
        </div>,
        <div className="w-full h-full">
            <C />
            <p className="text-center">C</p>
        </div>,
        <div className="w-full h-full">
            <PHP />
            <p className="text-center">PHP</p>
        </div>,
    ];

    return (
        <section
            id="tech-stack"
            className="skills py-10 w-full text-[var(--text-color)] bg-[var(--second-bg-color)]"
        >
            <h1 className="font-semibold text-[31px] text-center w-full">
                Tech <span className="text-[var(--primary-color)]">Stack</span>
            </h1>
            <div className="skills w-full pt-6 grid place-items-center grid-cols-6 max-[800px]:grid-cols-4 max-[550px]:grid-cols-3 max-[430px]:grid-cols-2">
                {skills.map((skill, index) => (
                    <div key={index} className="w-[80px] h-[100px] mb-5">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
