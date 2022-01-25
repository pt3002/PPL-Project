import React from 'react';
import HomePage from '../HomePage/HomePage';
import { useHistory } from "react-router-dom";
import Typical from 'react-typical';

import './WelcomePage.css';

const WelcomePage = () => {
    const history = useHistory()

    return(
    <div className="welcomediv">
        <h1 className="welcomeh1">Hi Welcome to the website</h1>
        <p className="welcomep">
            Want to{' '}
            <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                    'Travel' ,
                    100000,
                    'Discover',
                    100000,
                    'Blog',
                    100000
                ]}
            />
        </p>
        <button className="button" onClick={() => history.push("/signup")}>Signup</button>
        <button className="button" onClick={() => history.push("/login")}>Login</button>
    </div>
    );
};

export default WelcomePage;