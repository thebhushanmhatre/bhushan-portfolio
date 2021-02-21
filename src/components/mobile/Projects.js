import React from 'react';
import { Container, Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';

export default function Projects() {
  return (
    <>
      <Container className="mt-5">
        <Card>
          <CardImg top width="100%" src="assets/images/projects/radar.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">My Projects</CardTitle>
            <a href="/projects">
              <Button color="primary">View All Projects</Button>
            </a>
          </CardBody>
        </Card>
      </Container>
    </>
  )
}