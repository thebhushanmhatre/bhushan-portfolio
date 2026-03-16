import React, { useState, useContext } from 'react';
import { Container } from 'reactstrap';
import RenderTable from './RenderTable';
import { DataContext } from '../../App';
import FilterDropdown from './FilterDropdown';
import { useTheme } from '../../contexts/ThemeContext';

function Project() {
  const projectsData = useContext(DataContext).projects;
  const { darkMode } = useTheme();
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleSelect = (option) => {
    if (selectedFilters.some((f) => f.value === option.value)) {
      setSelectedFilters(
        selectedFilters.filter((f) => f.value !== option.value),
      );
    } else {
      setSelectedFilters([...selectedFilters, option]);
    }
  };

  const handleRemove = (option) => {
    setSelectedFilters(selectedFilters.filter((f) => f.value !== option.value));
  };

  const getProjects = () => {
    let projects = projectsData.filter((item) => item.visible);
    if (selectedFilters.length > 0) {
      const filterValues = selectedFilters.map((f) => f.value);
      return projects.filter((project) =>
        filterValues.every((fil) => project.tech.includes(fil)),
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
      }))(item),
    );
  };

  var projects;
  let project_list = getProjects();
  if (project_list.length > 0) {
    projects = <RenderTable items={pickValues()} type={'Project'} />;
  } else {
    projects = (
      <div
        className={`text-center py-5 px-4 rounded-4 shadow-sm border ${
          darkMode
            ? 'bg-dark text-light border-secondary'
            : 'bg-white text-dark border-light-subtle'
        }`}
        style={{ marginTop: '2rem' }}
      >
        <div
          className="mb-4 d-inline-block p-4 rounded-circle"
          style={{
            backgroundColor: darkMode
              ? 'rgba(255,255,255,0.05)'
              : 'rgba(0,0,0,0.03)',
          }}
        >
          <i
            className={`fa fa-search fa-4x ${
              darkMode ? 'text-info' : 'text-primary'
            }`}
            aria-hidden="true"
          />
        </div>
        <h2 className="fw-bold mb-3">No matching projects</h2>
        <p
          className={`mx-auto mb-4 fs-5 ${
            darkMode ? 'text-secondary' : 'text-muted'
          }`}
          style={{ maxWidth: '500px' }}
        >
          We couldn't find any projects that match all of these technologies:
          <br />
          <span className="d-flex flex-wrap justify-content-center gap-2 mt-3">
            {selectedFilters.map((f) => (
              <span
                key={f.value}
                className={`badge rounded-pill px-3 py-2 ${
                  darkMode
                    ? 'bg-secondary text-light'
                    : 'bg-light text-dark border'
                }`}
              >
                {f.label}
              </span>
            ))}
          </span>
        </p>
        <button
          className={`btn btn-lg rounded-pill px-5 ${
            darkMode ? 'btn-outline-info' : 'btn-primary'
          }`}
          onClick={() => setSelectedFilters([])}
        >
          <i className="fa fa-times-circle me-2" aria-hidden="true" />
          Clear all filters
        </button>
      </div>
    );
  }

  const availableFilters = [
    { label: 'Javascript', value: 'Javascript' },
    { label: 'Python', value: 'Python' },
    { label: 'React', value: 'React' },
  ];

  return (
    <Container className="pb-5">
      <div className="d-flex align-items-center mb-4 flex-wrap">
        <h3 className="mb-0 me-3">My Projects</h3>
        <FilterDropdown
          title="Filter by Tech"
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
