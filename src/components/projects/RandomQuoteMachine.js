import React, { useContext, useState } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { DataContext } from '../../App';

function RandomQuoteMachine() {
  const [currentQuote, changeQuote] = useState({
    author: 'A.P.J. Abdul Kalam',
    quote: 'If you want to shine like a sun, first burn like a sun.',
  });

  const allQuotes = useContext(DataContext).quotes;

  const displayNextQuote = () => {
    let randNum = Math.floor(Math.random() * allQuotes.length);
    let nextQuote = allQuotes[randNum];

    changeQuote({
      quote: nextQuote.quote,
      author: nextQuote.author,
    });
  };

  return (
    <div className="container mt-2">
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/projects">Projects</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Random Quote Machine</BreadcrumbItem>
      </Breadcrumb>
      <h3
        className="text-center p-1 myname"
        style={{ backgroundColor: 'white' }}
      >
        Random Quote Machine
      </h3>
      <div className="quote-box text-dark p-1 mt-5">
        <h3
          className="col-12 col-md-10 mb-2"
          style={{ backgroundColor: 'white' }}
        >
          <span className="fa fa-quote-left">
            &nbsp;&nbsp;{currentQuote.quote}
          </span>
        </h3>
        <p className="quote-author text-right mt-5 mb-5 text-2xl">
          <span className="fa fa-pencil" style={{ backgroundColor: 'white' }}>
            &nbsp;{currentQuote ? currentQuote.author : ''}
          </span>
        </p>
        <button
          className="btn btn-primary"
          id="new-quote"
          onClick={displayNextQuote}
        >
          {' '}
          New Quote{' '}
        </button>
      </div>
    </div>
  );
}

export default RandomQuoteMachine;
