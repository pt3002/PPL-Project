import React, { useState, useEffect } from "react";

import "./UsersList.css";
import HomePage from "../HomePage/HomePage";

const UsersList = ({ lists }) => {
    return (
        <div className="userslistdiv">
            <div>
                <HomePage name={name} />
            </div>
            {lists.map((user, key) => (
                <div class="card_testimonial1">
                    <div class="card-content_testimonial1">
                        <h1>Name: {user.name}</h1>
                        <p class="feedback_testimonial1">"{user.description}"</p>
                        <p class="feedback_testimonial1">Interests: {user.interests}</p>
                        <p class="author_testimonial1">From: {user.stay}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UsersList;