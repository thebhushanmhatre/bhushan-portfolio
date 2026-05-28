import React, { useContext, useState } from 'react';
import { Container, Toast, ToastBody } from 'reactstrap';
import { DataContext } from '../../../App';
import ProjectBreadCrumb from '../../common/ProjectBreadcrumb';
import './RandomQuoteMachine.css';

function RandomQuoteMachine() {
  const [currentQuote, changeQuote] = useState({
    author: 'A.P.J. Abdul Kalam',
    quote: 'If you want to shine like a sun, first burn like a sun.',
  });
  const [animate, setAnimate] = useState(true);
  const [showToast, setShowToast] = useState(false);

  const context = useContext(DataContext);
  const allQuotes = context ? context.quotes : [];

  const displayNextQuote = () => {
    setAnimate(false);
    setTimeout(() => {
      let randNum = Math.floor(Math.random() * allQuotes.length);
      let nextQuote = allQuotes[randNum];

      changeQuote({
        quote: nextQuote.quote,
        author: nextQuote.author,
      });
      setAnimate(true);
    }, 50);
  };

  const copyQuote = () => {
    navigator.clipboard.writeText(
      `"${currentQuote.quote}" - ${currentQuote.author}`,
    );
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <Container className="mt-2 position-relative">
      <ProjectBreadCrumb projectName={'Random Quote Machine'} />

      <div className="quote-container text-center">
        <h3 className="quote-machine-title">Random Quote Machine</h3>

        <div className={`quote-box ${animate ? 'fade-in' : ''}`}>
          <i className="fa fa-quote-left quote-icon-bg"></i>

          <p id="text" className="quote-text">
            {currentQuote.quote}
          </p>

          <p id="author" className="quote-author">
            — {currentQuote.author}
          </p>
        </div>

        <div className="quote-actions">
          <div className="social-btns">
            <button
              className="quote-btn btn-secondary"
              onClick={copyQuote}
              title="Copy to clipboard"
            >
              <i className="fa fa-copy"></i>
            </button>
          </div>

          <button
            className="quote-btn btn-next"
            id="new-quote"
            onClick={displayNextQuote}
          >
            <i className="fa fa-refresh"></i>
            New Quote
          </button>
        </div>
      </div>

      <div className="p-3 my-2 rounded" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999 }}>
        <Toast isOpen={showToast}>
          <ToastBody className="bg-success text-white rounded">
            <i className="fa fa-check-circle me-2"></i>
            Quote copied to clipboard!
          </ToastBody>
        </Toast>
      </div>
    </Container>
  );
}

export { RandomQuoteMachine };
