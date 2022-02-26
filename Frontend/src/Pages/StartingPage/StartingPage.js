import React, { useState, useEffect, Component } from "react";
import travelGif from './travel.gif'
import "./StartingPage.css";
import HomePage from "../HomePage/HomePage";
import quotes from './Quotes';
import QuoteAndAuthor from "./QuoteAndAuthor";

export default class App extends Component {

  //state
  state = {
    quote: quotes[0].quote,
    author: quotes[0].author
  }

  //generate diffrent quote function
  generateRandomQuote = (arr) => {
    //get random numbers
    let num = Math.floor(Math.random() * quotes.length)

    let newQuote = quotes[num];

    //update state
    this.setState({
      quote: newQuote.quote,
      author: newQuote.author
    })

    this.shuffleQuotes(quotes)

  }

  //shuufle quotes function
  shuffleQuotes = (arr) => {
    return arr.sort(function () { return 0.5 - Math.random() });
  }

  render() {
    return (
      <div className="startingpagediv">
        <div>
          <HomePage />
        </div>
        <div>
          <h1>Random Quote</h1>
          <QuoteAndAuthor
            generateRandomQuote={this.generateRandomQuote}
            quote={this.state}
          />
        </div>
        <img src={travelGif} alt="loading..." />
      </div>
    )
  }
}

