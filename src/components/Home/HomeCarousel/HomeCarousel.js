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
        const images = [];
        const imagesNumber = 14;

        for(let i = 1; i<=imagesNumber; i++){
          images.push(i.toString())
        }

    return (
      <Carousel
      interval={2000}
      animation="fade"
      autoPlay={true}
      
      >
          {
            images.map((img, index) => (
                  <div className="card-image-container "> 
                        <img  src={this.tryRequire(`${img}.jpg`)} alt={index} />
                  </div>
            ))
          }
      </Carousel>
    )
  }
}

export default HomeCarousel
