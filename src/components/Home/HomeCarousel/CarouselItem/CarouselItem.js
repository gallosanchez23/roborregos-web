// @flow
import React from 'react'
import { Carousel } from 'react-bootstrap'
import './CarouselItem.css'

type Props = {
  background: string
};

const CarouselItem = (props: Props) => {
  const { background } = props
  return (
    <div>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={background}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </div>
  )
}

export default CarouselItem
