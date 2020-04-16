import React, { Component } from 'react';

class RandomQuoteMachine extends Component{
  constructor(props){
    super(props);
    this.state = {
      author: "A.P.J. Abdul Kalam",
      quote: "If you want to shine like a sun, first burn like a sun."
    }
    this.displayQuote = this.displayQuote.bind(this);
  }

  displayQuote() {
    let randNum = Math.floor(Math.random() * this.props.quotes.length);
    let quote = this.props.quotes[randNum]
    this.setState({
      quote: quote.quote,
      author: quote.author
    });
  }

  render(){
    console.log("Inside RandomQuoteMachine: "+this.props.quotes)
    return(
      <div className="container">
        <h1 className="text-center pt-3">Random Quote Machine</h1>
        <div class="quote-box bg-secondary text-white p-5 mt-5">
          <div class="quote-text col-10">
            <span class="fa fa-quote-left">&nbsp;&nbsp;{this.state.quote}</span>
          </div>
          <div class="quote-author text-right m-3">
            <span class="fa fa-pencil" >&nbsp;{this.state.author}</span>
          </div>
          <button class="btn btn-primary" id="new-quote" onClick={this.displayQuote} > New Quote </button>
          <a href="" target="" class=" btn btn-info float-right">  <span class="fa fa-twitter"> </span> Tweet </a>
        </div>
        <div className="text-center pt-5"><img src="assets/images/logo.svg" alt="bm_logo" /></div>
      </div>
    );
  }
}

export default RandomQuoteMachine;
