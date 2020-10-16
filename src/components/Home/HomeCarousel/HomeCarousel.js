// @flow
import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import placeholder from '../../../images/placeholder-rectangle.png'
import './HomeCarousel.css'

class HomeCarousel extends Component {
  static tryRequire(img_path: string) {
    try {
      return require(`images/${img_path}`) // eslint-disable-line import/no-dynamic-require, global-require
    } catch (err) {
      return placeholder
    }
  }

  super() {
    this.tryRequire = this.tryRequire.bind(this)
  }

  render() {
    return (
      <div className="home-carousel">
        <Carousel className="home-carousel">
          <Carousel.Item className="home-carousel">
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
          <Carousel.Item className="home-carousel">
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
          <Carousel.Item className="home-carousel">
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
    )
  }
}

export default HomeCarousel
