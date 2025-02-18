import React, { useContext } from "react";
import { ImFacebook, ImTwitter, ImInstagram } from "react-icons/im";
import { CursorContext } from "../context/CursorContext";

const Socials = () => {
    const { mouseEnterhandler, mouseLeaveHandler } = useContext(CursorContext);

    return (
        <div className="hidden xl:flex ml-24">
            <ul
                onMouseEnter={mouseEnterhandler}
                onMouseLeave={mouseLeaveHandler}
                className="flex gap-x-4"
            >
                <li>
                    <a href="#" target="_blank">
                        <ImFacebook />
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <ImTwitter />
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <ImInstagram />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Socials;
