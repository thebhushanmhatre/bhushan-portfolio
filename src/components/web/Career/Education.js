import React from 'react';
import { Row, Col } from 'reactstrap';
import './Education.css';
import { ClickableImage, CareerCard } from './Helpers';

export function RenderInstitute({ item, imageRight = false }) {
  const content = (
    <div className="d-flex flex-column justify-content-center h-100">
      <h3 className="edu-title">
        <a href={item.href} target="_blank" rel="noopener noreferrer" className="edu-link">
          {item.name}
        </a>
      </h3>
      <div className="edu-year">({item.year})</div>
      <div className="edu-degree">{item.degree}</div>
      {item.description &&
        (Array.isArray(item.description) ? (
          item.description.map((para, index) => (
            <p
              key={index}
              className={`edu-description text-muted ${index < item.description.length - 1 ? 'mb-2' : ''}`}
            >
              {para}
            </p>
          ))
        ) : (
          <p className="edu-description text-muted">{item.description}</p>
        ))}
    </div>
  );

  const image = (
    <div className="edu-img-container d-flex justify-content-center align-items-center h-100">
      <ClickableImage src={item.src} alt={item.name} />
    </div>
  );

  return (
    <CareerCard>
      <Row className="align-items-center">
        {imageRight ? (
          <>
            <Col md="8" className="text-start order-2 order-md-1">
              {content}
            </Col>
            <Col md="4" className="text-center order-1 order-md-2">
              {image}
            </Col>
          </>
        ) : (
          <>
            <Col md="4" className="text-center">
              {image}
            </Col>
            <Col md="8" className="text-start">
              {content}
            </Col>
          </>
        )}
      </Row>
    </CareerCard>
  );
}
