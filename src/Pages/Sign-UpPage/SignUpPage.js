import React, { useState } from 'react';

import './SignUpPage.css';

const SignUpPage = () => {
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterpassword:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    return (
        <div className="signup">
            <h1>signup</h1>
            <input type="text" name="name" value={user.name} placeholder='Your name' onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder='Your email' onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder='Your password' onChange={ handleChange }></input>
            <input type="password" name="reEnterpassword" value={user.reEnterpassword} placeholder='Re-enter password' onChange={ handleChange }></input>
            <div className="button">Signup</div>
            <div>or</div>
            <div className="button">Login</div>
        </div>
    );
};

export default SignUpPage;