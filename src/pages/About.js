import React, { useContext } from "react";
import WomanImg from "../img/about/woman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const About = () => {
    const { mouseEnterhandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
        <motion.section
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="section"
        >
            <div
                onMouseEnter={mouseEnterhandler}
                onMouseLeave={mouseLeaveHandler}
                className="container mx-auto h-full relative"
            >
                <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
                    <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
                        <img src={WomanImg} alt="Woman" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-80%" }}
                        transition={transition1}
                        className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col items-center justify-between"
                    >
                        <h1 className="h1">About Us</h1>
                        <p className="mb-12">
                            <b className="font-primary">
                                SR Portraits and Events
                            </b>{" "}
                            is a premier photography and event management
                            company dedicated to capturing unforgettable moments
                            and crafting seamless experiences.
                            <br />
                            <br />
                            Whether it&apos;s a grand wedding, a corporate
                            gathering, or a personal milestone, we blend
                            creativity, precision, and passion to bring your
                            vision to life. With a team of skilled
                            photographers, event planners, and creative
                            designers, we ensure every detail is handled with
                            excellence, making your special occasions truly
                            memorable.
                        </p>
                        <Link to={"/services"} className="btn">
                            View our Services
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
