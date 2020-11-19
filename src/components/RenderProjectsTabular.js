import React from 'react';
import { Table } from 'reactstrap';

function RenderProjectsTabular({projects}) {
  let column_names = ["#", "Project Name", "Technologies Used"] // ["projectId", "inbuilt", "href", "src", "tech", "name", "visible", "target"]
  
  let column_headers = column_names.map(name =>(<th key={name}>{name}</th>))

  let rows = projects.map((project, count) =>
    (<tr key={count.toString()} >
      <td>{count+1}</td>
      <td>
        <a href={project.href} target={project.target}>{project.name} {' '} 
          {project.inbuilt ? <i className="fa fa-link" aria-hidden="true" /> : <i className="fa fa-external-link" aria-hidden="true" />}
        </a>
      </td>
      <td>{project.tech.join(', ')}</td>
    </tr>)
  )

  return (
    <Table bordered hover>
      <thead>
        <tr>
          {column_headers}
        </tr>
      </thead>
      <tbody>
          {rows}
      </tbody>
    </Table>
  );
}

export default RenderProjectsTabular;