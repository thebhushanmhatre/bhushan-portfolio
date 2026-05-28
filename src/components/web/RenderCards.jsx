import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard(props) {
  let link;
  let target;

  if (props.type === 'Certificate') {
    link = `/certificate/${props.item.certId}`;
    target = props.item.target;
  } else {
    link = props.item.href;
    target = props.item.target;
  }
  let subtext = props.item.issuer ? (
    <>
      <p className="mb-0">{props.item.issuer}</p>
      <p className="mb-0">
        <i>{props.item.tech.join(', ')}</i>
      </p>
    </>
  ) : (
    <CardText>{props.item.tech.join(', ')}</CardText>
  );

  return (
    <Card className="render-card">
      <CardImg
        className="render-card-img"
        top
        width="100%"
        src={props.item.src}
        alt={props.item.name}
      />
      <a href={link} target={target}>
        <CardBody style={{ padding: '0.8rem' }}>
          <CardTitle>{props.item.name}</CardTitle>
          {subtext}
        </CardBody>
      </a>
    </Card>
  );
}

function RenderCards(props) {
  let cards = props.items.map((item, i) => (
    <RenderCard key={i} item={item} type={props.type} />
  ));
  return <>{cards}</>;
}

export default RenderCards;
