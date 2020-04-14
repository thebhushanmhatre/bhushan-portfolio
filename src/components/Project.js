import React, { Component } from 'react';
import { DATA } from '../data.js';
import RenderItems from './RenderItems';

class Project extends Component{
  constructor(props){
    super(props);
    this.state = {
      projects: DATA.projects
    }
  }

  render(){
    const projects = this.state.projects.map(item=>
      <RenderItems item={item} />
    )

    return(
      <div className="container">
        <h3>My Projects</h3>
        {projects}
      </div>
    );
  }
}

export default Project;