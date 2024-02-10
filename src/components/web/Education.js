import React, { useContext } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { DataContext } from '../../App';

function RenderInstitute({ item }) {
  return (
    <Col md="4" className="text-center">
      <a href={item.href} target="_blank" rel="noopener noreferrer">
        <img
          className="eduimage"
          src={item.src}
          alt={item.shortname}
          width="150px"
        ></img>
      </a>
      <h3>{item.shortname}</h3>
      <h5>({item.year})</h5>
      <p>{item.degree}</p>
    </Col>
  );
}

function Education() {
  const educationData = useContext(DataContext).education;
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
