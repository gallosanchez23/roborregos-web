import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import HeaderImg1 from 'images/about/about1.png';
import HeaderImg2 from 'images/about/about2.jpg';
import './CandidatesCarousel.css';

class CandidatesCarousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <div className='about-header-img-container'>
            <img
              className='about-header-img'
              src={ HeaderImg1 }
              alt='First slide'
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='about-header-img-container'>
            <img
              className='about-header-img'
              src={ HeaderImg2 }
              alt='Second slide'
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='about-header-img-container'>
            <img
              className='about-header-img'
              src={ HeaderImg1 }
              alt='Third slide'
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='about-header-img-container'>
            <img
              className='about-header-img'
              src={ HeaderImg2 }
              alt='Fourth slide'
            />
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CandidatesCarousel;
