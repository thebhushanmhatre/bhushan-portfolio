import React, { Component } from 'react';
import { DATA } from '../data.js';

class Contact extends Component{
    constructor(props){
    super(props);
    this.state = {
      contacts: DATA.contacts
    }
  }

  render(){
    return(
      <div className="container">
        <h1>Contact Page</h1>
        <h3>Page Under Construction</h3>
        <h1><span className="fa fa-spinner fa-lg mt-5"></span></h1>
      </div>
    );
  }
}

export default Contact;