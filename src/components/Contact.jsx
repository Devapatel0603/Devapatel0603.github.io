import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import BtnLoading from "./BtnLoading";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(import.meta.env.VITE_SHEET_URL, {
                Name: formData.name,
                Email: formData.email,
                Message: formData.message,
            });
            if (res.status === 201) {
                toast.success("Message sent successfully");
            }
        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section
                id="contact"
                className="contact pt-10 w-full text-[var(--text-color)] grid place-items-center"
            >
                <h1 className="font-semibold text-[31px] text-center w-full">
                    Contact
                    <span className="text-[var(--primary-color)]"> Me</span>
                </h1>
                <div className="skills w-[80%] max-[768px]:w-[90%] my-[1rem] mx-auto text-center mb-[3rem] pt-6">
                    <form
                        method="post"
                        onSubmit={(e) => sendMessage(e)}
                        id="sheetdb-form"
                    >
                        <div className="details flex justify-between flex-wrap">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                                className="w-[49%] pl-[1rem] py-[1rem] text-[1rem] bg-[--second-bg-color] rounded-[0.8rem] max-[500px]:w-full max-[580px]:text-[14px]"
                                required
                                autoComplete="off"
                                onChange={handleInput}
                                value={formData.name}
                            />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                                className="w-[49%] pl-[1rem] py-[1rem] text-[1rem] bg-[--second-bg-color] rounded-[0.8rem] max-[500px]:w-full max-[500px]:mt-2 max-[580px]:text-[14px]"
                                required
                                autoComplete="off"
                                onChange={handleInput}
                                value={formData.email}
                            />
                        </div>
                        <div className="name mt-4 max-[500px]:mt-2">
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Message"
                                className="resize-none w-full pl-[1rem] py-[1rem] text-[1rem] bg-[--second-bg-color] rounded-[0.8rem] max-[580px]:text-[14px]"
                                cols="30"
                                rows="10"
                                required
                                autoComplete="off"
                                onChange={handleInput}
                                value={formData.message}
                            />
                        </div>
                        {!loading ? (
                            <input
                                type="submit"
                                value="Send Message"
                                className="cursor-pointer mt-3 duration-[0.3s] inline-block py-[10px] px-[26px] bg-[var(--primary-color)] rounded-[4rem] shadow-[0_0_.7rem_var(--primary-color)] text-[14px] text-[--second-bg-color] tracking-[1px] font-[600] max-[500px]:mt-2 hover:shadow-none"
                            />
                        ) : (
                            <BtnLoading />
                        )}
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;
