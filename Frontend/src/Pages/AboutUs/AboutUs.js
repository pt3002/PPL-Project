import React, { useState } from "react";

import "./AboutUs.css";
import HomePage from "../HomePage/HomePage";

const AboutUs = (props) => {
    return (

        <div className="aboutdiv">

            <div>
                <HomePage name={props.name}/>
            </div>
            <div>
            <section className="about mx-auto" id="about">
            <div className="container">
                <div className="heading text-center">
                    <h2>About
                        <span>Us</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        <br/>
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <img src="https://i.ibb.co/qpz1hvM/About-us.jpg" alt="about" className="img-fluid" width="100%"/>
                    </div>
                    <div className="col-lg-6">
                        <h3>Lorem ipsum dolor sit amet, consectetur </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</p>
                    </div>
                </div>
                <div className="row mt-5">
                    
                    <div className="col-lg-6">
                        <h3>Lorem ipsum dolor sit amet, consectetur </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</p>
                    </div>
                    <div className="col-lg-6">
                        <img src="https://i.ibb.co/qpz1hvM/About-us.jpg" alt="about" className="img-fluid" width="100%"/>
                    </div>
                </div>
            </div>
        </section>
            </div>

        </div>
    );
}

export default AboutUs;