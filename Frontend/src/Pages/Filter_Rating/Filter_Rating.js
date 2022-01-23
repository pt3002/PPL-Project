import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Filter_Rating.css";
import HomePage from "../HomePage/HomePage";

const Filter_Rating = () => {
    return(
        <div className="filterratingdiv">
            <div>
                <HomePage />
            </div>
            <h1>Filter according to rating</h1>
        </div>
    )
}

export default Filter_Rating;