import React, { useState, useContext } from 'react';
import { Row, Button, Container } from 'reactstrap';
import RenderTable from './RenderTable';
import RenderCards from './RenderCards';
import { DataContext } from '../../App';

function Project() {
  const projectsData = useContext(DataContext).projects;
  const [languages, setLanguages] = useState([]);
  const [tabular, toggleTabluar] = useState(true);

  const setFilter = (clickedFilter) => {
    let filters = languages;
    if (filters.indexOf(clickedFilter) >= 0) {
      filters.splice(filters.indexOf(clickedFilter), 1);
      setLanguages([...filters]);
    } else {
      filters.push(clickedFilter);
      setLanguages([...filters]);
    }
  };

  const getProjects = () => {
    let projects = projectsData.filter((item) => item.visible);
    let filters = languages;
    if (filters.length > 0) {
      return projects.filter((project) =>
        filters.every((fil) => project.tech.includes(fil))
      );
    }
    return projects;
  };

  const pickValues = () => {
    return getProjects().map((item) =>
      (({ href, name, tech, target, inbuilt, src }) => ({
        href,
        name,
        tech,
        target,
        inbuilt,
        src,
      }))(item)
    );
  };

  var projects;
  let project_list = getProjects();
  if (project_list.length > 0) {
    if (tabular) {
      projects = <RenderTable items={pickValues()} type={'Project'} />;
    } else {
      projects = <RenderCards items={pickValues()} type={'Project'} />;
    }
  } else {
    projects = (
      <h3 className="text-danger">
        "{languages.join(' + ')}" Projects Coming Soon
      </h3>
    );
  }

  const filters = ['Javascript', 'Python', 'React'].map((item) => (
    <Button className="mr-1" key={item} onClick={() => setFilter(item)}>
      {item}
    </Button>
  ));

  let tabularForm = (
    <span
      onClick={() => toggleTabluar((prevMode) => !prevMode)}
      className={tabular ? 'fa fa-th fa-lg' : 'fa fa-table fa-lg'}
      style={{ float: 'right' }}
    />
  );

  return (
    <Container>
      <h3 className="mb-4">
        My {languages ? languages.join(' + ') : ''} Projects {filters}{' '}
        {tabularForm}
      </h3>
      {tabular ? (
        projects
      ) : (
        <Row className="d-flex justify-content-around text-center">
          {projects}
        </Row>
      )}
    </Container>
  );
}

export default Project;
