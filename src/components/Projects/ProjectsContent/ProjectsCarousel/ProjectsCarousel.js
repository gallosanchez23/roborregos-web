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

  generatecard(project) {
    return (
      <div className="projects-card">
        <Col lg={7} className="card-info">
          <h2 className="title-text-card">
            {project.title}
          </h2>
          <div className="main-text-projects">
            <p>
              {project.description}
            </p>
          </div>
          <button type="button" className="card-button" onClick={() => this.joinUsCallback(project.wiki)} variant="outline-primary">
            {(project.wiki !== '') ? 'Learn more' : 'Coming soon'}
          </button>
        </Col>
        <Col lg={5}>
          <img src={project.image} className="card-image" alt="logo" />
        </Col>
      </div>
    )
  }

  /**
   * Renders Responsive view of Projects's body page.
   * @return {renderized_component} Heder, grid, join us section and footer.
   */
  render() {
    return (
      <div>
        {
            this.project_carousels.map((projects) => (
              <Carousel
                className=""
                navButtonsAlwaysVisible
                timeout={200}
                animation="slide"
              >
                {/* {projects.map((project) => this.generatecard(project))} */}
                {projects.map((project, index) => <ProjectsCard project={project} index={index} />)}
              </Carousel>
            ))
        }
      </div>
    )
  }
}

export default ProjectsContent
