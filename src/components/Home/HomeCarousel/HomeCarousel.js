import React, { Component } from 'react';
import placeholder from 'images/placeholder-rectangle.png';
// import placeholder from 'images/carousel1.jpg';
import { Carousel } from 'react-bootstrap';

class HomeCarousel extends Component {
  constructor(props){
    super(props);

    this.tryRequire = this.tryRequire.bind(this);
  }

  tryRequire(img_path) {
    try {
      return require('images/' + img_path);
    } catch (err) {
      return placeholder;
    }
  }

  render() {
    return(
      <div className='home-carousel'>
        <Carousel className='home-carousel'>
          <Carousel.Item className='home-carousel'>
            <img
              className="carousel-image"
              src={this.tryRequire('5tageneracion.jpg')}
              alt="First slide"
            />
            <Carousel.Caption as="div" className="carousel-caption">
              <h3>Mission</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='home-carousel'>
            <img
              className="carousel-image"
              src={this.tryRequire('4tageneracion.jpg')}
              alt="First slide"
            />
            <Carousel.Caption as="div" className="carousel-caption">
              <h3>Vision</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='home-carousel'>
            <img
              className="carousel-image"
              src={this.tryRequire('3ergeneracion.jpg')}
              alt="First slide"
            />
            <Carousel.Caption as="div" className="carousel-caption">
              <h3>Values</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default HomeCarousel;
