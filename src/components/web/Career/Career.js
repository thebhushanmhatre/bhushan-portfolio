import React, { useState, useContext } from 'react';
import { Row, Container } from 'reactstrap';
import { RenderInstitute } from './Education';
import { MsciAnalyst } from './MsciAnalyst';
import { MsciAssociate } from './MsciAssociate';
import { CompanyHeader, CareerCard } from './Helpers';
import { DataContext } from '../../../App';
import './Career.css';

function Career() {
  const [activeTab, setActiveTab] = useState('associate');
  const careerData = useContext(DataContext).career || [];

  const schoolData = careerData.find((item) => item.id === 'school');
  const patkarData = careerData.find((item) => item.id === 'patkar');
  const vjtiData = careerData.find((item) => item.id === 'vjti');

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
          <div className="pt-3">
            {schoolData && <RenderInstitute item={schoolData} />}
          </div>
        );
      case 'patkar':
        return (
          <div className="pt-3">
            {patkarData && (
              <RenderInstitute item={patkarData} imageRight={true} />
            )}
          </div>
        );
      case 'vjti':
        return (
          <div className="pt-3">
            {vjtiData && <RenderInstitute item={vjtiData} />}
          </div>
        );
      case 'analyst':
        return (
          <CareerCard>
            <CompanyHeader
              company="MSCI Inc."
              department="ESG Sustainability & Climate Department"
            />
            <MsciAnalyst />
          </CareerCard>
        );
      case 'associate':
        return (
          <CareerCard>
            <CompanyHeader
              company="MSCI Inc."
              department="ESG Sustainability & Climate Department"
            />
            <MsciAssociate />
          </CareerCard>
        );
      case 'present':
      default:
        return (
          <div
            className="text-center pt-5 fade-in"
            style={{ minHeight: '200px' }}
          >
            <h2>🚀 Coming Soon...</h2>
            <p className="text-muted mt-3">
              Something exciting is happening here! 🌟
            </p>
          </div>
        );
    }
  };

  return (
    <Container className="pt-5">
      <div className="timeline-container mt-3 mb-5">
        <div className="timeline-nav-wrapper">
          {careerData.map((step, i) => (
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
