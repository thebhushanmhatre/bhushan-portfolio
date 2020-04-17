import React, { Component } from 'react';
import RenderItems from './RenderItems';
import { Row } from 'reactstrap';

class Project extends Component{

  render(){
    const projects = this.props.projects.filter(item=>item.visible).map(item=>
      <RenderItems key={item.projectId} item={item} height={{minHeight: "5rem"}} />
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