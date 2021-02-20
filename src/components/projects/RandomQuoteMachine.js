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
      <div className="container mt-2">
        <Breadcrumb>
          <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
          <BreadcrumbItem><a href="/projects">Projects</a></BreadcrumbItem>
          <BreadcrumbItem active>Random Quote Machine</BreadcrumbItem>
        </Breadcrumb>
        <h3 className="text-center p-1 myname" style={{backgroundColor: 'white'}}>Random Quote Machine</h3>
        <div className="quote-box text-dark p-1 mt-5">
          <h3 className="col-12 col-md-10 mb-2" style={{backgroundColor: 'white'}} >
            <span className="fa fa-quote-left">&nbsp;&nbsp;{this.state.quote}</span>
          </h3>
          <h4 className="quote-author text-right m-3 mb-5" >
            <span className="fa fa-pencil" style={{backgroundColor: 'white'}} >&nbsp;{this.state.author}</span>
          </h4>
          <button className="btn btn-primary" id="new-quote" onClick={this.displayQuote} > New Quote </button>
          <a href={"https://twitter.com/intent/tweet?text=" + this.state.quote.replace('%', '%25') + " - " + this.state.author}
            className="btn btn-info float-right twitter-share-button" target="_blank" rel="noopener noreferrer">  <span className="fa fa-twitter"> </span> Tweet </a >
        </div>
      </div>
    );
  }
}

export default RandomQuoteMachine;
