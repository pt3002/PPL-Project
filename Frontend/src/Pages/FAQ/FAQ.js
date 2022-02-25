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
              <button onClick={() => toggleAccordion("accordion-button-1")} id="accordion-button-1" aria-expanded="false"><span className="accordion-title">Will masks be required during this tour?</span><span className="icon" aria-hidden="true"></span></button>
              <div className="accordion-content">
                <p>Masks will be required in any place where they are required by the local government (in shops and in restaurants when not seated for a meal, for example), and any time we are unable to socially distance with each other (while traveling in the shuttle van, for example).
                  There are still inherent risks with traveling while Covid-19 is considered a worldwide pandemic</p>
              </div>
            </div>
            <div className="accordion-item">
              <button onClick={() => toggleAccordion("accordion-button-2")} id="accordion-button-2" aria-expanded="false"><span className="accordion-title">What clothing should I pack for one of your adventures?</span><span className="icon" aria-hidden="true"></span></button>
              <div className="accordion-content">
                <p>We always recommend packing as light as possible however the specific requirements for your tour will vary widely depending on where and when you are traveling.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <button onClick={() => toggleAccordion("accordion-button-3")} id="accordion-button-3" aria-expanded="false"><span className="accordion-title">Should I know Local Language?</span><span className="icon" aria-hidden="true"></span></button>
              <div className="accordion-content">
                <p>Learn Common Phrases of the Local Language
                  A simple “Please,” “Thank you,” and “I'm sorry” in the local language goes a long way.</p>
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
            <div className="accordion-item">
              <button onClick={() => toggleAccordion("accordion-button-5")} id="accordion-button-5" aria-expanded="false"><span className="accordion-title">Are Vaccinations Required?</span><span className="icon" aria-hidden="true"></span></button>
              <div className="accordion-content">
                <p>
                  You must have a certificate. We do encourage all travelers to be current on routine immunizations.
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