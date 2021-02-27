import React from 'react';
import { Container } from 'reactstrap';
import Certificates from './Certificates'
import Projects from './Projects'
import Career from './Career'

const center_style = {
  minHeight: '80vh',
  width: '80vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

function Home(props) {
  return (
    <>
      <Container>
        <h1 className="m-auto" style={center_style} >I am currently working as Software Engineer in ESG Department at MSCI Inc.</h1>
      </Container>
      <Career />
      <Certificates />
      <Projects />
    </>
  );
}

export default Home;
