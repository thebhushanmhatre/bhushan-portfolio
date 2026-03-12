import React from 'react';
import { Container } from 'reactstrap';
import Certificates from './Certificates';
import Projects from './Projects';
import Career from './Career';
import Contact from './Contact';
import TypingEffect from '../common/TypingEffect';

const center_style = {
  minHeight: '80vh',
  width: '80vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

function Home(props) {
  const typingTexts = [
    'Namaskar 🙏',
    'My name is Bhushan Mhatre 🖐️',
    'I am a Software Engineer 💻',
  ];
  return (
    <>
      <Container>
        <h1 className="m-auto" style={center_style}>
          <TypingEffect defaultValue="" texts={typingTexts} />
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
