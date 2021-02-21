import React from 'react';
import { Container, Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

export default function Certificates() {
  return (
    <>
      <Container className="mt-5">
        <Card>
          <CardImg top width="100%" src="assets/images/certificates/gapminder.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">My Certificates</CardTitle>
            <CardText>From: <i>Coursera, Freecodecamp, Linkedin Learning, Cognitive Classes</i></CardText>
            <a href="/certificates">
              <Button color="primary">View All Certificates</Button>
            </a>
          </CardBody>
        </Card>
      </Container>
    </>
  )
}