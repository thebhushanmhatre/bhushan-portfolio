import React, { Component } from 'react';
import { Card, CardImg,  CardTitle, CardBody, CardSubtitle, CardText, CardLink, Collapse, Col, Modal, ModalHeader, ModalBody} from 'reactstrap';
import { Link } from 'react-router-dom';

// Render Items Component pass certis and projects in them
// Render Individual Items in Details Component

class RenderItems extends Component{
  constructor(props){
    super(props);
    this.state = {
      isItemOpen: false
    }
    this.toggleItem = this.toggleItem.bind(this);
  }

  toggleItem(){
    this.setState(prevState=>{
      return {
        isItemOpen: !(prevState.isItemOpen)
      }
    });
  }

  render(){
    const cardSubtitle = this.props.item.institute || this.props.item.professor;
    const cardText = this.props.item.issuer || this.props.item.tech;
    let insideCard = ""
    const cardBody = (
      <div>
      <CardBody onClick={this.toggleItem}>
        <CardTitle>{this.props.item.name}</CardTitle>
        <CardSubtitle className="pt-1">{cardSubtitle}</CardSubtitle>
        <CardText className="pt-1">{cardText}</CardText>
      </CardBody>
      <Collapse isOpen={this.state.isItemOpen} >
      </Collapse>
      </div>
    );
    let onClickItem = ""
    if(this.props.item.projectId){
      insideCard = cardBody
      onClickItem = (
        <Modal id="modalitem" isOpen={this.state.isItemOpen} toggle={this.toggleItem}  >
          <ModalHeader toggle={this.toggleItem}>{this.props.item.name}</ModalHeader>
          <ModalBody>
          <CardBody>
            <CardLink href={this.props.item.href} target={this.props.item.target}>
              <CardImg top width="20%"  src={this.props.item.src} alt={this.props.item.name} />
            </CardLink>
          </CardBody>
          </ModalBody>
        </Modal>
      );
    } else if (this.props.item.certId) {
      insideCard = (
        <Link className="certificateLink" to={`/certificate/${this.props.item.certId}`} >
          {cardBody}
        </Link>
      )
    }
    return(
        <>
          <Col xs="12" sm="6" md="6" lg="4" className="align-self-center">
            <Card className="m-2 renderItemCard" style={this.props.height}>
              {insideCard}
            </Card>
            {onClickItem}
          </Col>
        </>
      );
    }
}

export default RenderItems;