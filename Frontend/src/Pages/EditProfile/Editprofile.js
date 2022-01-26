import React, { useState,useEffect } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

// import './SignUpPage.css';

const Editprofile = (props) => {
    const {setLists}=props;
    const history = useHistory()
    let name=localStorage.getItem("name");
    const getuseretails=async()=>{
        let url=`http://localhost:9002/getuser/${name}`;
        let response = await fetch(url, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        });
        const temp=await response.json(); 
        // console.log(temp);
        setUser(temp[0]);
    }
    useEffect(() => {
        getuseretails();
    }, []);
   
    const [user, setUser] = useState({})
    useEffect(() => {
    }, [user]);
    
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const editprofile=async(e)=>{
        let url=`http://localhost:9002/editprofile/${user._id}`;
        delete user._id;
        let response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user)
        });
        const json=await response.json(); 
        console.log(json);
        if(json.sucess==true){
            history.push("/");
        }
        else{
            console.log("profile not edited");
        }
    }
    
    return (
        <div className="signup">
            <h1 className='signupHeading'>Sign Up</h1>
            <input disabled className='inputClass' type="text" name="name" value={user.name} placeholder='Your name' onChange={handleChange}></input>
            <input className='inputClass' type="text" name="email" value={user.email} placeholder='Your email' onChange={handleChange}></input>
            <input className='inputClass' type="text" name="stay" value={user.stay} placeholder='Where are you from?' onChange={handleChange}></input>
            <textarea className='inputClass' type="text" name="description" value={user.description} placeholder='Describe yourself' onChange={handleChange}></textarea>
            <input className='inputClass' type="text" name="contactno" value={user.contactno} placeholder='Your contact no.' onChange={handleChange}></input>
            <textarea className='inputClass' type="text" name="interests" value={user.interests} placeholder='Describe your interests' onChange={handleChange}></textarea>
            <button className="button" onClick={editprofile}>Save Changes</button>
        </div>
    );
};

export default Editprofile;