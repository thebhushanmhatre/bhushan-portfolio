import React, { Component } from 'react';
import { DATA } from '../data.js';
import { Card, CardImg,  CardTitle, CardBody, CardSubtitle, CardText, CardLink } from 'reactstrap';

// Render Items Component pass certis and projects in them
// Render Individual Items in Details Component
// <Media>
  // <Media object src={item.src} alt={item.name} />
  // <Media body>
    // <Media heading>{item.name}</Media>
    // <p>{item.issuer}</p>
  // </Media>
// </Media>

class Certificate extends Component{
    constructor(props){
    super(props);
    this.state = {
      certificates: DATA.certificates
    }
  }

  render(){
    const certis = this.state.certificates.filter(item=>item.visible).map(item=>
      <>
        <Card className="m-5">
          <CardLink href={item.href} >
          <CardImg top width="20%"  src={item.src} alt={item.name} />
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            <CardSubtitle>{item.issuer}</CardSubtitle>
            <CardText>{item.details}</CardText>
          </CardBody>
          </CardLink>
        </Card>
      </>
    )

    return(
      <div className="container">
        <h3>My Certificates</h3>
          {certis}
      </div>
    );
  }
}

export default Certificate;