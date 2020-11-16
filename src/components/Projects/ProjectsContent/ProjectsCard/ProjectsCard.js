// @flow
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Container } from 'react-bootstrap'
import logo from '../../../../images/info_background_3.jpg'
import './ProjectsCard.css'

type Props = {};

/** Component class of Projects' card. */
class ProjectsCard extends Component<Props> {
  /**
   * Class constructor
   * @param {list} props: List of projects data.
   */
  constructor(props: Props) {
    super(props)
    this.cardContent = this.cardContent.bind(this)
    this.imageContent = this.imageContent.bind(this)
    // this.joinUsCallback = this.joinUsCallback(this)

    this.project = props.project
    this.index = props.index
  }

  joinUsCallback = (link) => {
    window.open(link)
  }

  cardContent(size, project) {
    return (
      <Col lg={size} className="card-info">
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
    )
  }

  imageContent(size, image_path) {
    return (
      <Col lg={size}>
        <img src={image_path} className="card-image" alt="logo" />
      </Col>
    )
  }

  /**
 * Renders Responsive view of Projects's card.
 * @return {renderized_component} Heder banner with legend.
 */
  render() {
    if (this.index % 2) {
      return (
        <Row className="projects-card">
          {this.cardContent(7, this.project)}
          {this.imageContent(5, this.project.image)}
        </Row>
      )
    }
    return (
      <Row className="projects-card">
        {this.imageContent(5, this.project.image)}
        {this.cardContent(7, this.project)}
      </Row>
    )
  }
}

export default ProjectsCard
