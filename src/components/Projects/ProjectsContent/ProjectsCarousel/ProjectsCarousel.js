// @flow
import React, { Component } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Row, Col, Container } from 'react-bootstrap'
import ProjectsCard from '../ProjectsCard/ProjectsCard'
import './ProjectsCarousel.css'

/** Component class of Projects page. */
class ProjectsContent extends Component <Props> {
  /**
   * Class constructor
   * @param {list} props: List of projects data.
   */
  constructor(props: Props) {
    super(props)
    this.project_carousels = props.project_carousels
  }

  joinUsCallback = (link) => {
    window.open(link)
  }

  /**
   * Renders Responsive view of Projects's body page.
   * @return {renderized_component} Heder, grid, join us section and footer.
   */
  render() {
    return (
      <div className="project-carousels">
        {
            this.project_carousels.map((projects) => (
              <Carousel
                className="project-carousel"
                navButtonsAlwaysVisible
                timeout={200}
                animation="slide"
                autoPlay={false}
              >
                {projects.map((project, index) => <ProjectsCard project={project} index={index} />)}
              </Carousel>
            ))
        }
      </div>
    )
  }
}

export default ProjectsContent
