import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class Contact extends Component{

  render(){
    return(
      <div className="container text-center">
        <img src="assets/images/logo.svg" alt="bm_logo" />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Contact Page</h1>
        <h3>Page Under Construction</h3>
        <h1><span className="fa fa-spinner fa-lg mt-5 mb-4"></span></h1>
        <Alert color="light">
          <a href="https://www.linkedin.com/in/thebhushanmhatre/" className="alert-link" target="_blank" rel="noopener noreferrer" ><h4><i>Reach Me through Linkedin</i></h4></a>.
        </Alert>
      </div>
    );
  }
}

export default Contact;