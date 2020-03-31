import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';


class CarouselItem extends Component{
  constructor(props) {
    super(props);

    // ===== Attributes ====
    this.background = props.background;
  }

  render() {
    return(
      <div>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={this.background}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </div>
    );
  }
}

export default CarouselItem;
