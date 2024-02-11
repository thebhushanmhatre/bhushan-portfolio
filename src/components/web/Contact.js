import React, { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { DataContext } from '../../App';

export default function Contact() {
  const contactsData = useContext(DataContext).contacts;

  const contacts = contactsData.map((item) => (
    <Col key={item.contId.toString()} style={{ fontSize: '40px' }}>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: item.color, padding: '10px' }}
      >
        <i className={item.icon + ' contact-icon'}></i>
      </a>
    </Col>
  ));

  return (
    <Container className="text-center">
      <Row>{contacts}</Row>
    </Container>
  );
}
