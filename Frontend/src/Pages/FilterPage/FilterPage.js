import React, { useState, useEffect } from "react";

import "./FilterPage.css";
import HomePage from "../HomePage/HomePage";
import Filter from "../Filter/Filter";

const FilterPage = (props) => {
    const [cost, setEstimatedCost] = useState('');
    const [rating, setRating] = useState('');

    return (
        <div className="filterpagediv">
            <div>
                <HomePage name={props.name}/>
            </div>
            <div className="ml-2">
                <h1>Price</h1>
            </div>
            <div className="priceButton">
                <button className="btn btn-large btn-dark" onClick={(e) => setEstimatedCost(e.target.value)} value="20000">Under 20k</button>
                <button className="btn btn-large btn-dark" onClick={(e) => setEstimatedCost(e.target.value)} value="40000">20k - 40k</button>
                <button className="btn btn-large btn-dark" onClick={(e) => setEstimatedCost(e.target.value)} value="60000">40k - 60k</button>
                <button className="btn btn-large btn-dark" onClick={(e) => setEstimatedCost(e.target.value)} value="100000">60k - 100k</button>
                <button className="btn btn-large btn-dark" onClick={(e) => setEstimatedCost(e.target.value)} value="500000">Over 100k</button>
                {cost != '' &&
                    <Filter category={"price"} price={cost} name={props.name}/>
                }
            </div>
        </div>
    )
}

export default FilterPage;