import React, { Component } from 'react';
import { DATA } from '../data.js';

class Certificate extends Component{
    constructor(props){
    super(props);
    this.state = {
      certificates: DATA.certificates
    }
  }

  render(){
    console.log(this.state);
    
    return(
      <h1>Certificate</h1>
    );
  }
}

export default Certificate;