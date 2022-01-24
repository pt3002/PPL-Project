import React, { useState } from "react";
import "./HomePage.css";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import "bootstrap";
import { Nav, NavDropdown } from "react-bootstrap";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const HomePage = () => {
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
                            <NavLink className="navbaritem" to="/aboutus">About Us</NavLink>
                        </li>
                        <li class="dropdown">
                            <button className="btn dropdown-toggle" style={{ fontSize: 17 }} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filter By
                            </button>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" style={{ fontSize: 17 }} href="/filterpage">Price</a>
                                <a className="dropdown-item" style={{ fontSize: 17 }} href="/filterrating">Rating</a>
                                <a className="dropdown-item" style={{ fontSize: 17 }} href="/filtercreator">Creator</a>
                            </div>
                        </li>
                        <li>
                            <NavLink className="navbaritem" to="/faq">FAQs</NavLink>
                        </li>
                        <li>
                            <NavLink className="navbaritem" to="/addplace">Add</NavLink>
                        </li>
                        <li>
                            <NavLink className="navbaritem" to="/userslist">List of users</NavLink>
                        </li>
                        <li>
                            <NavLink className="navbaritem" to="/places">List of places</NavLink>
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

        </>
    );
};

export default HomePage;
