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
    console.log(this.state);
    
    return(
      <h1>Contact</h1>
    );
  }
}

export default Contact;