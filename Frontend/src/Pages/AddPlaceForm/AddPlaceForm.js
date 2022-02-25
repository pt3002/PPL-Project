import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css'
import "./AddPlaceForm.css";
import HomePage from "../HomePage/HomePage";

const AddPlaceForm = (props) => {
    // const name="Siddhesh Pawar"
    console.log(props.name);
    const { setPlaces } = props;
    const [place, setPlace] = useState('');
    const [bestTimeFrom, setBestTimeFrom] = useState('');
    const [bestTimeTo, setBestTimeTo] = useState('');
    const bestTime = bestTimeFrom.concat('-', bestTimeTo);
    const [cost, setEstimatedCost] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setrating] = useState('');
    const [prewurl, setprewurl] = useState();
    const [isvalid, setisvalid] = useState(false);
    console.log(rating);
    const [file, setfile] = useState();
    const [fetchurl, setfetchurl] = useState("");

    const addlocation = async (e) => {
        e.preventDefault();
        console.log("addcontactworks");
        let name = localStorage.getItem("name");
        const formdata = new FormData();
        if (place && cost && description && bestTime && rating && file) {
            formdata.append("name", name);
            formdata.append("title", place);
            formdata.append("price", cost);
            formdata.append("description", description);
            formdata.append("besttimetotravel", bestTime);
            formdata.append("rating", rating);
            formdata.append("image", file);
            // for (var key of formdata.entries()) {
            // 	console.log(key[0] + ', ' + key[1])
            // }
            let url = "http://localhost:9002/addlocationdetails";
            let response = await fetch(url, {
                method: 'POST',
                body: formdata
            });
            const json = await response.json();
            console.log(json);
            if (json.status) {
                // console.log(json.urltoimage);
                setfetchurl(json.urltoimage);
                placeadded();
                alert("Your form has been submitted !!");
                setPlace("");
                setBestTimeFrom("");
                setBestTimeTo("");
                setEstimatedCost("");
                setDescription("");
                setfile(null);
                setprewurl("");
                setfetchurl("");
                document.getElementById("1").click();
                document.getElementById("image").value="";
                // console.log(fetchurl);
            }
        }
        else {
            alert("Please fill the form completely");
        }
    }

    useEffect(() => {
        if (!file) {
            setfile(null);
            return;
        }
        const filereader = new FileReader();
        filereader.onload = () => {
            setprewurl(filereader.result);
            console.log(file);
        }
        filereader.readAsDataURL(file);
    }, [file, prewurl]);

    useEffect(() => {

    }, [fetchurl]);

    const pickhandler = (event) => {
        console.log("hello");
        console.log(event.target.files);
        if (event.target.files.length === 1) {
            const pickedfile = event.target.files[0];
            setfile(pickedfile);
            setisvalid(true);
            //   console.log("hello");
            return;
        }
        else {
            setisvalid(false)
        }
    }

    const placeadded = () => {
        axios.get('http://localhost:9002/places')
            .then(res => setPlaces(res.data))
            .catch(error => console.log(error))
            ;
    }


    return (

        <div className="addplaceDiv">
            <div className="something">
                <HomePage name={props.name}/>
            </div>
            <div className="ADD_FORM">
                <div className="headingform">
                    <h2>Fill the Following form to add a place!</h2>
                </div>
                <div className="formbody" >
                    <form>
                        <div className="inputfield">
                            <label className="titleform" for="Place" >Name of the Place</label>
                            <input className="inputArea"
                                onChange={(e) => setPlace(e.target.value)}
                                value={place} type="text" id="Place" placeholder="eg Taj Mahal"></input>
                        </div>
                        <div className="inputfield">
                            <label className="titleform mx-2" for="From" >Best Time to visit From: </label>
                            <input
                                onChange={(e) => setBestTimeFrom(e.target.value)}
                                value={bestTimeFrom}
                                list="months" name="from" id="from" />
                            <datalist id="months">
                                <option value="January" />
                                <option value="February" />
                                <option value="March" />
                                <option value="April" />
                                <option value="May" />
                                <option value="June" />
                                <option value="July" />
                                <option value="August" />
                                <option value="September" />
                                <option value="October" />
                                <option value="November" />
                                <option value="December" />
                            </datalist>
                            <label className="titleform mx-2" for="To" > - To: </label>
                            <input
                                onChange={(e) => setBestTimeTo(e.target.value)}
                                value={bestTimeTo}
                                list="months" name="to" id="to" />
                            <datalist id="months">
                                <option value="January" />
                                <option value="February" />
                                <option value="March" />
                                <option value="April" />
                                <option value="May" />
                                <option value="June" />
                                <option value="July" />
                                <option value="August" />
                                <option value="September" />
                                <option value="October" />
                                <option value="November" />
                                <option value="December" />
                            </datalist>
                        </div>
                        <div className="inputfield">
                            <label className="titleform" for="estimatedCost" >Estimated Cost (in ₹)</label>
                            <input className="inputArea"
                                onChange={(e) => setEstimatedCost(e.target.value)}
                                value={cost}
                                min="0"
                                step="500"
                                type="number" id="estimatedCost" placeholder="5000"></input>
                        </div>
                        <label className="titleform" for="rating" id="black-font">Rating</label>
                        <div class="rating">
                            <input type="radio" onClick={(e) => setrating(e.target.value)} name="rating" value="5" id="5"></input>
                            <label for="5">☆</label>
                            <input type="radio" onClick={(e) => setrating(e.target.value)} name="rating" value="4" id="4"></input>
                            <label for="4">☆</label>
                            <input type="radio" onClick={(e) => setrating(e.target.value)} name="rating" value="3" id="3"></input>
                            <label for="3">☆</label>
                            <input type="radio" onClick={(e) => setrating(e.target.value)} name="rating" value="2" id="2"></input>
                            <label for="2">☆</label>
                            <input  type="radio" onClick={(e) => setrating(e.target.value)} name="rating" value="1" id="1"></input>
                            <label for="1">☆</label>
                        </div>
                        <div className="inputfield">
                            <label className="titleform" for="image" >Upload an image</label>
                            <input className="imageupload" id="image" onChange={pickhandler} type="file" name="myImage" accept=".jpg,.png,.jpeg" ></input>
                        </div>
                        <div className="inputfield">
                            <label className="titleform" for="Description" >Description</label>
                            <textarea className="inputArea"
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                                id="Description" rows="3"></textarea>
                        </div>
                        <button className="Buttonform" type="submit" onClick={addlocation}>Submit</button>
                    </form>
                </div>

                <img src={prewurl} alt="no image" />
                
            </div>

            {/* <h1>{bestTime}</h1> */}
        </div>
    );
}

export default AddPlaceForm;