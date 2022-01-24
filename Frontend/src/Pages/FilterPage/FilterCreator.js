import React, { useState, useEffect } from "react";

import "./FilterPage.css";
import HomePage from "../HomePage/HomePage";
import Filter from "../Filter/Filter";

const FilterCreator = ({ places }) => {
    let creators = places.map(place => place.name);
    creators = [...new Set(creators)];
    const [selectCreator, setCreator] = useState('');


    return (
        <div className="filterpagediv">
            <div>
                <HomePage />
            </div>
            <div className="inputfield">
                <label className="titleform mx-2" for="From" >Choose Creator</label>
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
            <h2>{selectCreator}</h2>
        </div>
    )
}

export default FilterCreator;