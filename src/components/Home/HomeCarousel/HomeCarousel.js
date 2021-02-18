// @flow
import React, { Component } from 'react'
import Carousel from 'react-material-ui-carousel'
import './HomeCarousel.css'


class HomeCarousel extends Component  {

    /**
  * Parses path to projects image
  * @param {string} imgPath: Path to project's image/photo.
  * @return {path}
  */
 tryRequire = (imgPath: string) => {
      try {
        /* eslint-disable import/no-dynamic-require */
        /* eslint-disable global-require */
        return require(`../../../images/home/carousel/${imgPath}`)
      } catch (err) {
        return imgPath
      }
    }


  /**
   * Renders Responsive view of Projects's carousels.
   * @return {renderized_component} Home Carrousel only images
   */
  render() {
        const images = [
              '20190307_200108',
              '20190323_140105',
              '20190402_200108',
              'IMG-20190702-WA0000',
              'IMG-20191125-WA0028',
              'IMG-20200515-WA0006'
        ];

    return (
      <Carousel
      className="home-carousel"
      interval={3000}
      animation="fade"
      autoPlay={true}
      navButtonsAlwaysVisible
      >
          {
            images.map((img, index) => (
                  <div className="card-image-container col-md-8 offset-md-2"> 
                        <img className="card-image" src={this.tryRequire(`${img}.jpg`)} alt={index} />
                  </div>
            ))
          }
      </Carousel>
    )
  }
}

export default HomeCarousel
