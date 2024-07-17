import React, { useContext } from "react";
import { Context } from "../context/Context";

const Footer = () => {
    const { menuIcon } = useContext(Context);

    return (
        <>
            <div
                className={`duration-[0.4s] footer text-center w-[300px] text-[var(--text-color)] text-[13px] tracking-[0.6px] p-[10px] fixed bottom-0 left-0 max-[300px]:w-dvw ${
                    menuIcon
                        ? "left-0"
                        : "max-[1000px]:left-[-300px] max-[300px]:left-[-100dvw]"
                }`}
            >
                <p>
                    Copyright &copy; {new Date().getFullYear()} by Dev Patel |
                    All Rights reserved
                </p>
            </div>
        </>
    );
};

export default Footer;
