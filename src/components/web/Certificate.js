import React, { useState } from 'react';
import { Container, Row , Button } from 'reactstrap';
import RenderCards from './RenderCards';
import RenderCarousel from './RenderCarousel';
import RenderTable from './RenderTable';

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
      certificates = certificates.filter(item => item[filterOn].indexOf(filterBy) !== -1)
    }
    return certificates.reverse()
  }

  const pickValues = () => {
    return getCertis().map((item) =>
      (({ href, name, issuer, professor, tech, target, inbuilt, src }) => ({ href, name, issuer, professor, tech, target, inbuilt, src }))(item)
    )
  }

  const certis = <RenderCards items={getCertis()} type={"Certificate"} />

  const filters = ["Javascript", "Python", "Ruby", "SQL"].map(item => 
    <Button key={item} className="mr-1" onClick={() => setFilter(item, 'tech')}>{item} </Button>
  )
  
  const issuers = ["Coursera", "FreeCodeCamp", "Linkedin"].map(item => 
    <Button key={item} className="mr-1" onClick={() => setFilter(item, 'issuer')}>{item}</Button>
  )

  let carouselForm = <span onClick={() => toggleCarousel(prevMode => !prevMode)} className={carousel ? "fa fa-th fa-lg" : "fas fa-film fa-lg"} style={{ float: "right" }} />

  let ppt = <RenderCarousel certis={getCertis()} />

  let display_format = carousel ? ppt : certis

  return(
    <Container>
      <h3>{filterBy ? filterBy : 'My'} Certificates {filters} {carouselForm}</h3>
      <h3>{issuers}</h3>
      <Row className="d-flex justify-content-around text-center">{display_format}</Row>
      <RenderTable className="mb-4 pb-4" items={pickValues()} type={"Certificate"} />
    </Container>
  );
}

export default Certificate;