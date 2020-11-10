import React from 'react';
import { Container } from 'reactstrap';
import Contact from './Contact';

const footer_style = {
  position: window.innerWidth < 425 ? 'relative' : 'absolute',
  left: window.innerWidth < 425 ? '' : '45%',
  paddingTop: window.innerWidth < 425 ? '' : '45%',
  bottom: window.innerWidth < 425 ? '' : '2px',
  backgroundColor: window.innerWidth < 425 ? 'white' : '',
  marginTop: window.innerWidth < 425 ? '50px' : ''
}

function Home(props){
  return(
    <>
      <Container className="text-center pt-3 pb-3" id="picturebox" >
        <img id="picture" className="mb-4" src="/assets/images/onclouds.jpg" alt="Bhushan Mhatre"/>
      </Container>
      <Container className="text-center pt-1 pb-3">
        <h1><div id="myname">Bhushan Chandrakant Mhatre</div></h1>
      </Container>
      <Contact contacts={props.contacts} />
      <p style={footer_style}> 
        Made in <img src='assets/images/indian_flag.svg' alt="Indian Flag" width="20" height="20" /> by <i class="fa fa-heart" aria-hidden="true" style={{color: 'red'}}></i>
      </p>
    </>
  );
}

export default Home;
