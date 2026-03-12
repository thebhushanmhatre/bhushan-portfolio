import React, { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { DataContext } from '../../App';
import { useTheme } from '../../contexts/ThemeContext';

export default function Contact() {
  const contactsData = useContext(DataContext).contacts;
  const { darkMode } = useTheme();

  const contacts = contactsData.map((item) => (
    <Col key={item.contId.toString()} className="mb-4">
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color:
            darkMode && (item.color === 'black' || item.color === 'purple')
              ? item.color === 'black'
                ? 'white'
                : '#bb86fc'
              : item.color,
          textDecoration: 'none',
        }}
        className="d-flex flex-column align-items-center"
      >
        <i
          className={`${item.icon} contact-icon mb-2`}
          style={{ fontSize: '40px' }}
        ></i>
        <span style={{ fontSize: '1rem', fontWeight: '500' }}>
          {item.displayName ||
            item.name.charAt(0).toUpperCase() + item.name.slice(1)}
        </span>
      </a>
    </Col>
  ));

  return (
    <Container className="text-center">
      <Row>{contacts}</Row>
    </Container>
  );
}
