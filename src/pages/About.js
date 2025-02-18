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
            className="min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-32"
        >
            <div
                onMouseEnter={mouseEnterhandler}
                onMouseLeave={mouseLeaveHandler}
                className="container mx-auto relative px-4 sm:px-6 lg:px-8"
            >
                <div className="flex flex-col lg:flex-row items-center justify-center gap-x-12 lg:gap-x-24 text-center lg:text-left">
                    {/* Image Section */}
                    <div className="flex-1 order-2 lg:order-none flex justify-center">
                        <img
                            src={WomanImg}
                            alt="Woman"
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto"
                        />
                    </div>

                    {/* Text Content Section */}
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-80%" }}
                        transition={transition1}
                        className="flex-1 flex flex-col items-center lg:items-start justify-center space-y-6"
                    >
                        <h1 className="h1">About Us</h1>
                        <p className="max-w-xl">
                            <b className="font-primary">SR Portraits and Events</b> is a premier photography 
                            and event management company dedicated to capturing unforgettable moments and 
                            crafting seamless experiences.
                            <br />
                            <br />
                            Whether it&apos;s a grand wedding, a corporate gathering, or a personal milestone, 
                            we blend creativity, precision, and passion to bring your vision to life. With a 
                            team of skilled photographers, event planners, and creative designers, we ensure 
                            every detail is handled with excellence, making your special occasions truly memorable.
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
