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

function RenderItems(props){
  return(
      <>
        <Card className="m-5">
          <CardLink href={props.item.href} >
          <CardImg top width="20%"  src={props.item.src} alt={props.item.name} />
          <CardBody>
            <CardTitle>{props.item.name}</CardTitle>
            <CardSubtitle>{props.item.issuer}</CardSubtitle>
            <CardText>{props.item.details}</CardText>
          </CardBody>
          </CardLink>
        </Card>
      </>
    );
}

export default RenderItems;