import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Filter_Price.css";
import HomePage from "../HomePage/HomePage";

const Filter_Price = () => {
    return(
        <div className="filterpricediv">
            <div>
                <HomePage />
            </div>
            <h1>Filter according to price</h1>
        </div>
    )
}

export default Filter_Price;