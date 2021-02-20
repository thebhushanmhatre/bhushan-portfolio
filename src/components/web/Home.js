import React from 'react';
import { Container } from 'reactstrap';
import Contact from './Contact';

function Home(props){
  let my_name;
  if (window.innerWidth >= 500) {
    my_name = <div className="myname">Bhushan Chandrakant Mhatre</div>
  } else {
    my_name = <div className="myname">Bhushan C. Mhatre</div>
  }

  let pic_style;
  if (window.innerWidth >= 1445) {
    pic_style = {}
  } else if (window.innerWidth >= 500) {
    pic_style = {
      width: (window.innerWidth * 0.4).toString(),
      height: (window.innerWidth * 0.4).toString()
    }
  } else {
    pic_style = {
      width: (window.innerWidth - 100).toString(),
      height: (window.innerWidth - 100).toString()
    }
  }

  return(
    <>
      <Container className="text-center pt-3 pb-3" id="picturebox" >
        <img id="picture" className="mb-4" src="/assets/images/onclouds.jpg" alt="Bhushan Mhatre" width={pic_style.width} height={pic_style.height} />
      </Container>
      <Container className="text-center pt-1 pb-3">
        <h1>{my_name}</h1>
      </Container>
      <Contact contacts={props.contacts} />
      <p className="text-center pt-3 mb-0">
        Made in <img src='assets/images/indian_flag.svg' alt="Indian Flag" width="20" height="20" /> by <i className="fa fa-heart" aria-hidden="true" style={{color: 'red'}}></i>
      </p>
    </>
  );
}

export default Home;
