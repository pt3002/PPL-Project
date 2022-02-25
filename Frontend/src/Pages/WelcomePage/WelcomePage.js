import React from 'react';
import HomePage from '../HomePage/HomePage';
import { useHistory } from "react-router-dom";
import Typical from 'react-typical';
import logo from './logo.PNG';

import './WelcomePage.css';

const WelcomePage = () => {
    const history = useHistory()

    return (
        <div className="welcomediv">
            <div className='welcomeh1'>
                <img src={logo}></img>
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
                            1000,
                            'Explore',
                            1000
                        ]}
                    />
                </p>
            </div>
            <div className='welcomeButton'>
                <span className='whitebg'>
                    <button className="button" onClick={() => history.push("/signup")}>Signup</button>
                </span>
                <span className='whitebg'>
                    <button className="button" onClick={() => history.push("/login")}>Login</button>
                </span>
            </div>
        </div>
    );
};

export default WelcomePage;