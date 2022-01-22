import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.css'
import "./AddPlaceForm.css";
import HomePage from "../HomePage/HomePage";

const AddPlaceForm = () => {

    const [place, setPlace] = useState('');
    const [bestTime, setBestTime] = useState('');
    const [cost, setEstimatedCost] = useState('');
    const [description, setDescription] = useState('');


    return (

        <div className="addplaceDiv">
            <div>
                <HomePage />
            </div>
            <div className="m-2 w-50 p-3">
                <h4>Fill the Following form to add a place</h4>
                <form>
                    <div class="mb-3">
                        <label for="Place" class="form-label">Name of the Place</label>
                        <input
                            onChange={(e) => setPlace(e.target.value)}
                            value={place} type="text" class="form-control" id="Place" placeholder="eg Taj Mahal"></input>
                    </div>
                    <div class="mb-3">
                        <label for="bestTimeToVisit" class="form-label">Best time to Visit the Place</label>
                        <input
                            onChange={(e) => setBestTime(e.target.value)}
                            value={bestTime} type="text" class="form-control" id="bestTimeToVisit" placeholder="eg June - Sept"></input>
                    </div>
                    <div class="mb-3">
                        <label for="estimatedCost" class="form-label">Estimated Cost (in ₹)</label>
                        <input
                            onChange={(e) => setEstimatedCost(e.target.value)}
                            value={cost}
                            type="number" class="form-control" id="estimatedCost" placeholder="5000"></input>
                    </div>
                    <label for="rating" class="form-label" id="black-font">Rating</label>
                    <div class="rating">
                        <input type="radio" name="rating" value="5" id="5"></input>
                        <label for="5">☆</label>
                        <input type="radio" name="rating" value="4" id="4"></input>
                        <label for="4">☆</label>
                        <input type="radio" name="rating" value="3" id="3"></input>
                        <label for="3">☆</label>
                        <input type="radio" name="rating" value="2" id="2"></input>
                        <label for="2">☆</label>
                        <input type="radio" name="rating" value="1" id="1"></input>
                        <label for="1">☆</label>
                    </div>
                    <div class="mb-3">
                        <label for="image" class="form-label">Upload an image</label>
                        <input class="form-control form-control-sm" id="image" type="file"></input>
                    </div>
                    <div class="mb-3">
                        <label for="Description" class="form-label">Description</label>
                        <textarea
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            class="form-control" id="Description" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    );
}

export default AddPlaceForm;