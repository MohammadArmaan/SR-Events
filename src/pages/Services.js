import React, { useContext } from "react";
import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const Services = () => {
    const { mouseEnterhandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
        <motion.section
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="section"
        >
            <div className="container mx-auto h-full relative">
                <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
                    <motion.div
                        initial={{ opacity: 0, y: "-80%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-80%" }}
                        transition={transition1}
                        onMouseEnter={mouseEnterhandler}
                        onMouseLeave={mouseLeaveHandler}
                        className="flex flex-col lg:items-start"
                    >
                        <h1 className="h1">Services</h1>
                        <p className="mb-12 max-w-sm">
                            At{" "}
                            <b className="font-primary">
                                SR Portraits and Events
                            </b>
                            , we bring your vision to life with expert
                            photography and videography. From stunning portraits
                            to candid moments, we capture emotions with timeless
                            precision.
                            <br />
                            <br />
                            Our skills in{" "}
                            <b>lighting, drone photography, and LED walls</b>
                            ensure breathtaking visuals and immersive
                            experiences. Let us blend creativity and technology
                            to make your memories unforgettable.
                        </p>

                        <Link
                            to={"/contact"}
                            className="btn mb-[30px] mx-auto lg:mx-0"
                        >
                            Hire Us
                        </Link>
                    </motion.div>
                    <div
                     onMouseEnter={mouseEnterhandler}
                     onMouseLeave={mouseLeaveHandler}
                     className="grid grid-cols-2 gap-3">
                        <div className="max-w-[250px] lg:max-w-[320px] h-[187px]lg:h-[220px] bg-accent overflow-hidden">
                            <img
                                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                                src={Image1}
                                alt="Sample"
                            />
                        </div>
                        <div className="max-w-[250px] lg:max-w-[320px] h-[187px]lg:h-[220px] bg-accent overflow-hidden">
                            <img
                                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                                src={Image2}
                                alt="Sample"
                            />
                        </div>
                        <div className="max-w-[250px] lg:max-w-[320px] h-[187px]lg:h-[220px] bg-accent overflow-hidden">
                            <img
                                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                                src={Image3}
                                alt="Sample"
                            />
                        </div>
                        <div className="max-w-[250px] lg:max-w-[320px] h-[187px]lg:h-[220px] bg-accent overflow-hidden">
                            <img
                                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                                src={Image4}
                                alt="Sample"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Services;
