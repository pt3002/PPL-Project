import React, { useState, useEffect } from "react";

import "./FilterPage.css";
import HomePage from "../HomePage/HomePage";
import Filter from "../Filter/Filter";

const FilterCreator = ({places}) => {

    return (
        <div className="filterpagediv">
            <div>
                <HomePage />
            </div>
            <div className="ml-2">
                <h1>Creators</h1>
            </div>
            <div>
            {places.map((place,key) => (
                <h1>{place.name}</h1>
            ))} 
            </div>
        </div>
    )
}

export default FilterCreator;