import React from 'react';
import { Table } from 'reactstrap';
import isMobile from '../../utilities/isMobile.js';

import { useTheme } from '../../contexts/ThemeContext';

function RenderTable(props) {
  const { darkMode } = useTheme();
  let key_name_map = {
    name: props.type + ' Name',
    tech: 'Technologies/Skills',
    institute: 'Institute',
    issuer: 'Issued By',
    professor: 'Taught By',
  };

  let indirectly_used_cols = ['target', 'src', 'href', 'tag', 'visible'];

  if (isMobile()) {
    indirectly_used_cols.push('tech');
    indirectly_used_cols.push('issuer');
    indirectly_used_cols.push('professor');
  }

  let column_headers = [
    '#',
    ...Object.keys(props.items[0]).filter(
      (i) => !indirectly_used_cols.includes(i),
    ),
  ].map((col) => <th key={col}>{key_name_map[col] || col}</th>);

  var after_name_cols = Object.keys(props.items[0])
    .filter((i) => !indirectly_used_cols.includes(i))
    .filter((i) => i !== 'name');

  const renderTagIcon = (tag) => {
    if (!tag) {
      return <i className="fa fa-external-link" aria-hidden="true" />;
    }

    switch (tag) {
      case 'inbuilt':
        return (
          <i className="fa fa-link" aria-hidden="true">
            <span
              className="inbuilt"
              style={{
                fontSize: 'x-small',
                color: darkMode ? '#90ee90' : 'green',
              }}
            >
              {' '}
              inbuilt
            </span>
          </i>
        );
      case 'codesandbox':
        return (
          <i className="fas fa-code" aria-hidden="true">
            <span
              style={{
                fontSize: 'x-small',
                color: darkMode ? '#bb86fc' : 'purple',
              }}
            >
              {' '}
              codesandbox
            </span>
          </i>
        );
      case 'codepen':
        return (
          <i className="fa fa-codepen" aria-hidden="true">
            <span
              style={{
                fontSize: 'x-small',
                color: darkMode ? 'white' : 'black',
              }}
            >
              {' '}
              codepen
            </span>
          </i>
        );
      case 'github':
        return (
          <i className="fa fa-github" aria-hidden="true">
            <span
              style={{
                fontSize: 'x-small',
                color: darkMode ? 'white' : 'black',
              }}
            >
              {' '}
              github
            </span>
          </i>
        );
      default:
        return <i className="fa fa-external-link" aria-hidden="true" />;
    }
  };

  let rows = props.items.map((item, count) => (
    <tr key={item.name}>
      <td>{count + 1}</td>
      <td>
        <a href={item.href} target={item.target}>
          {item.name} {renderTagIcon(item.tag)}
        </a>
      </td>
      {after_name_cols.map((i) => (
        <td key={i}>
          {typeof item[i] === 'object' ? item[i].join(', ') : item[i]}
        </td>
      ))}
    </tr>
  ));

  return (
    <Table bordered hover dark={darkMode}>
      <thead>
        <tr>{column_headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

export default RenderTable;
