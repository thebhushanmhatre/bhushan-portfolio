import React from 'react';
import { Table } from 'reactstrap';

function RenderTable(props) {

  let key_name_map = { "name": props.type + " Name", "tech": "Technologies Used", "institute": "Institute", "issuer": "Issued By", "professor": "Taught By" }
  let indirectly_used_cols = ['target', 'src', 'href', 'inbuilt', 'visible']
  let column_headers = ['#', ...Object.keys(props.items[0]).filter(i => !indirectly_used_cols.includes(i))].map(col => (<th key={col}>{key_name_map[col] || col}</th>))
  var after_name_cols = Object.keys(props.items[0]).filter(i => !indirectly_used_cols.includes(i)).filter(i => i !== "name")

  let rows = props.items.map((item, count) =>
    (<tr key={count.toString()} >
      <td>{count+1}</td>
      <td>
        <a href={item.href} target={item.target}>{item.name} {' '} 
        {item.inbuilt ? <i className="fa fa-link" aria-hidden="true" ><span className="inbuilt" style={{ fontSize:"x-small", color:"green"}}> inbuilt</span></i> : <i className="fa fa-external-link" aria-hidden="true" />}
        </a>
      </td>
    {after_name_cols.map(i => <td>{(typeof(item[i]) === 'object') ? item[i].join(', ') : item[i]}</td> )}
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

export default RenderTable;