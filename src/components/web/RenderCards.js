import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard(props) {
  if (props.type === "Certificate"){
    var link = `/certificate/${props.item.certId}`
    var target = ""
  } else {
    link = props.item.href
    target = "_blank"
  }
  let subtext = props.item.issuer ? <><p className="mb-0">{props.item.issuer}</p><p className="mb-0"><i>{props.item.tech.join(', ')}</i></p></> : <CardText>{props.item.tech.join(', ')}</CardText>
  return (
    <a className="mb-4" href={link} target={target} >
      <Card className="render-card">
        <CardImg className="render-card-img" top width="100%" src={props.item.src} alt={props.item.name} />
        <CardBody style={{padding: '0.8rem'}} >
          <CardTitle>{props.item.name}</CardTitle>
          {subtext}
        </CardBody>
      </Card>
    </a>
  );
}

function RenderCards(props) {
  let cards = props.items.map(item => <RenderCard item={item} type={props.type} />)
  return (
    <>
      {cards}
    </>
  );
}

export default RenderCards;