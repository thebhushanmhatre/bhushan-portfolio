import React, { Component } from 'react';
import { DATA } from '../data.js';

class Project extends Component{
  constructor(props){
    super(props);
    this.state = {
      projects: DATA.projects
    }
  }

  render(props){
    console.log(this.state);
    return(
      <div className="container">
      </div>
    );
  }
}

export default Project;