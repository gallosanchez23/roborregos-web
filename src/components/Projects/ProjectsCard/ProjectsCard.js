// @flow
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Container } from 'react-bootstrap'
import logo from '../../../images/info_background_3.jpg'
import './ProjectsCard.css'

type Props = {};

/** Component class of Projects' card. */
class ProjectsCard extends Component<Props> {
  joinUsCallback() {
    window.open('https://www.facebook.com/RoBorregos/')
  }

  /**
 * Renders Responsive view of Projects's card.
 * @return {renderized_component} Heder banner with legend.
 */
  render() {
    return (
      <div className="projects-card">
        <Row>
          <Col lg="5">
            <img src={logo} className="card-image" alt="logo" />
          </Col>
          <Col lg="7" className="card-info">
            <h2 className="title-text-card">
              @Home
            </h2>
            <div className="main-text-projects">
              <p>
                We are designing, developing, and manufacturing a home assistance robot that can carry out activities for the safety and comfort of the user, such as transporting things from different places in the home to seeing who is at the door of the house and welcoming them! It’s based on the “Robocup @Home” competition.
              </p>
            </div>
            <button className="card-button" onClick={this.joinUsCallback} variant="outline-primary">
              Learn more
            </button>
          </Col>
        </Row>
        {/* <div className="container-legend">
          <h2 className="title-text-card">
            Projects
          </h2>
          <div className="main-text-projects">
            <p>
              Every year we challenge ourselves to keep learning and improving.
              {' '}
              <br />
              See what we&apos;ve been up to!
            </p>
          </div>
        </div> */}
      </div>
    )
  }
}

export default ProjectsCard
