import React from 'react';
import { Container } from 'reactstrap';
import Contact from './Contact';

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
      <p className="text-center pt-3 mb-0">
        Made in <img src='assets/images/indian_flag.svg' alt="Indian Flag" width="20" height="20" /> by <i className="fa fa-heart" aria-hidden="true" style={{color: 'red'}}></i>
      </p>
    </>
  );
}

export default Home;
