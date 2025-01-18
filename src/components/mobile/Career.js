import React from 'react';
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';

export default function Projects() {
  return (
    <>
      <Container className="mt-5 mb-5 text-center">
        <Card>
          <CardImg
            top
            width="100%"
            src="assets/images/MSCI_logo.svg"
            alt="Card image cap"
            height="230"
            className="bg-white"
          />
          <CardBody>
            <CardTitle tag="h5">My Work Experience</CardTitle>
            <a href="/workexp">
              <Button color="primary">View my Career Timeline</Button>
            </a>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}
