import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

import './LoginPage.css';

const LoginPage = ({ setLoginUser }) => {

    const history = useHistory()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login_api = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
                history.push("/")
            })
    }

    return (
        <div className="login">
            <h1 className="loginHeading">Login</h1>
            <input className="inputClass" type="text" name="email" value={user.email} placeholder='Enter your email' onChange={handleChange}></input>
            <input className="inputClass" type="password" name="password" value={user.password} placeholder='Enter your password' onChange={handleChange}></input>
            <button className="button" onClick={login_api}>Login</button>
            <div className='divOR'> or</div>
            <button className="button" onClick={() => history.push("/signup")}>Signup</button>
        </div>
    );
};

export default LoginPage;