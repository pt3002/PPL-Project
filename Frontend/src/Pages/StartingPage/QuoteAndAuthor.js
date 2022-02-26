import React from 'react'
import quotes from './Quotes'

export default function QuoteAndAuthor(props) {

    const { quote, generateRandomQuote } = props;
    return (
        <div>

            <div>
                <p>{quote.quote}</p>
                <h5>- {quote.author}</h5>
                <button
                    onClick={() => { generateRandomQuote(quotes) }}
                    type="submit">
                    <i></i> Generate Quote</button>
            </div>
        </div>
    )
}