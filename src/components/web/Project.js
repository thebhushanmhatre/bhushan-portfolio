import React, { useState } from 'react';
import { Row, Button, Container } from 'reactstrap';
import RenderItems from './RenderItems';
import RenderTable from './RenderTable'

function Project(props){
  const [languages, setLanguages] = useState([])
  const [tabular, toggleTabluar] = useState(true)

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

  console.log(Object.keys(getProjects()[0]))

  const pickValues = () => {
    return getProjects().map((item) =>
      (({ href, name, tech, target, inbuilt }) => ({ href, name, tech, target, inbuilt }))(item)
    )
  }

  var projects;
  let project_list = getProjects()
  if(project_list.length > 0){
    if (tabular) {
      projects = <RenderTable items={pickValues()} type={"Project"} />
    } else {
      projects = project_list.map(item=> <RenderItems key={"projectId" + item.projectId.toString()} item={item} height={{ minHeight: "5rem" }} />)
    }
  } else {
    projects = <h3 className="text-danger">"{languages.join(' + ')}" Projects Coming Soon</h3>
  }

  const filters = ["Javascript", "Python", "React"].map(item => 
    <Button className="mr-1" key={item} onClick={() => setFilter(item)}>{item}</Button>
  )

  let tabularForm = <span onClick={()=>toggleTabluar(prevMode => !prevMode)} className={tabular ? "fa fa-th fa-lg" : "fa fa-table fa-lg"} style={{float:"right"}} />

  return(
    <Container>
      <h3 className="mb-4">My {languages ? languages.join(' + ') : ''} Projects {filters} {tabularForm}</h3>
      {tabular ? projects : <Row>{projects}</Row>}
    </Container>
  )
}

export default Project;
