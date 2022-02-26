import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Filter.css";
import HomePage from "../HomePage/HomePage";

function handlerror() {

}

const Filter = (props) => {
    //under 20k
    const [under20k, setUnder20k] = useState([])
    useEffect(() => {
        axios.get('http://localhost:9002/placesunder20k')
            .then(res => setUnder20k(res.data))
            .catch(error => handlerror());
    }, [])

    //20k-40k
    const [p2040k, setP2040k] = useState([])
    useEffect(() => {
        axios.get('http://localhost:9002/places20-40k')
            .then(res => setP2040k(res.data))
            .catch(error => handlerror());
    }, [])

    //40k-60k
    const [p4060k, setP4060k] = useState([])
    useEffect(() => {
        axios.get('http://localhost:9002/places40-60k')
            .then(res => setP4060k(res.data))
            .catch(error => handlerror());
    }, [])

    //60-100k
    const [p60100k, setP60100k] = useState([])
    useEffect(() => {
        axios.get('http://localhost:9002/places60-100k')
            .then(res => setP60100k(res.data))
            .catch(error => handlerror());
    }, [])

    //above100k
    const [above100k, setAbove100k] = useState([])
    useEffect(() => {
        axios.get('http://localhost:9002/placesover100k')
            .then(res => setAbove100k(res.data))
            .catch(error => handlerror());
    }, [])

    //rating 1 and above
    const [rating1, setRating1] = useState([])
    useEffect(() => {
        axios.get('http://localhost:9002/rating1')
            .then(res => setRating1(res.data))
            .catch(error => handlerror());
    }, [])

    //rating 2 and above
    const [rating2, setRating2] = useState([])
    useEffect(() => {
        axios.get('http://localhost:9002/rating2')
            .then(res => setRating2(res.data))
            .catch(error => handlerror());
    }, [])

    //rating 3 and above
    const [rating3, setRating3] = useState([])
    useEffect(() => {
        axios.get('http://localhost:9002/rating3')
            .then(res => setRating3(res.data))
            .catch(error => handlerror());
    }, [])

    //rating 4 and above
    const [rating4, setRating4] = useState([])
    useEffect(() => {
        axios.get('http://localhost:9002/rating4')
            .then(res => setRating4(res.data))
            .catch(error => handlerror());
    }, [])

    //rating 5 and above
    const [rating5, setRating5] = useState([])
    useEffect(() => {
        axios.get('http://localhost:9002/rating5')
            .then(res => setRating5(res.data))
            .catch(error => handlerror());
    }, [])

    if (props.category === "price") {
        if (props.price === "20000") {
            return (
                <div>
                    {under20k.length>0 ? 
                    under20k.map((place, key) => (
                        <div class="card_testimonial">
                            <div className="imagecontainer" class="img-container_testimonial"> <img src={`http://localhost:9002/${place.image}`} alt="no image" className="imageClass" /></div>
                            <div class="card-content_testimonial">
                                <h1>Title : {place.title}</h1>
                                <h2>Best Time to travel : {place.besttimetotravel}</h2>
                                <h2>Creator : {place.name} </h2>
                                <h2>Rating : {place.rating}</h2>
                                <p class="feedback_testimonial">Description : {place.description}</p>
                                <p class="author_testimonial">Price : {place.price}</p>
                            </div>
                        </div>
                    )) : <div className="NoData">No Data Available</div> }
                </div>
            )
        }

        else if (props.price === "40000") {
            return (
                <div>
                    {p2040k.length>0 ?
                    p2040k.map((place, key) => (
                        <div class="card_testimonial">
                            <div className="imagecontainer" class="img-container_testimonial"> <img src={`http://localhost:9002/${place.image}`} alt="no image" className="imageClass" /></div>
                            <div class="card-content_testimonial">
                                <h1>Title : {place.title}</h1>
                                <h2>Best Time to travel : {place.besttimetotravel}</h2>
                                <h2>Creator : {place.name} </h2>
                                <h2>Rating : {place.rating}</h2>
                                <p class="feedback_testimonial">Description : {place.description}</p>
                                <p class="author_testimonial">Price : {place.price}</p>
                            </div>
                        </div>
                    )): <div className="NoData">No Data Available</div>}
                </div>
            )
        }

        else if (props.price === "60000") {
            return (
                <div>
                    {p4060k.length > 0 ?
                    p4060k.map((place, key) => (
                        <div class="card_testimonial">
                            <div className="imagecontainer" class="img-container_testimonial"> <img src={`http://localhost:9002/${place.image}`} alt="no image" className="imageClass" /></div>
                            <div class="card-content_testimonial">
                                <h1>Title : {place.title}</h1>
                                <h2>Best Time to travel : {place.besttimetotravel}</h2>
                                <h2>Creator : {place.name} </h2>
                                <h2>Rating : {place.rating}</h2>
                                <p class="feedback_testimonial">Description : {place.description}</p>
                                <p class="author_testimonial">Price : {place.price}</p>
                            </div>
                        </div>
                    )): <div className="NoData">No Data Available</div>}
                </div>
            )
        }

        else if (props.price === "100000") {
            return (
                <div>
                    {p60100k.length > 0 ?
                    p60100k.map((place, key) => (
                        <div class="card_testimonial">
                            <div className="imagecontainer" class="img-container_testimonial"> <img src={`http://localhost:9002/${place.image}`} alt="no image" className="imageClass" /></div>
                            <div class="card-content_testimonial">
                                <h1>Title : {place.title}</h1>
                                <h2>Best Time to travel : {place.besttimetotravel}</h2>
                                <h2>Creator : {place.name} </h2>
                                <h2>Rating : {place.rating}</h2>
                                <p class="feedback_testimonial">Description : {place.description}</p>
                                <p class="author_testimonial">Price : {place.price}</p>
                            </div>
                        </div>
                    )): <div className="NoData">No Data Available</div>}
                </div>
            )
        }

        else if (props.price === "500000") {
            return (
                <div>
                    {above100k.length>0 ?
                    above100k.map((place, key) => (
                        <div class="card_testimonial">
                            <div className="imagecontainer" class="img-container_testimonial"> <img src={`http://localhost:9002/${place.image}`} alt="no image" className="imageClass" /></div>
                            <div class="card-content_testimonial">
                                <h1>Title : {place.title}</h1>
                                <h2>Best Time to travel : {place.besttimetotravel}</h2>
                                <h2>Creator : {place.name} </h2>
                                <h2>Rating : {place.rating}</h2>
                                <p class="feedback_testimonial">Description : {place.description}</p>
                                <p class="author_testimonial">Price : {place.price}</p>
                            </div>
                        </div>
                    )): <div className="NoData">No Data Available</div>}
                </div>
            )
        }
    }
    if (props.category === "rating") {
        if (props.rating === "1") {
            return (
                <div>
                    {rating1.length > 0 ?
                    rating1.map((place, key) => (
                        <div class="card_testimonial">
                            <div className="imagecontainer" class="img-container_testimonial"> <img src={`http://localhost:9002/${place.image}`} alt="no image" className="imageClass" /></div>
                            <div class="card-content_testimonial">
                                <h1>Title : {place.title}</h1>
                                <h2>Best Time to travel : {place.besttimetotravel}</h2>
                                <h2>Creator : {place.name} </h2>
                                <h2>Rating : {place.rating}</h2>
                                <p class="feedback_testimonial">Description : {place.description}</p>
                                <p class="author_testimonial">Price : {place.price}</p>
                            </div>
                        </div>
                    )): <div className="NoData">No Data Available</div>}
                </div>
            )
        }
        else if (props.rating === "2") {
            return (
                <div>
                    {rating2.length > 0 ?
                    rating2.map((place, key) => (
                        <div class="card_testimonial">
                            <div className="imagecontainer" class="img-container_testimonial"> <img src={`http://localhost:9002/${place.image}`} alt="no image" className="imageClass" /></div>
                            <div class="card-content_testimonial">
                                <h1>Title : {place.title}</h1>
                                <h2>Best Time to travel : {place.besttimetotravel}</h2>
                                <h2>Creator : {place.name} </h2>
                                <h2>Rating : {place.rating}</h2>
                                <p class="feedback_testimonial">Description : {place.description}</p>
                                <p class="author_testimonial">Price : {place.price}</p>
                            </div>
                        </div>
                    )): <div className="NoData">No Data Available</div>}
                </div>
            )
        }

        else if (props.rating === "3") {
            return (
                <div>
                    {rating3.length > 0 ?
                    rating3.map((place, key) => (
                        <div class="card_testimonial">
                            <div className="imagecontainer" class="img-container_testimonial"> <img src={`http://localhost:9002/${place.image}`} alt="no image" className="imageClass" /></div>
                            <div class="card-content_testimonial">
                                <h1>Title : {place.title}</h1>
                                <h2>Best Time to travel : {place.besttimetotravel}</h2>
                                <h2>Creator : {place.name} </h2>
                                <h2>Rating : {place.rating}</h2>
                                <p class="feedback_testimonial">Description : {place.description}</p>
                                <p class="author_testimonial">Price : {place.price}</p>
                            </div>
                        </div>
                    )): <div className="NoData">No Data Available</div>}
                </div>
            )
        }

        else if (props.rating === "4") {
            return (
                <div>
                    {rating4.length > 0 ?
                    rating4.map((place, key) => (
                        <div class="card_testimonial">
                            <div className="imagecontainer" class="img-container_testimonial"> <img src={`http://localhost:9002/${place.image}`} alt="no image" className="imageClass" /></div>
                            <div class="card-content_testimonial">
                                <h1>Title : {place.title}</h1>
                                <h2>Best Time to travel : {place.besttimetotravel}</h2>
                                <h2>Creator : {place.name} </h2>
                                <h2>Rating : {place.rating}</h2>
                                <p class="feedback_testimonial">Description : {place.description}</p>
                                <p class="author_testimonial">Price : {place.price}</p>
                            </div>
                        </div>
                    )): <div className="NoData">No Data Available</div>}
                </div>
            )
        }

        else if (props.rating === "5") {
            return (
                <div>
                    {rating5.length > 0 ?
                    rating5.map((place, key) => (
                        <div class="card_testimonial">
                            <div className="imagecontainer" class="img-container_testimonial"> <img src={`http://localhost:9002/${place.image}`} alt="no image" className="imageClass" /></div>
                            <div class="card-content_testimonial">
                                <h1>Title : {place.title}</h1>
                                <h2>Best Time to travel : {place.besttimetotravel}</h2>
                                <h2>Creator : {place.name} </h2>
                                <h2>Rating : {place.rating}</h2>
                                <p class="feedback_testimonial">Description : {place.description}</p>
                                <p class="author_testimonial">Price : {place.price}</p>
                            </div>
                        </div>
                    )): <div className="NoData">No Data Available</div>}
                </div>
            )
        }
    }
}

export default Filter;