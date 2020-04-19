import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

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
    return(
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
          <BreadcrumbItem><a href="/project">Projects</a></BreadcrumbItem>
          <BreadcrumbItem active>Random Quote Machine</BreadcrumbItem>
        </Breadcrumb>
        <h2 className="text-center pt-3">Random Quote Machine</h2>
        <div class="quote-box text-dark p-1 mt-5">
          <h3 class="col-12 col-md-10 mb-2">
            <span class="fa fa-quote-left">&nbsp;&nbsp;{this.state.quote}</span>
          </h3>
          <h4 class="quote-author text-right m-3 mb-5">
            <span class="fa fa-pencil" >&nbsp;{this.state.author}</span>
          </h4>
          <button class="btn btn-primary" id="new-quote" onClick={this.displayQuote} > New Quote </button>
          <button  href="" class=" btn btn-info float-right">  <span class="fa fa-twitter"> </span> Tweet </button >
        </div>
        <div className="text-center pt-5"><img src="assets/images/logo.svg" alt="bm_logo" /></div>
      </div>
    );
  }
}

export default RandomQuoteMachine;