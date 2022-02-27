import React, { useState, useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import axios from "axios";
import "../FilterPage/FilterPage.css";
import HomePage from "../HomePage/HomePage";
import { useHistory } from "react-router-dom";

const UserED = (props) => {
    const history = useHistory()
    const [places, setplaces] = useState([]);
    useEffect(() => {
        let name = localStorage.getItem("name");
        axios.get(`https://travelarena.herokuapp.com/places/${name}`)
            .then(res => setplaces(res.data))
            .catch(error => console.log(error));
    }, [])

    const Deletelocation = (id) => {
        console.log(id);
        console.log("we are in delete")
        axios.delete(`https://travelarena.herokuapp.com/deletelocation/${id}`)
            .then(res => window.location.reload(false))
            .catch(error => console.log(error));
         
    }
    const gotoeditpage = (id) => {
        history.push(`/editlocation/${id}`)
    }

    return (
        <div className="filterpagediv">
            <div>
                <HomePage name={props.name}/>
            </div>
            {places.map((place, key) => (
                (() => {
                    if (place.name) {
                        return (
                            <div className="card_testimonial">
                                <div className="imagecontainer" class="img-container_testimonial"> <img src={`https://travelarena.herokuapp.com/${place.image}`} alt="no image" className="imageClass" /></div>
                                <div class="card-content_testimonial">
                                    <h1>Title : {place.title}</h1>
                                    <h2>Best Time to travel : {place.besttimetotravel}</h2>
                                    <h2>Creator : {place.name} </h2>
                                    <h2>Rating : {place.rating}</h2>
                                    <p class="feedback_testimonial">Description : {place.description}</p>
                                    <p class="author_testimonial">Price : {place.price}</p>
                                    <button onClick={() => Deletelocation(place._id)}>Delete</button>
                                    <button onClick={() => gotoeditpage(place._id)}>Edit</button>
                                </div>
                            </div>
                        )
                    }
                })()
            ))}
        </div>
    )
}

export default UserED;