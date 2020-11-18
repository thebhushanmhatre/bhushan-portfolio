import React, { useState } from 'react';
import RenderItems from './RenderItems';
import { Row, Button, Container } from 'reactstrap';
  
function Project(props){
  const [languages, setLanguages] = useState([])

  const setFilter = clickedFilter => {
    let filters = languages
    if (filters.indexOf(clickedFilter) >= 0){
      filters.splice(filters.indexOf(clickedFilter), 1)
      setLanguages([...filters])
    } else {
      filters.push(clickedFilter)
      setLanguages([...filters])
    }
  }

  const getProjects = () => {
    let projects = props.projects.filter(item=>item.visible)
    let filters = languages
    if(filters.length > 0){
      return projects.filter(project => filters.every(fil => project.tech.includes(fil)))
    }
    return projects
  }

  var projects;
  if(getProjects().length > 0){
    projects = getProjects().map(item=>
      <RenderItems key={"projectId"+item.projectId.toString()} item={item} height={{minHeight: "5rem"}} />
    )
  } else {
    projects = <h3 className="text-danger">"{languages.join(' + ')}" Projects Coming Soon</h3>
  }

  const filters = ["Javascript", "Python", "React"].map(item => 
    <Button className="bg-light text-dark mr-1" key={item} onClick={() => setFilter(item)}>{item}</Button>
  )

  return(
    <Container>
      <h3 className="mb-4">My {languages ? languages.join(' + ') : ''} Projects {filters}</h3>
      <Row>{projects}</Row>
    </Container>
  )
}

export default Project;
