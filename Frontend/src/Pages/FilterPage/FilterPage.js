import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./FilterPage.css";
import HomePage from "../HomePage/HomePage";

const FilterPage = () => {
    return(
        <div className="filterpagediv">
            <div>
                <HomePage />
            </div>
            <h1>Filtered Page</h1>
            
        </div>
    )
}

export default FilterPage;