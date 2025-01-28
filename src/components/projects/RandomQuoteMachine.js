import React, { useContext, useState } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { DataContext } from '../../App';
import ProjectBreadCrumb from '../common/ProjectBreadcrumb';

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
      <ProjectBreadCrumb projectName={'Random Quote Machine'} />
      <h3
        className="text-center p-1 myname"
        style={{ backgroundColor: 'white' }}
      >
        Random Quote Machine
      </h3>

      <p
        style={{
          fontSize: '40px',
          backgroundColor: 'white',
          minHeight: '200px',
          marginTop: '50px',
          marginLeft: '40px',
          alignContent: 'center',
        }}
      >
        <span className="fa fa-quote-left">
          &nbsp;&nbsp;{currentQuote.quote}
        </span>
      </p>

      <p
        style={{
          fontSize: '25px',
          marginTop: '30px',
          textAlign: 'center',
        }}
      >
        <span
          className="fa fa-pencil"
          style={{ backgroundColor: 'white' }}
        ></span>
        &nbsp;{currentQuote ? currentQuote.author : ''}
      </p>

      <div
        style={{
          textAlign: 'center',
        }}
      >
        <button
          className="btn text-right mt-5"
          style={{
            backgroundColor: 'skyblue',
            fontSize: '20px',
            padding: '10px 30px',
          }}
          id="new-quote"
          onClick={displayNextQuote}
        >
          <span className="fa fa-refresh"></span>
        </button>
      </div>
    </div>
  );
}

export default RandomQuoteMachine;
