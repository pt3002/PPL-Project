import React, { useState,useEffect } from "react";

import "./UsersList.css";
import HomePage from "../HomePage/HomePage";

const UsersList = ({name,lists}) => {
    return(
        <div className="userslistdiv">
            <div>
                <HomePage name={name}/>
            </div>
            {lists.map((user,key) => (
                <div class="card_testimonial">
                    <div class="card-content_testimonial">
                        <h1>{user.name}</h1>
                        <h2>{user.email}</h2>
                        <p class="feedback_testimonial">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia odio dolorem amet, sunt magnam asperiores exercitationem consequuntur? Molestias asperiores rerum doloremque reiciendis.</p>
                        <p class="author_testimonial">By ABC</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UsersList;