import React, { Component } from 'react';
import { DATA } from '../data.js';
import RenderItems from './RenderItems';
import { Row } from 'reactstrap';

class Project extends Component{
  constructor(props){
    super(props);
    this.state = {
      projects: DATA.projects
    }
  }

  render(){
    const projects = this.state.projects.filter(item=>item.visible).map(item=>
      <RenderItems item={item} />
    )

    return(
      <div className="container">
        <h3 className="mb-4">My Projects</h3>
        <Row>{projects}</Row>
      </div>
    );
  }
}

export default Project;