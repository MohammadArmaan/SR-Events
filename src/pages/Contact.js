import React, { useContext } from "react";
import WomanImg from "../img/contact/woman.png";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const Contact = () => {
    const { mouseEnterhandler, mouseLeaveHandler } = useContext(CursorContext);

    return (
        <motion.section
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="section bg-white"
        >
            <div className="container mx-auto h-full">
                <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "100%" }}
                        transition={transition1}
                        className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10"
                    ></motion.div>
                    <div
                        onMouseEnter={mouseEnterhandler}
                        onMouseLeave={mouseLeaveHandler}
                        className="lg:flex-1 lg:pt-32 px-4"
                    >
                        <h1 className="h1">Contact Us</h1>
                        <p className="mb-12">
                            We would love to get suggestions from you.
                        </p>
                        <form className="flex flex-col gap-y-4">
                            <div className="flex gap-x-10">
                                <input
                                    className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#7578679]"
                                    type="text"
                                    placeholder="Your name"
                                />
                                <input
                                    className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#7578679]"
                                    type="email"
                                    placeholder="Your email address"
                                />
                            </div>
                            <input
                                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#7578679]"
                                type="text"
                                placeholder="Your message"
                            />
                            <button className="btn mb-[30px] mx-auto lg:mx-0 self-start">
                                Send it
                            </button>
                        </form>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "100%" }}
                        transition={{ transition1: transition1, duration: 1.5 }}
                        onMouseEnter={mouseEnterhandler}
                        onMouseLeave={mouseLeaveHandler}
                        className="lg-flex-1"
                    >
                        <img src={WomanImg} alt="Woman" />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
