import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

import "./Filter.css";
import HomePage from "../HomePage/HomePage";

function fnfilter(type,price){
        return(
            <h1>Results after filtering according to price</h1>
        )
}

const Filter = (props) => {
    return(
        <h1>{props.category}</h1>
    )
    
}

export default Filter;