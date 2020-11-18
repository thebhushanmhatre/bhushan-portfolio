import React from 'react';
import { Table } from 'reactstrap';
// import { Link } from 'react-router-dom';

function RenderProjectsTabular({projects}) {
  let column_names = ["#", "Project Name", "Technologies Used"] // ["projectId", "inbuilt", "href", "src", "tech", "name", "visible", "target"]
  
  let column_headers = column_names.map(name =>(<th key={name}>{name}</th>))

  let rows = projects.map((project, count) =>
    (<tr key={count.toString()} >
      <th scope="row">{count+1}</th>
      <td>
        <a href={project.href} target={project.target}>{project.name} {' '} 
          {project.inbuilt ? <i class="fa fa-link" aria-hidden="true" /> : <i class="fa fa-external-link" aria-hidden="true" />}
        </a>
      </td>
      <td>{project.tech.join(', ')}</td>
    </tr>)
  )

  return (
    <Table hover>
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