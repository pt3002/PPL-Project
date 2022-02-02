import React from 'react';
import HomePage from '../HomePage/HomePage';
import { useHistory } from "react-router-dom";
import Typical from 'react-typical';

import './WelcomePage.css';

const WelcomePage = () => {
    const history = useHistory()

    return (
        <div className="welcomediv">
            <div className="welcomeh1">
                <h1 className='welcomeheading'>Hi, Welcome to the website</h1>
            </div>
            <div className="welcomep">
                <p>
                    Want to{'   '}
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'Travel',
                            1000,
                            'Discover',
                            1000,
                            'Blog',
                            1000
                        ]}
                    />
                </p>
            </div>
            <div className='welcomeButton'>
                <button className="button" onClick={() => history.push("/signup")}>Signup</button>
                <button className="button" onClick={() => history.push("/login")}>Login</button>
            </div>
        </div>
    );
};

export default WelcomePage;