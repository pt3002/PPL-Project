import React from 'react';
import HomePage from '../HomePage/HomePage';
import { useHistory } from "react-router-dom";

import './WelcomePage.css';

const WelcomePage = () => {
    const history = useHistory()

    return(
    <div>
        <button className="button" onClick={() => history.push("/signup")}>Signup</button>
        <button className="button" onClick={() => history.push("/login")}>Login</button>
    </div>
    );
};

export default WelcomePage;