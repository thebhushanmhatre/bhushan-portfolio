import React, { useState } from 'react';
import RenderItems from './RenderItems';
import RenderCarousel from './RenderCarousel';
import { Container, Row , Button } from 'reactstrap';

function Certificate(props){
  const [filterBy, setFilterBy] = useState(false)
  const [filterOn, setFilterOn] = useState(false)
  const [carousel, toggleCarousel] = useState(true)

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
    return certificates.reverse()
  }

  const certis = getCertis().map(item=>
    <RenderItems key={"certId"+item.certId.toString()} item={item} height={{minHeight: "10rem"}} />
  )

  const filters = ["Javascript", "Python", "Ruby", "SQL"].map(item => 
    <Button key={item} className="bg-light text-dark mr-1" onClick={() => setFilter(item, 'tech')}>{item} </Button>
  )
  
  const issuers = ["Coursera", "FreeCodeCamp", "Linkedin"].map(item => 
    <Button key={item} className="bg-light text-dark mr-1" onClick={() => setFilter(item, 'issuer')}>{item}</Button>
  )

  let carouselForm = <span onClick={() => toggleCarousel(prevMode => !prevMode)} className={carousel ? "fa fa-th fa-lg" : "fas fa-film fa-lg"} style={{ float: "right" }} />

  let ppt = <RenderCarousel certis={getCertis()} />

  return(
    <Container>
      <h3>{filterBy ? filterBy : 'My'} Certificates {filters} {carouselForm}</h3>
      <h3>{issuers}</h3>
      <Row>{carousel ? ppt : certis}</Row>
    </Container>
  );
}

export default Certificate;