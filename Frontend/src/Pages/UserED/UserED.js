import React, { useState, useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

import "../FilterPage/FilterPage.css";
import HomePage from "../HomePage/HomePage";

const UserED = ({ places,name }) => {
    return (
        <div className="filterpagediv">
            <div>
                <HomePage />
            </div>
            {places.map((place, key) => (
                (() => {
                    if (place.name){
                        return (
                            <div className="card_testimonial">
                                <div className="imagecontainer" class="img-container_testimonial"> <img src={`http://localhost:9002/${place.image}`} alt="no image" className="imageClass" /></div>
                                <div class="card-content_testimonial">
                                    <h1>Title : {place.title}</h1>
                                    <h2>Best Time to travel : {place.besttimetotravel}</h2>
                                    <h2>Creator : {place.name} </h2>
                                    <h2>Rating : {place.rating}</h2>
                                    <p class="feedback_testimonial">Description : {place.description}</p>
                                    <p class="author_testimonial">Price : {place.price}</p>
                                </div>
                            </div>
                        )
                    }
                  })()
            ))} 
        </div>
    )
}

export default UserED;