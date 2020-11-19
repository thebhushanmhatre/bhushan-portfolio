import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

function RenderCarousel({ certis }) {
  // let column_names = ["#", "Certificate Name", "Technologies Used", "Issued from"]
  // ["certId", "href", "src", "name", "issuer", "institute", "credentialID", "professor", "tech", "visible", "target"]

  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  var pic_style;
  if (window.innerWidth >= 500) {
    pic_style = {
      width: (window.innerWidth * 0.75).toString(),
      height: (window.innerHeight * 0.72 ).toString()
    }
  } else {
    pic_style = {
      width: (window.innerWidth - 50).toString(),
      height: (window.innerWidth - 50).toString()
    }
  }

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === certis.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? certis.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = certis.map(item => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src} >
        <img src={item.src} alt={item.name} width={pic_style.width} height={pic_style.height} />
        <CarouselCaption className="text-danger" captionHeader={item.professor ? "Taught by: " + item.professor : "Technologies: " + item.tech.join(', ')} captionText={item.professor ? "Technologies: "+item.tech.join(', ') : ""} />
      </CarouselItem>
    )
  })

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators items={certis} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  )
}

export default RenderCarousel;