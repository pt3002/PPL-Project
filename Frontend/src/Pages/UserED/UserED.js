import React, { useState, useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import axios from "axios";
import "../FilterPage/FilterPage.css";
import HomePage from "../HomePage/HomePage";
import { useHistory } from "react-router-dom";

const UserED = () => {
    const history = useHistory()
    const [places, setplaces] = useState([]);
    useEffect(() => {
        let name = localStorage.getItem("name");
        axios.get(`http://localhost:9002/places/${name}`)
            .then(res => setplaces(res.data))
            .catch(error => console.log(error));
    }, [])
    console.log(places)

    const Deletelocation = (id) => {
        console.log(id);
        axios.delete(`http://localhost:9002/deletelocation/${id}`)
            .then(res => console.log("deleted"))
            .catch(error => console.log(error));
        window.location.reload(false)
    }
    // const Editlocation=(id)=>{
    //     console.log(id);
    //     axios.put(`http://localhost:9002/deletelocation/${id}`)
    //       .then(res => console.log("edited"))
    //       .catch(error => console.log(error));
    // }
    const gotoeditpage = (id) => {
        history.push(`/editlocation/${id}`)
    }

    return (
        <div className="filterpagediv">
            <div>
                <HomePage />
            </div>
            {places.map((place, key) => (
                (() => {
                    if (place.name) {
                        return (
                            <div className="card_testimonial">
                                <div className="imagecontainer" class="img-container_testimonial"> <img src={`http://localhost:9002/${place.image}`} alt="no image" className="imageClass" /></div>
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