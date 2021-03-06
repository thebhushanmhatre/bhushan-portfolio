import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardLink, Container } from 'reactstrap';

function RenderCertificate(props){
  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="/certificates">Certificates</a></BreadcrumbItem>
        <BreadcrumbItem active>{props.certificate.name}</BreadcrumbItem>
      </Breadcrumb>
      <div className="col-12 col-md-10 offset-md-1">
        <Card className="text-center">
          <CardImg src={props.certificate.src} alt={props.certificate.name} />
          <CardBody>
            <CardTitle>{props.certificate.name}</CardTitle>
            <CardSubtitle className="mb-4">{props.certificate.institute || props.certificate.issuer}</CardSubtitle>
            <CardLink href={props.certificate.href} target={props.certificate.target} className="bg-primary text-light p-2 m-2 verifyButton">Verify Certficate</CardLink>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
}

export default RenderCertificate;