import React,{useState} from 'react';
import axios from 'axios';

import './LoginPage.css';

const LoginPage = () => {
    const [user,setUser]=useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const login_api = () => {
        axios.post("http://localhost:9002/login",user)
        .then(res => console.log(res))
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} placeholder='Enter your email' onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder='Enter your password' onChange={ handleChange }></input>
            <div className="button" onClick={login_api}>Login</div>
            <div>or</div>
            <div className="button">Signup</div>
        </div>
    );
};

export default LoginPage;