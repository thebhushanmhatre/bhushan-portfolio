import React, { useState, useContext } from 'react';
import { Row, Container } from 'reactstrap';
import { RenderInstitute } from './Education';
import { MsciAnalyst } from './MsciAnalyst';
import { MsciAssociate } from './MsciAssociate';
import { DataContext } from '../../../App';
import './Career.css';

const timelineData = [
  { id: 'born', year: '1997', label: 'Born', lineText: null },
  { id: 'school', year: '2013', label: 'Completed School', lineText: null },
  { id: 'patkar', year: '2015', label: 'Patkar College', lineText: null },
  {
    id: 'vjti',
    year: '2019',
    label: 'Graduated from VJTI🎓',
    lineText: null,
  },
  {
    id: 'analyst',
    year: '2022',
    label: 'Promotion✨',
    lineText: 'Analyst @ MSCI',
  },
  {
    id: 'associate',
    year: '2026',
    label: 'Joined JP Morgan Chase🎉',
    lineText: 'Associate @ MSCI',
  },
  { id: 'present', year: 'Present', label: '', lineText: null },
];

function Career() {
  const [activeTab, setActiveTab] = useState('associate');
  const educationData = useContext(DataContext).education || [];

  const schoolData = educationData.find(
    (item) => item.shortname === 'S.F.H.S.',
  );
  const patkarData = educationData.find(
    (item) => item.shortname === 'Patkar College',
  );
  const vjtiData = educationData.find((item) => item.shortname === 'V.J.T.I.');

  const companyHeader = (
    <div className="text-center mb-4">
      <h1>MSCI Inc.</h1>
      <h4>ESG Sustainability & Climate Department</h4>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'born':
        return (
          <div
            className="text-center pt-5 fade-in"
            style={{ minHeight: '200px' }}
          >
            <h2>🌍 Hello World!</h2>
            <p className="text-muted mt-3">Born in 1997</p>
          </div>
        );
      case 'school':
        return (
          <Row className="pt-3 align-items-center justify-content-center">
            {schoolData && <RenderInstitute item={schoolData} />}
          </Row>
        );
      case 'patkar':
        return (
          <Row className="pt-3 align-items-center justify-content-center">
            {patkarData && <RenderInstitute item={patkarData} />}
          </Row>
        );
      case 'vjti':
        return (
          <Row className="pt-3 align-items-center justify-content-center">
            {vjtiData && <RenderInstitute item={vjtiData} />}
          </Row>
        );
      case 'analyst':
        return (
          <div className="fade-in">
            {companyHeader}
            <MsciAnalyst />
          </div>
        );
      case 'associate':
        return (
          <div className="fade-in">
            {companyHeader}
            <MsciAssociate />
          </div>
        );
      case 'present':
      default:
        return (
          <div
            className="text-center pt-5 fade-in"
            style={{ minHeight: '200px' }}
          >
            <h2>🚀 Coming Soon...</h2>
            <p className="text-muted mt-3">To be Updated</p>
          </div>
        );
    }
  };

  return (
    <Container className="pt-5">
      <div className="timeline-container mt-3 mb-5">
        <div className="timeline-nav-wrapper">
          {timelineData.map((step, i) => (
            <React.Fragment key={step.id}>
              {/* Render connector line BEFORE node for i > 0 */}
              {i > 0 && (
                <div
                  className={`timeline-line ${activeTab === step.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(step.id)}
                >
                  {step.lineText && (
                    <div className="timeline-line-text">{step.lineText}</div>
                  )}
                </div>
              )}

              {/* Node (circle with year inside) */}
              <div
                className={`timeline-node ${activeTab === step.id ? 'active' : ''}`}
                onClick={() => setActiveTab(step.id)}
              >
                <div className="timeline-circle">
                  <span>{step.year}</span>
                </div>
                <div className="timeline-label">{step.label}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="timeline-content-box">{renderContent()}</div>
      </div>
    </Container>
  );
}

export default Career;
