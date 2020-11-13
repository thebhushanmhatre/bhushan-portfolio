import React, { Component } from 'react';
import RenderItems from './RenderItems';
import { Container, Row , Button } from 'reactstrap';

class Certificate extends Component{
  constructor(props) {
    super(props)
    this.state = {
      filter: false,
      on: false
    }
  }

  setFilter = (filter, on) => {
    if(this.state.filter === filter){
      this.setState({filter: false})
    } else {
      this.setState({filter: filter, on: on})
    }
  }

  getCertis = () => {
    let certificates = this.props.certificates.filter(item=>item.visible)
    if(this.state.filter){
      certificates = this.props.certificates.filter(item => item[this.state.on].indexOf(this.state.filter) !== -1)
    }
    return certificates
  }

  render(){

    const certis = this.getCertis().map(item=>
      <RenderItems key={"certId"+item.certId.toString()} item={item} height={{minHeight: "10rem"}} />
    )

    const filters = ["Javascript", "Python", "Ruby", "SQL"].map(item => 
      <Button key={item} className="bg-light text-dark mr-1" onClick={() => this.setFilter(item, 'tech')}>{item} </Button>
    )
    
    const issuers = ["Coursera", "FreeCodeCamp", "Linkedin", "IBM", "DataCamp"].map(item => 
      <Button key={item} className="bg-light text-dark mr-1" onClick={() => this.setFilter(item, 'issuer')}>{item}</Button>
    )

    return(
      <Container>
        <h3>My {this.state.filter ? this.state.filter : ''} Certificates {filters}</h3>
        <h3>{issuers}</h3>
        <Row>{certis}</Row>
      </Container>
    );
  }
}

export default Certificate;