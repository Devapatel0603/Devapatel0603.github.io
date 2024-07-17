import React, { useContext } from "react";
import { Context } from "../context/Context";

const About = () => {
    const { theme } = useContext(Context);

    return (
        <>
            <section
                id="about"
                className="about bg-[var(--second-bg-color)] py-10 w-full"
            >
                <h1 className="font-semibold text-[31px] text-center w-full">
                    About{" "}
                    <span className="text-[var(--primary-color)]">Me</span>
                </h1>
                <div className="para flex justify-between items-center w-full pt-6 max-[1130px]:flex-col max-[1130px]:items-center max-[1130px]:gap-3">
                    <div className="image w-[50%] max-[1130px]:w-[80%] max-[1130px]:p-2 max-[715px]:w-[90%] grid place-items-center">
                        <img
                            src="/about.jpg"
                            alt="Img"
                            className={`w-[90%] duration-300 max-[1130px]:w-full`}
                        />
                    </div>
                    <div className="paragraph w-[50%] text-justify p-2 min-[1130px]:pr-7 max-[1130px]:w-[80%] max-[715px]:w-[90%]">
                        I'm Dev Patel, an aspiring MERN stack developer
                        passionate about creating dynamic, interactive websites.
                        I'm dedicated to mastering the tools and technologies
                        that drive the digital world. My goal is to contribute
                        to the web landscape by building user-friendly,
                        innovative, and visually appealing websites and
                        applications. If you have insights, advice, or
                        opportunities in web development, I'm eager to learn and
                        collaborate.
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
