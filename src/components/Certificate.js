import React, { Component } from 'react';
import { DATA } from '../data.js';
import RenderItems from './RenderItems';
import { Row } from 'reactstrap';

class Certificate extends Component{
  constructor(props){
    super(props);
    this.state = {
      certificates: DATA.certificates
    }
  }

  render(){
    const certis = this.state.certificates.filter(item=>item.visible).map(item=>
      <RenderItems item={item} />
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