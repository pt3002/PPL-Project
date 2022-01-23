import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Filter_Creator.css";
import HomePage from "../HomePage/HomePage";

const Filter_Creator = ({lists}) => {
    return(
        <div className="filtercreatordiv">
            <div>
                <HomePage />
            </div>
            <h1>Filter according to creator</h1>
            {lists.map((user,key) => (
                    <h1>{user.name}</h1>
            ))}
            
        </div>
    )
}

export default Filter_Creator;