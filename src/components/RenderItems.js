import React, { useState } from 'react';
import { Card, CardImg,  CardTitle, CardBody, CardSubtitle, CardText, CardLink, Collapse, Col, Modal, ModalHeader, ModalBody} from 'reactstrap';
import { Link } from 'react-router-dom';

// Render Items Component pass certis and projects in them
// Render Individual Items in Details Component

function RenderItems(props){
  const [isItemOpen, toggleItem] = useState(false)

  const cardSubtitle = props.item.institute || props.item.professor;
  const cardText = props.item.issuer || props.item.tech.join(', ');
  let insideCard = ""
  const cardBody = (
    <div>
    <CardBody className="text-center" onClick={() => toggleItem(!isItemOpen)}>
      <CardTitle>{props.item.name}</CardTitle>
      <CardSubtitle className="pt-1">{cardSubtitle}</CardSubtitle>
      <CardText className="pt-1">{cardText}</CardText>
    </CardBody>
    <Collapse isOpen={isItemOpen} >
    </Collapse>
    </div>
  );

  let onClickItem = ""
  if(props.item.projectId){
    insideCard = cardBody
    onClickItem = (
      <Modal id="modalitem" isOpen={isItemOpen} toggle={() => toggleItem(!isItemOpen)}  >
        <ModalHeader toggle={() => toggleItem(!isItemOpen)}>{props.item.name}</ModalHeader>
        <ModalBody>
        <CardBody>
          <CardLink href={props.item.href} target={props.item.target}>
            <CardImg top width="20%" src={props.item.src} alt={props.item.name} />
          </CardLink>
        </CardBody>
        </ModalBody>
      </Modal>
    );
  } else if (props.item.certId) {
    insideCard = (
      <Link className="certificateLink" to={`/certificate/${props.item.certId}`} >
        {cardBody}
      </Link>
    )
  }
  
  return(
    <>
      <Col xs="12" sm="6" md="6" lg="4" className="align-self-center">
        <Card className="m-2 renderItemCard" style={props.height}>
          {insideCard}
        </Card>
        {onClickItem}
      </Col>
    </>
  );
}

export default RenderItems;