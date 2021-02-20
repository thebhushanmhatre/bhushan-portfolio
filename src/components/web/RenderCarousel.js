import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

function RenderCarousel({ certis }) {
  // ["certId", "href", "src", "name", "issuer", "institute", "credentialID", "professor", "tech", "visible", "target"]

  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

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
        <a href={item.href} target={item.target} >
          <img src={item.src} alt={item.name} width="100%" />
        </a>
        <CarouselCaption className="text-dark" captionText={item.professor ? "Taught by: " + item.professor : "Technologies: " + item.tech.join(', ')} />
      </CarouselItem>
    )
  })

  return (
    <div className="col-12 col-md-10 offset-md-1">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={certis} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  )
}

export default RenderCarousel;