import React, { useState } from "react";
import "./AboutUs.css";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const AboutUs = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">
                {/* 1st logo part  */}
                <div className="logo">
                    <h2>
                        <span>T</span>ravel
                        <span>G</span>uide
                    </h2>
                </div>

                {/* 2nd menu part  */}
                <div
                    className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    }>
                    <ul>
                        <li>
                            <NavLink to="/aboutus">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">Filter by</NavLink>
                        </li>
                        <li>
                            <NavLink to="/faq">FAQs</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">Add</NavLink>
                        </li>
                    </ul>
                </div>

                {/* 3rd social media links */}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a
                                href="#"
                                target="##">
                                <FaFacebookSquare className="facebook" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/thapatechnical/"
                                target="#">
                                <FaInstagramSquare className="instagram" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                                target="#">
                                <FaYoutubeSquare className="youtube" />
                            </a>
                        </li>
                    </ul>

                    {/* hamburget menu start  */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </nav>

            {/* hero section  */}
            <h1>About us</h1>
        </>

    )
}

export default AboutUs;