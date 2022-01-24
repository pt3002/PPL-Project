import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./FilterPage.css";
import HomePage from "../HomePage/HomePage";
import Filter from "../Filter/Filter";

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
                <button className="btn btn-large btn-dark" onClick={(e) => setEstimatedCost(e.target.value)} value="20000">Under 20k</button>
                <button className="btn btn-large btn-dark" onClick={(e) => setEstimatedCost(e.target.value)} value="40000">20k - 40k</button>
                <button className="btn btn-large btn-dark" onClick={(e) => setEstimatedCost(e.target.value)} value="60000">40k - 60k</button>
                <button className="btn btn-large btn-dark" onClick={(e) => setEstimatedCost(e.target.value)} value="1000000">60k - 100k</button>
                <button className="btn btn-large btn-dark" onClick={(e) => setEstimatedCost(e.target.value)} value="5000000">Over 100k</button>
                {cost!='' &&
                    <button className="btn btn-large btn-warning">
                        <NavLink to="/filter" category="price" price={cost}>See filtered places according to cost?</NavLink>
                    </button>
                }
            </div>
            <div className="ml-2">
                <h1>Rating</h1>
            </div>
            <div>
                <button className="btn btn-large btn-warning" onClick={(e) => setRating(e.target.value)} value="1">1 and Up</button>
                <button className="btn btn-large btn-warning" onClick={(e) => setRating(e.target.value)} value="2">2 and Up</button>
                <button className="btn btn-large btn-warning" onClick={(e) => setRating(e.target.value)} value="3">3 and Up</button>
                <button className="btn btn-large btn-warning" onClick={(e) => setRating(e.target.value)} value="4">4 and Up</button>
                <button className="btn btn-large btn-warning" onClick={(e) => setRating(e.target.value)} value="5">5</button>
                {rating!='' &&
                    <button className="btn btn-large btn-dark">See filtered places according to rating?</button>
                }
            </div>
            <div className="ml-2 my-3">
                <h3>Rating -- {rating}</h3>
                <h3>Budget -- {cost}</h3>
            </div>


        </div>
    )
}

export default FilterPage;