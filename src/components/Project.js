import React, { Component } from 'react';
import RenderItems from './RenderItems';
import { Row, Button } from 'reactstrap';

class Project extends Component{
  constructor(props) {
    super(props)
    this.state = {
      filter: false
    }
  }

  setFilter = (filter) => {
    if(this.state.filter===filter){
      this.setState({filter: false})
    } else {
      this.setState({filter: filter})
    }
  }

  getProjects = () => {
    let projects = this.props.projects.filter(item=>item.visible)
    if(this.state.filter){
      projects = projects.filter(item => item.tech.indexOf(this.state.filter)!==-1)
    }
    return projects
  }

  render(){
    const projects = this.getProjects().filter(item=>item.visible).map(item=>
      <RenderItems key={"projectId"+item.projectId.toString()} item={item} height={{minHeight: "5rem"}} />
    )

    const filters = ["Javascript", "Python"].map(item => 
      <><Button className="bg-light text-dark" onClick={() =>this.setFilter(item)}> {item} </Button>{' '}</>
    )

    return(
      <div className="container">
        <h3 className="mb-4">My {this.state.filter ? this.state.filter : ''} Projects {filters}</h3>
        <Row>{projects}</Row>
      </div>
    );
  }
}

export default Project;