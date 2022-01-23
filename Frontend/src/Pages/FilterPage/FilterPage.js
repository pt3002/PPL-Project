import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./FilterPage.css";
import HomePage from "../HomePage/HomePage";

const FilterPage = () => {
    const [cost, setEstimatedCost] = useState('');
    const [rating, setRating] = useState('');

    return (
        <div className="filterpagediv">
            <div>
                <HomePage />
            </div>
            <div className="ml-2">
                <h1>Price</h1>
            </div>
            <div>
                <button className="btn btn-large btn-dark" onClick={(e) => setEstimatedCost(e.target.value)} value="Under 10k">Under 10k</button>
                <button className="btn btn-large btn-dark" onClick={(e) => setEstimatedCost(e.target.value)} value="10k - 20k">10k - 20k</button>
                <button className="btn btn-large btn-dark" onClick={(e) => setEstimatedCost(e.target.value)} value="20k - 30k">20k - 30k</button>
                <button className="btn btn-large btn-dark" onClick={(e) => setEstimatedCost(e.target.value)} value="40k - 50k">40k - 50k</button>
                <button className="btn btn-large btn-dark" onClick={(e) => setEstimatedCost(e.target.value)} value="Over 50k">Over 50k</button>
            </div>
            <div>
                <button className="btn btn-large btn-warning" onClick={(e) => setRating(e.target.value)} value="1">1 and Up</button>
                <button className="btn btn-large btn-warning" onClick={(e) => setRating(e.target.value)} value="2">2 and Up</button>
                <button className="btn btn-large btn-warning" onClick={(e) => setRating(e.target.value)} value="3">3 and Up</button>
                <button className="btn btn-large btn-warning" onClick={(e) => setRating(e.target.value)} value="4">4 and Up</button>
                <button className="btn btn-large btn-warning" onClick={(e) => setRating(e.target.value)} value="5">5</button>
            </div>
            <div className="ml-2 my-3">
                <h3>Rating -- {rating}</h3>
                <h3>Budget -- {cost}</h3>
            </div>


        </div>
    )
}

export default FilterPage;