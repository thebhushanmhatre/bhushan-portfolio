import React from 'react';
import { Container } from 'reactstrap';

function Home(){
  return(
    <Container className="text-center">
      <img className="mb-4" src="/assets/images/onclouds.jpg" alt="Bhushan Mhatre" style={{borderRadius: '50%'}}/>
      <h2><i>Bhushan Chandrakant Mhatre</i></h2>
    </Container>
  );
}

export default Home;
