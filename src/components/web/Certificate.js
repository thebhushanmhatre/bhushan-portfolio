import React, { useContext, useState } from 'react';
import { Container } from 'reactstrap';
import RenderTable from './RenderTable';
import { DataContext } from '../../App';
import FilterDropdown from './FilterDropdown';

function Certificate() {
  const [selectedTech, setSelectedTech] = useState([]);
  const [selectedIssuer, setSelectedIssuer] = useState([]);
  const certificatesData = useContext(DataContext).certificates;

  const handleTechSelect = (option) => {
    if (selectedTech.some(f => f.value === option.value)) {
      setSelectedTech(selectedTech.filter(f => f.value !== option.value));
    } else {
      setSelectedTech([...selectedTech, option]);
    }
  };

  const handleTechRemove = (option) => {
    setSelectedTech(selectedTech.filter(f => f.value !== option.value));
  };

  const handleIssuerSelect = (option) => {
    if (selectedIssuer.some(f => f.value === option.value)) {
      setSelectedIssuer(selectedIssuer.filter(f => f.value !== option.value));
    } else {
      setSelectedIssuer([...selectedIssuer, option]);
    }
  };

  const handleIssuerRemove = (option) => {
    setSelectedIssuer(selectedIssuer.filter(f => f.value !== option.value));
  };

  const getCertis = () => {
    let certificates = certificatesData.filter((item) => item.visible);
    
    if (selectedTech.length > 0) {
      const techValues = selectedTech.map(f => f.value);
      certificates = certificates.filter(
        (item) => techValues.some(tech => item.tech.includes(tech))
      );
    }

    if (selectedIssuer.length > 0) {
      const issuerValues = selectedIssuer.map(f => f.value);
       certificates = certificates.filter(
        (item) => issuerValues.includes(item.issuer)
      );
    }
    
    return certificates;
  };

  const pickValues = () => {
    return getCertis().map((item) =>
      (({ href, name, issuer, professor, tech, target, inbuilt, src }) => ({
        href,
        name,
        issuer,
        professor,
        tech,
        target,
        inbuilt,
        src,
      }))(item)
    );
  };

  const techOptions = [
    { label: 'Javascript', value: 'Javascript' },
    { label: 'Python', value: 'Python' },
    { label: 'SQL', value: 'SQL' }
  ];

  const issuerOptions = [
    { label: 'Coursera', value: 'Coursera' },
    { label: 'freeCodeCamp', value: 'freeCodeCamp' },
    { label: 'Linkedin', value: 'Linkedin' }
  ];

  const certList = pickValues();
  let renderTable;

  if (certList.length > 0) {
    renderTable = (
      <RenderTable
        className="m-4 pb-4"
        items={certList}
        type={'Certificate'}
      />
    );
  } else {
    renderTable = (
      <h3 className="text-danger">
        No Certificates Found
      </h3>
    );
  }

  return (
    <Container className="pb-5">
      <div className="d-flex align-items-center mb-4 flex-wrap">
        <h3 className="mb-0 me-3">My Certificates</h3>
        <FilterDropdown 
          title="Filter by Tech" 
          options={techOptions} 
          selected={selectedTech} 
          onSelect={handleTechSelect} 
          onRemove={handleTechRemove} 
        />
        <FilterDropdown 
          title="Filter by Issuer" 
          options={issuerOptions} 
          selected={selectedIssuer} 
          onSelect={handleIssuerSelect} 
          onRemove={handleIssuerRemove} 
        />
      </div>
      {renderTable}
    </Container>
  );
}

export default Certificate;
