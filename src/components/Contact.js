import React from 'react';
import { Row, Col } from 'reactstrap';

export default function Contact(props){

const contacts = props.contacts.map(item=>
  <Col key={item.contId.toString()} style={{fontSize: '40px'}} >
    <a href={item.href} target="_blank" rel="noopener noreferrer" style={{color: item.color, padding: '10px', backgroundColor: 'whitesmoke' }} >
      <i className={item.icon + ' contact-icon'}>
      </i>
    </a>
  </Col>
)

  return( 
    <div className="container text-center">
      <Row>{contacts}</Row>
    </div>
  );
}
