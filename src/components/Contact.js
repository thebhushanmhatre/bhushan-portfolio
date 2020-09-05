import React from 'react';
import { Row, Col } from 'reactstrap';

export default function Contact(props){

const contacts = props.contacts.map(item=>
  <Col key={item.contId.toString()} style={{fontSize: '100px'}} >
    <a href={item.href} target="_blank" rel="noopener noreferrer" style={{color: item.color, padding: '20px', backgroundColor: 'whitesmoke'}} >
      <i className={item.icon + ' contact-icon'}>
      </i>
    </a>
  </Col>
)

  return( 
    <div className="container text-center">
      <Row style={{marginTop: '10vh'}}>{contacts}</Row>
      <p style={{position: 'absolute', bottom: '2px', left: '45%'}}> 
        Made in <img src='assets/images/indian_flag.svg' alt="Indian Flag" width="20" height="20" /> by <i class="fa fa-heart" aria-hidden="true" style={{color: 'red'}}></i>
      </p>
    </div>
  );
}
