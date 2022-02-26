import React, { useState, useEffect } from "react";

import "./FilterPage.css";
import HomePage from "../HomePage/HomePage";

const FilterCreator = ({ name,places }) => {
    let creators = places.map(place => place.name);
    creators = [...new Set(creators)];
    const [selectCreator, setCreator] = useState('');

    return (
        <div className="filterpagediv">
            <div>
                <HomePage name={name}/>
            </div>
            <div className="ml-2">
                <label className="titleform mx-2" for="From" >Choose Creator : </label>
                <input
                    onChange={(e) => setCreator(e.target.value)}
                    value={selectCreator}
                    list="creator" name="chooseCreator" id="chooseCreator" />
                <datalist id="creator">
                    {creators.map(person => (
                        <option value={person} />
                    ))}
                </datalist>
            </div>
            <div className="priceButton">
                <button onClick={() => window.location.reload(false)}>Click to Reset</button>
            </div>
            {places.map((place, key) => (
                (() => {
                    if (place.name == selectCreator) {
                        return (
                            <div className="card_testimonial">
                                <div className="imagecontainer" class="img-container_testimonial"> <img src={`https://travelarena.herokuapp.com/${place.image}`} alt="no image" className="imageClass" /></div>
                                <div class="card-content_testimonial">
                                    <h1> {place.title}</h1>
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

export default FilterCreator;