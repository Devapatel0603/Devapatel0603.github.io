import React from "react";
import { ReactTyped } from "react-typed";

const Home = () => {
    return (
        <>
            <section
                className="home min-h-[100dvh] flex py-[30px] justify-between items-center max-[715px]:block w-full tracking-[0.6px] max-[715px]:pt-[100px] max-[715px]:pb-[30px]"
                id="home"
            >
                <div className="hello w-[50%] pl-[10%] max-[715px]:w-[100%] max-[715px]:pl-[20%] max-[315px]:pl-[5%] max-[335px]:pl-[7%] max-[400px]:pl-[10%] max-[500px]:pl-[15%] max-[715px]:pb-[25px]">
                    <h2 className="text-[28px] max-[315px]:text-[26px]">
                        Hii, It's me
                    </h2>
                    <h1 className="text-[33px] max-[315px]:text-[31px] font-semibold text-[var(--primary-color)]">
                        Dev Patel
                    </h1>
                    <p className="text-[24px] max-[315px]:text-[22px]">
                        I am a{" "}
                        <span className="auto-input text-[var(--primary-color)]">
                            <ReactTyped
                                strings={["Web Developer", "Student"]}
                                typeSpeed={60}
                                backSpeed={60}
                                loop
                            />
                        </span>
                    </p>
                </div>
                <div className="image w-[50%] flex justify-center items-center text-left flex-col max-[715px]:w-[100%]">
                    
                </div>
            </section>
        </>
    );
};

export default Home;
