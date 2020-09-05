import React from 'react';
import { Row, Col } from 'reactstrap';

export default function Contact(props){

const contacts = props.contacts.map(item=>
  <Col key={item.contId.toString()} style={{fontSize: '100px', margin: '10px'}} >
    <a href={item.href} target="_blank" rel="noopener noreferrer" style={{color: item.color, padding: '20px', backgroundColor: 'whitesmoke' }} >
      <i className={item.icon + ' contact-icon'}>
      </i>
    </a>
  </Col>
)

  return( 
    <div className="container text-center">
      <Row style={{marginTop: window.innerWidth < 995 ? '' : '10vh'}}>{contacts}</Row>
      <p style={{position: window.innerWidth < 425 ? 'relative' : 'absolute', 
          left: window.innerWidth < 425 ? '' : '45%',
          paddingTop: window.innerWidth < 425 ? '' : '45%',
          bottom: window.innerWidth < 425 ? '' : '2px',
          backgroundColor: window.innerWidth < 425 ? 'white' : '',
          marginTop: window.innerWidth < 425 ? '50px' : ''}}> 
        Made in <img src='assets/images/indian_flag.svg' alt="Indian Flag" width="20" height="20" /> by <i class="fa fa-heart" aria-hidden="true" style={{color: 'red'}}></i>
      </p>
    </div>
  );
}
