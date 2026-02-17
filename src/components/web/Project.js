import React, { useState, useContext } from 'react';
import { Container } from 'reactstrap';
import RenderTable from './RenderTable';
import { DataContext } from '../../App';
import FilterDropdown from './FilterDropdown';

function Project() {
  const projectsData = useContext(DataContext).projects;
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleSelect = (option) => {
    if (selectedFilters.some(f => f.value === option.value)) {
      setSelectedFilters(selectedFilters.filter(f => f.value !== option.value));
    } else {
      setSelectedFilters([...selectedFilters, option]);
    }
  };

  const handleRemove = (option) => {
    setSelectedFilters(selectedFilters.filter(f => f.value !== option.value));
  };

  const getProjects = () => {
    let projects = projectsData.filter((item) => item.visible);
    if (selectedFilters.length > 0) {
      const filterValues = selectedFilters.map(f => f.value);
      return projects.filter((project) =>
        filterValues.every((fil) => project.tech.includes(fil))
      );
    }
    return projects;
  };

  const pickValues = () => {
    return getProjects().map((item) =>
      (({ href, name, tech, target, tag, src }) => ({
        href,
        name,
        tech,
        target,
        tag,
        src,
      }))(item)
    );
  };

  var projects;
  let project_list = getProjects();
  if (project_list.length > 0) {
    projects = <RenderTable items={pickValues()} type={'Project'} />;

  } else {
    projects = (
      <h3 className="text-danger">
        "{selectedFilters.map(f => f.label).join(' + ')}" Projects Coming Soon
      </h3>
    );
  }

  const availableFilters = [
    { label: 'Javascript', value: 'Javascript' },
    { label: 'Python', value: 'Python' },
    { label: 'React', value: 'React' }
  ];

  return (
    <Container className="pb-5">
      <div className="d-flex align-items-center mb-4">
        <h3 className="mb-0 me-3">My Projects</h3>
        <FilterDropdown 
          title="Filter by Language" 
          options={availableFilters} 
          selected={selectedFilters} 
          onSelect={handleSelect} 
          onRemove={handleRemove} 
        />
      </div>

      {projects}       
    </Container>
  );
}

export default Project;
