import React, { Component } from 'react';
import { Card, CardImg,  CardTitle, CardBody, CardSubtitle, CardText, CardLink, Collapse, Col, Modal, ModalHeader, ModalBody} from 'reactstrap';

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
    const cardSubtitle = this.props.item.institute || this.props.item.professor;
    const cardText = this.props.item.issuer || this.props.item.tech;
    console.log(cardSubtitle)
    console.log(cardText)
    return(
        <>
          <Col xs="12" sm="6" md="6" lg="4" className="align-self-center">
            <Card className="m-2" style={this.props.height}>
              <CardBody onClick={this.toggleCertificate}>
                <CardTitle>{this.props.item.name}</CardTitle>
                <CardSubtitle className="pt-1">{cardSubtitle}</CardSubtitle>
                <CardText className="pt-1">{cardText}</CardText>
              </CardBody>
              <Collapse  isOpen={this.state.isCertiOpen} >
              </Collapse>
            </Card>
            <Modal id="modalitem" isOpen={this.state.isCertiOpen} toggle={this.toggleCertificate}  >
              <ModalHeader toggle={this.toggleCertificate}>{this.props.item.name}</ModalHeader>
              <ModalBody>
              <CardBody>
                <CardLink href={this.props.item.href} target={this.props.item.target}>
                  <CardImg top width="20%"  src={this.props.item.src} alt={this.props.item.name} />
                </CardLink>
              </CardBody>
              </ModalBody>
            </Modal>
          </Col>
        </>
      );
    }
}

export default RenderItems;