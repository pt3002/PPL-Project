import React from 'react';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import HomePage from "../HomePage/HomePage";

const EditLocation = () => {
    // console.log("hello")
    let locationplace;
    const [locationdetails, setlocationdetails] = useState([]);
    const id=window.location.pathname.split("/")[2];
    // console.log(id);
    const getlocationdetails=async()=>{
        let url=`https://travelarena.herokuapp.com/getlocation/${id}`;
        let response = await fetch(url, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        });
        locationplace=await response.json(); 
        setlocationdetails(locationplace);
    }

    const editlocationupdation = async (e) => {
        e.preventDefault();
        // console.log("editcontactworks");
        const formdata = new FormData();
        let name=localStorage.getItem("name");
        const bestTime = bestTimeFrom.concat('-', bestTimeTo);
        formdata.append("name", name);
        formdata.append("title", place);
        formdata.append("price", cost);
        formdata.append("description", description);
        formdata.append("besttimetotravel", bestTime);
        formdata.append("rating", rating);
        formdata.append("image", file);
        let url = `https://travelarena.herokuapp.com/editlocation/${id}`;
        let response = await fetch(url, {
            method: 'PUT',
            body: formdata
        });
        const json = await response.json();
        // console.log(json);
        if (json.status) {
            // console.log(json.urltoimage);
            setfetchurl(json.urltoimage);
            // placeadded();
            alert("Your form has been submitted !!");
            // console.log(fetchurl);
        }
        else{
            alert("Please fill the form completely");
        }
    }













    useEffect(() => {
        getlocationdetails();
    }, []);
    useEffect(() => {
        setPlace(locationdetails.title);
        setBestTimeFrom(locationdetails.title);
        setEstimatedCost(locationdetails.price);
        setDescription(locationdetails.description);
        setrating(locationdetails.rating);
        if(locationdetails.besttimetotravel!=undefined){
         setBestTimeFrom(locationdetails.besttimetotravel.split("-")[0])
         setBestTimeTo(locationdetails.besttimetotravel.split("-")[1])
        }
        
        // console.log(place);

    }, [locationdetails]);
    // console.log(locationplace)
    
    const [place, setPlace] = useState();
    const [bestTimeFrom, setBestTimeFrom] = useState("");
    const [bestTimeTo, setBestTimeTo] = useState("");
    // const bestTime = bestTimeFrom.concat('-', bestTimeTo);
    let bestTime;
    const [cost, setEstimatedCost] = useState();
    const [description, setDescription] = useState();
    const [rating, setrating] = useState();
    const [file, setfile] = useState(null);
    const [prewurl, setprewurl] = useState("");
    const [isvalid, setisvalid] = useState(false);
    const [fetchurl, setfetchurl] = useState("");
    
    useEffect(() => {
        if (!file) {
            setfile(null);
            return;
        }
        const filereader = new FileReader();
        filereader.onload = () => {
            setprewurl(filereader.result);
            // console.log(file);
        }
        filereader.readAsDataURL(file);
        // console.log(prewurl)
    }, [file, prewurl]);

    useEffect(() => {
        // console.log(fetchurl)
    }, [fetchurl]);

    const pickhandler = (event) => {
        // console.log("hello");
        // console.log(event.target.files);
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





  return   <div className="addplaceDiv">
  <div className="something">
      <HomePage />
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
                  <input type="radio" onClick={(e) => setrating(e.target.value)} name="rating" value="1" id="1"></input>
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
              <button className="Buttonform" type="submit" onClick={editlocationupdation}>Submit</button>
          </form>
      </div>
      <img src={prewurl!=="" ? prewurl: `https://travelarena.herokuapp.com/${locationdetails.image}`} alt="no image" />
  </div>

  { <h1>{bestTime}</h1> }
</div>
};

export default EditLocation;
