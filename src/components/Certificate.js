import React, { Component } from 'react';
import RenderItems from './RenderItems';
import { Row } from 'reactstrap';

class Certificate extends Component{

  render(){

    const certis = this.props.certificates.filter(item=>item.visible).map(item=>
      <RenderItems key={item.certId} item={item} height={{minHeight: "10rem"}} />
    )

    return(
      <div className="container">
        <h3>My Certificates</h3>
        <Row>{certis}</Row>
      </div>
    );
  }
}

export default Certificate;