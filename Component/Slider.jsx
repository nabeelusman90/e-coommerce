import React from 'react'
import { Carousel } from 'react-bootstrap'
const Slider = () => {
  return (
    <Carousel>
    <Carousel.Item >
     <img src="/Images/slider0.jpg" alt="this is img" className="img"/>
     <Carousel.Caption>
          <h1 className="slider-text">Browse an extensive range of products with just a few clicks.</h1>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
  <img src="/Images/slider6.png" alt="this is img" className="img"/>
  <Carousel.Caption>
          <h1 className="slider-text">Shop from the comfort of your home, anytime, anywhere.</h1>
        </Carousel.Caption>
</Carousel.Item>
    <Carousel.Item>
    <img src="/Images/slider12.jpg" alt="this is img" className="img"/>
    <Carousel.Caption>
          <h1 className="slider-text">Enjoy exclusive deals and discounts available only online.</h1>
        </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
 
  )
}

export default Slider
