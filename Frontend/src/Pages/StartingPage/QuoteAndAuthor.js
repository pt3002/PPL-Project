import React from 'react'
import quotes from './Quotes'
import "./StartingPage.css";

export default function QuoteAndAuthor(props) {

    const { quote, generateRandomQuote } = props;
    return (
        <div>
            <div className='author-div'>
                <div className='quote-author'>
                    <p>{quote.quote}</p>
                </div>
                <div className='quote-author'>
                    <h5 className='quote-author'>- {quote.author}</h5>
                </div>
                <span className='centering'>

                    <div className='quote-button-div'>
                        <button
                            className='quote-button'
                            onClick={() => { generateRandomQuote(quotes) }}
                            type="submit">
                            <i></i> Next Quote</button>
                    </div>
                </span>
            </div>
        </div>
    )
}