import React, { useContext } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { DataContext } from '../../../App';

export function RenderInstitute({ item }) {
  return (
    <Col md="12" className="text-center">
      <a href={item.href} target="_blank" rel="noopener noreferrer">
        <img
          className="eduimage"
          src={item.src}
          alt={item.name}
          width="150px"
        ></img>
      </a>
      <h3>{item.name}</h3>
      <h5>({item.year})</h5>
      <p>{item.degree}</p>
    </Col>
  );
}

function Education() {
  const careerData = useContext(DataContext).career || [];
  const educationData = careerData.filter(item => item.type === 'education');
  const institutes = educationData.map((item) => (
    <RenderInstitute key={item.year} item={item} />
  ));
  return (
    <Container>
      <Row className="pt-3 align-items-center">{institutes}</Row>
    </Container>
  );
}

export default Education;
