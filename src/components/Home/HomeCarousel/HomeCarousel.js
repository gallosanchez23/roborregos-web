// @flow
import React, { Component } from 'react'
import Carousel from 'react-material-ui-carousel'
import './HomeCarousel.css'

class HomeCarousel extends Component {
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
   const images = []
   //  TODO [content]: Define content images
   const imagesNumber = 17

   for (let i = 1; i <= imagesNumber; i += 1) {
     images.push(i.toString())
   }

   return (
     <Carousel
       interval={4000}
       animation="slide"
       autoPlay
       className="home-carousel"
       indicators={false}
     >
       {
            images.map((img, index) => (
              <div className="card-image-container ">
                <img src={this.tryRequire(`${img}.jpg`)} alt={index} />
              </div>
            ))
          }
     </Carousel>
   )
 }
}

export default HomeCarousel
