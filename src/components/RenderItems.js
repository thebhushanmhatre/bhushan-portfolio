import React, { Component } from 'react';
import { Card, CardImg,  CardTitle, CardBody, CardSubtitle, CardText, CardLink, Collapse } from 'reactstrap';

// Render Items Component pass certis and projects in them
// Render Individual Items in Details Component

class RenderItems extends Component{
  constructor(props){
    super(props);
    this.state = {
      isCertiOpen: false
    }
    this.toggleCertificate = this.toggleCertificate.bind(this);
  }

  toggleCertificate(){
    this.setState(prevState=>{
      return {
        isCertiOpen: !(prevState.isCertiOpen)
      }
    });
  }

  render(){
    console.log(this.props.item.target);
    return(
        <>
        <Card className="m-2">
          <CardBody onClick={this.toggleCertificate}>
            <CardTitle>{this.props.item.name}</CardTitle>
            <CardSubtitle>{this.props.item.institute}</CardSubtitle>
            <CardText>{this.props.item.issuer || this.props.item.tech}</CardText>
          </CardBody>
          <Collapse  isOpen={this.state.isCertiOpen} >
            <CardLink href={this.props.item.href} target={this.props.item.target}>
              <CardImg top width="20%"  src={this.props.item.src} alt={this.props.item.name} />
            </CardLink>
          </Collapse>
        </Card>
        </>
      );
    }
}

export default RenderItems;