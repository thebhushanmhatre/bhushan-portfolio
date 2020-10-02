import React, { Component } from 'react';
import RenderItems from './RenderItems';
import { Row, Button } from 'reactstrap';

class Project extends Component{
  constructor(props) {
    super(props)
    this.state = {
      filter: []
    }
  }

  setFilter = (filter) => {
    let filters = this.state.filter
    if(filters.indexOf(filter) >= 0){
      filters.splice(filters.indexOf(filter), 1)
      this.setState({filter: filters})
    } else {
      filters.push(filter)
      this.setState({filter: filters})
    }
  }

  getProjects = () => {
    let projects = this.props.projects.filter(item=>item.visible)
    let filters = this.state.filter
    if(filters.length > 0){
      // eslint-disable-next-line
      filters.map(filter => {
        projects = projects.filter(item => item.tech.indexOf(filter)!==-1)
      })
    }
    return projects
  }

  render(){
    var projects;
    if(this.getProjects().length > 0){
      projects = this.getProjects().map(item=>
        <RenderItems key={"projectId"+item.projectId.toString()} item={item} height={{minHeight: "5rem"}} />
      )
    } else {
      projects = <h3 className="text-danger">"{this.state.filter.join(' + ')}" Projects Coming Soon</h3>
    }

    const filters = ["Javascript", "Python"].map(item => 
      <><Button className="bg-light text-dark" onClick={() =>this.setFilter(item)}> {item} </Button>{' '}</>
    )

    return(
      <div className="container">
        <h3 className="mb-4">My {this.state.filter ? this.state.filter.join(' + ') : ''} Projects {filters}</h3>
        <Row>{projects}</Row>
      </div>
    );
  }
}

export default Project;