import React, { useState } from "react";

import "./AboutUs.css";
import HomePage from "../HomePage/HomePage";
import AboutUsImage from "./AboutUs.jpg";

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
                            <h2>AboutUs</h2>
                            <p>We are dedicated to ensuring a superior user experience on our platform. <br />
                                Plan your first wonderful trip by reading our suggestions under List of Places.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <img src={AboutUsImage} alt="about" className="img-fluid" width="100%" />
                            </div>
                            <div className="col-lg-6">
                                <p>Have you ever said to yourself one of the following? <br />
                                    "I want to travel more, but I don't know the first step."<br />
                                    "How do I stay safe and healthy?"<br />
                                    "How do I maximize my time?"<br />
                                    You are not alone.<br />
                                    <br />
                                    Nurtured from the seed of a single great idea - to empower the traveller – Traveller's Arena is a pioneer in India's online travel guide/blog. Traveller's Arena came to life to empower the Indian traveller with instant travel suggestions by the travellers themselves. By using this website, you can spend less time searching the internet and being overwhelmed with information and more time doing the one thing you want to do: travel.

                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}

export default AboutUs;