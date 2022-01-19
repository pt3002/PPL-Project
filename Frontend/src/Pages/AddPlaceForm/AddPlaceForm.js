import React, { useState } from "react";

import "./AddPlaceForm.css";
import HomePage from "../HomePage/HomePage";

const AddPlaceForm = () => {
    return (

        <div className="addplace">

            <div>
                <HomePage />
            </div>
            <div>
                <h1>Form for adding places!</h1>
            </div>

        </div>
    );
}

export default AddPlaceForm;