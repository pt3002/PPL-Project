import React, { useState,useEffect } from "react";

import "./UsersList.css";
import HomePage from "../HomePage/HomePage";

const UsersList = () => {
    return(
        <div className="userslistdiv">
            <div>
                <HomePage />
            </div>
            <h1>UsersList</h1>
        </div>
    )
}

export default UsersList;