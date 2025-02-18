import React, { useContext } from "react";
import Socials from "./Socials";
import MobileNav from "./MobileNav";
import Logo from "../img/header/logo.png";
import { Link } from "react-router-dom";
import { CursorContext } from "../context/CursorContext";

const Header = () => {
    const { mouseEnterhandler, mouseLeaveHandler } = useContext(CursorContext);

    return (
        <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
            <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
                {/* Logo */}
                <Link
                    onMouseEnter={mouseEnterhandler}
                    onMouseLeave={mouseLeaveHandler}
                    to={"/"}
                    className="max-w-[200px]"
                >
                    <img
                        onMouseEnter={mouseEnterhandler}
                        onMouseLeave={mouseLeaveHandler}
                        src={Logo}
                        alt="Logo"
                        height={250}
                        width={250}
                    />
                </Link>
                <nav
                    onMouseEnter={mouseEnterhandler}
                    onMouseLeave={mouseLeaveHandler}
                    className="hidden xl:flex gap-x-12 font-semibold"
                >
                    <Link
                        to={"/"}
                        className="text-[#696c6d] hover:text-primary transition"
                    >
                        Home
                    </Link>
                    <Link
                        to={"/about"}
                        className="text-[#696c6d] hover:text-primary transition"
                    >
                        About
                    </Link>
                    <Link
                        to={"/services"}
                        className="text-[#696c6d] hover:text-primary transition"
                    >
                        Services
                    </Link>
                    <Link
                        to={"/contact"}
                        className="text-[#696c6d] hover:text-primary transition"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
            <Socials />
            <MobileNav />
        </header>
    );
};

export default Header;
