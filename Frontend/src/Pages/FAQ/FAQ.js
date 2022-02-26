import React, { useState } from "react";

import "./FAQ.css";
import HomePage from "../HomePage/HomePage";

const FAQ = (props) => {
  function toggleAccordion(id) {
    const items = document.querySelectorAll(".accordion button");
    const itemToggle = document.getElementById(id).getAttribute('aria-expanded');
    console.log(itemToggle);
    for (let i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle === 'false') {
      document.getElementById(id).setAttribute('aria-expanded', 'true');
    }
  }




  return (
    <div className="faqdiv">
      <div>
        <HomePage name={props.name}/>
      </div>
      <div>
        <div className="containerofFAQ">
          <h2>Frequently Asked Questions</h2>
          <div className="accordion">
            <div className="accordion-item">
              <button onClick={() => toggleAccordion("accordion-button-1")} id="accordion-button-1" aria-expanded="false"><span className="accordion-title">How can we search for places in this website?</span><span className="icon" aria-hidden="true"></span></button>
              <div className="accordion-content">
                <p>List of all the Places is available in the List of Places Navbar Link. In case you want to filter
                     your search then you can filter the places according to rating, price and creator using the Filter
                     Dropdown in the NavBar.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <button onClick={() => toggleAccordion("accordion-button-2")} id="accordion-button-2" aria-expanded="false"><span className="accordion-title">Can anyone add his/ her experience about a place ?</span><span className="icon" aria-hidden="true"></span></button>
              <div className="accordion-content">
                <p>Yes, any registered user can add his/ her experience about a particular place on our website.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <button onClick={() => toggleAccordion("accordion-button-3")} id="accordion-button-3" aria-expanded="false"><span className="accordion-title">Can anyone edit/ delete a place from this website?</span><span className="icon" aria-hidden="true"></span></button>
              <div className="accordion-content">
                <p>No, only the person who has created that particular place has these rights.</p>
              </div>
            </div>
            <div className="accordion-item">
              <button onClick={() => toggleAccordion("accordion-button-4")} id="accordion-button-4" aria-expanded="false"><span className="accordion-title">What are some travel safety tips keep in mind?</span><span className="icon" aria-hidden="true"></span></button>
              <div className="accordion-content">
                <p>
                  <ul>
                    <li>Make copies of important documents</li>
                    <li>Keep your friends and family updated</li>
                    <li>Be wary of public Wi-Fi</li>
                  </ul>
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default FAQ;