import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

import './SignUpPage.css';

const SignUpPage = (props) => {
    const {setLists}=props;
    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterpassword: "",
        stay: "",
        description: "",
        contactno: "",
        interests:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const signup_api = () => {
        const { name, email, password, reEnterpassword, stay, description, contactno, interests } = user
        if (name && email && password && (password === reEnterpassword) && stay && description && contactno && interests) {
            axios.post("http://localhost:9002/signup", user)
                .then(res => alert(res.data.message))
            userupdated();
            history.push("/login")
        }
        else {
            alert("Invalid input")
        }

    }
    const userupdated=()=>{
        axios.get('http://localhost:9002/userslist')
          .then(res=>setLists(res.data))
          .catch(error => console.log(error));
          console.log("userupdatedcalled");
      }
      




    return (
        <div className="signup">
            <h1 className='signupHeading'>Sign Up</h1>
            <input className='inputClass' type="text" name="name" value={user.name} placeholder='Your name' onChange={handleChange}></input>
            <input className='inputClass' type="text" name="email" value={user.email} placeholder='Your email' onChange={handleChange}></input>
            <input className='inputClass' type="password" name="password" value={user.password} placeholder='Your password' onChange={handleChange}></input>
            <input className='inputClass' type="password" name="reEnterpassword" value={user.reEnterpassword} placeholder='Re-enter password' onChange={handleChange}></input>
            <input className='inputClass' type="text" name="stay" value={user.stay} placeholder='Where are you from?' onChange={handleChange}></input>
            <textarea className='inputClass' type="text" name="description" value={user.description} placeholder='Describe yourself' onChange={handleChange}></textarea>
            <input className='inputClass' type="text" name="contactno" value={user.contactno} placeholder='Your contact no.' onChange={handleChange}></input>
            <textarea className='inputClass' type="text" name="interests" value={user.interests} placeholder='Describe your interests' onChange={handleChange}></textarea>
            <button className="button" onClick={signup_api}>Signup</button>
            <div className='divOR'>or</div>
            <button className="button" onClick={() => history.push("/login")}>Login</button>
        </div>
    );
};

export default SignUpPage;