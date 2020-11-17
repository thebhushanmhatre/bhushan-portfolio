import React, { useState } from 'react';
import RenderItems from './RenderItems';
import { Container, Row , Button } from 'reactstrap';

function Certificate(props){
  const [filterBy, setFilterBy] = useState(false)
  const [filterOn, setFilterOn] = useState(false)

  const setFilter = (filter, on) => {
    if(filterBy === filter){
      setFilterBy(false)
    } else {
      setFilterBy(filter)
      setFilterOn(on)
    }
  }

  const getCertis = () => {
    let certificates = props.certificates.filter(item=>item.visible)
    if(filterBy){
      certificates = props.certificates.filter(item => item[filterOn].indexOf(filterBy) !== -1)
    }
    return certificates
  }

  const certis = getCertis().map(item=>
    <RenderItems key={"certId"+item.certId.toString()} item={item} height={{minHeight: "10rem"}} />
  )

  const filters = ["Javascript", "Python", "Ruby", "SQL"].map(item => 
    <Button key={item} className="bg-light text-dark mr-1" onClick={() => setFilter(item, 'tech')}>{item} </Button>
  )
  
  const issuers = ["Coursera", "FreeCodeCamp", "Linkedin", "IBM", "DataCamp"].map(item => 
    <Button key={item} className="bg-light text-dark mr-1" onClick={() => setFilter(item, 'issuer')}>{item}</Button>
  )

  return(
    <Container>
      <h3>My {filterBy ? filterBy : ''} Certificates {filters}</h3>
      <h3>{issuers}</h3>
      <Row>{certis}</Row>
    </Container>
  );
}

export default Certificate;