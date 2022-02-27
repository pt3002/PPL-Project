import React, { useState, useEffect, Component } from "react";
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
        <div className="bgStartingPage">
          <div className="quote"><h1 className="quote-of-the-day">Quote of the day</h1></div>
          <div className="quote">
            <QuoteAndAuthor
              generateRandomQuote={this.generateRandomQuote}
              quote={this.state}
            />
          </div>
        </div>
      </div>
    )
  }
}

