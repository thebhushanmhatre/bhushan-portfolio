import React from 'react';
import { Container } from 'reactstrap';
import Certificates from './Certificates';
import Projects from './Projects';
import Career from './Career';
import Contact from './Contact';

const center_style = {
  minHeight: '80vh',
  width: '80vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

function Home(props) {
  return (
    <>
      <Container>
        <h1 className="m-auto" style={center_style}>
          Hi, I am a Software Engineer with over 6 years of experience
        </h1>
      </Container>
      <div style={{ marginBottom: '250px' }}>
        <Career />
      </div>
      <div style={{ marginBottom: '250px' }}>
        <Certificates />
      </div>
      <div style={{ marginBottom: '250px' }}>
        <Projects />
      </div>
      <div style={{ marginBottom: '250px' }}>
        <Contact contacts={props.contacts} />
      </div>
    </>
  );
}

export default Home;
