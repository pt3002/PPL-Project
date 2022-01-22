import React, { useState } from "react";

import "./FAQ.css";
import HomePage from "../HomePage/HomePage";

const FAQ = () => {
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
        <HomePage />
      </div>
      <div>
        <div className="containerofFAQ">
          <h2>Frequently Asked Questions</h2>
          <div className="accordion">
            <div className="accordion-item">
              <button onClick={() => toggleAccordion("accordion-button-1")} id="accordion-button-1" aria-expanded="false"><span className="accordion-title">Why is the moon sometimes out during the day?</span><span className="icon" aria-hidden="true"></span></button>
              <div className="accordion-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
              </div>
            </div>
            <div className="accordion-item">
              <button onClick={() => toggleAccordion("accordion-button-2")} id="accordion-button-2" aria-expanded="false"><span className="accordion-title">Why is the sky blue?</span><span className="icon" aria-hidden="true"></span></button>
              <div className="accordion-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta cumque itaque exercitationem veritatis quo voluptas rem earum eligendi, officiis quas necessitatibus vitae debitis! Tenetur, perspiciatis! Itaque fuga eveniet labore. Quam enim ducimus asperiores, maxime pariatur autem animi velit, quasi aut expedita dicta, eius quas? Fugiat atque rem ad doloribus repudiandae, culpa enim earum quidem similique ut, dolor sunt vel odit at impedit placeat.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <button onClick={() => toggleAccordion("accordion-button-3")} id="accordion-button-3" aria-expanded="false"><span className="accordion-title">Will we ever discover aliens?</span><span className="icon" aria-hidden="true"></span></button>
              <div className="accordion-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
              </div>
            </div>
            <div className="accordion-item">
              <button onClick={() => toggleAccordion("accordion-button-4")} id="accordion-button-4" aria-expanded="false"><span className="accordion-title">How much does the Earth weigh?</span><span className="icon" aria-hidden="true"></span></button>
              <div className="accordion-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>

              </div>
            </div>
            <div className="accordion-item">
              <button onClick={() => toggleAccordion("accordion-button-5")} id="accordion-button-5" aria-expanded="false"><span className="accordion-title">How do airplanes stay up?</span><span className="icon" aria-hidden="true"></span></button>
              <div className="accordion-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi dolorem voluptate reprehenderit. Possimus consequuntur odio expedita sequi veritatis ducimus tempore nobis adipisci magnam illo explicabo aliquid eveniet sunt, saepe autem.
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