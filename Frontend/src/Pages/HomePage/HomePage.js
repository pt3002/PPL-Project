import React, { useState } from "react";
import "./HomePage.css";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import "bootstrap";
import { FaUser } from "react-icons/fa";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import pic from "./Travel_Final_Logo.png";

const HomePage = (props) => {
    console.log(props.name);
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    const logOut = async (e) => {
        alert("Logged out successfully");
    }
    return (
        <>
            <nav className="main-nav">
                {/* 1st logo part  */}
                <div className="logo">
                <a href="/startingPage">
                    <img src={pic} className="Logo-Travel"></img>
                </a>
                </div>

                {/* 2nd menu part  */}
                <div
                    className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    }>
                    <ul>
                        {/* list of places */}
                        <li>
                            <NavLink className="navbaritem" to="/places">List of places</NavLink>
                        </li>
                        {/* filter by  */}
                        <li class="dropdown">
                            <button className="btn dropdown-toggle" style={{ fontSize: 17 }} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filter By
                            </button>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <NavLink className="dropdown-item" style={{ fontSize: 17 }} to="/filterpage">Price</NavLink>
                                <NavLink className="dropdown-item" style={{ fontSize: 17 }} to="/filterrating">Rating</NavLink>
                                <NavLink className="dropdown-item" style={{ fontSize: 17 }} to="/filtercreator">Creator</NavLink>
                            </div>
                        </li>
                        {/* add place */}
                        <li>
                            <NavLink className="navbaritem" to="/addplace">Add</NavLink>
                        </li>
                        {/* faq */}
                        <li>
                            <NavLink className="navbaritem" to="/faq">FAQs</NavLink>
                        </li>
                        {/* about us page */}
                        <li>
                            <NavLink className="navbaritem" to="/aboutus">About Us</NavLink>
                        </li>

                        {/* list of users */}
                        <li>
                            <NavLink className="navbaritem" to="/userslist">List of users</NavLink>
                        </li>

                        {/* profile user */}
                        <li className="dropdown">
                            <button className="btn dropdown-toggle" style={{ fontSize: 17 }} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mx-2">{localStorage.getItem("name")}</span><FaUser />
                            </button>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <NavLink className="dropdown-item" style={{ fontSize: 17 }} to="/editprofile">Profile</NavLink>
                                <NavLink className="dropdown-item" style={{ fontSize: 17 }} to="/usered">Edit/Delete Places</NavLink>
                                <NavLink className="dropdown-item" style={{ fontSize: 17 }} to="/login" onClick={logOut}>Log out</NavLink>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* 3rd social media links */}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a
                                href="https://www.facebook.com/"
                                target="##">
                                <FaFacebookSquare className="facebook" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/"
                                target="#">
                                <FaInstagramSquare className="instagram" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/"
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
