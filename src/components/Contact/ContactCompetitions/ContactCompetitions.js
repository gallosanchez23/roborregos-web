import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import placeholder from '../../../images/placeholder-rectangle.png'
import './ContactCompetitions.css'

class ContactCompetitions extends Component {
  constructor(props) {
    super(props)

    this.competitions = props.competitionsData.competitions
  }

  tryRequire(img_path) {
    try {
      return require(`images/${img_path}`)
    } catch (err) {
      return placeholder
    }
  }

  render() {
    return (
      <Row className="contact-competitions-container">
        <Col xs="10">
          <Row className="contact-competitions-title">
            Our sponsors team is part of our development in the following competitions:
          </Row>
          <Row>
            { this.competitions.map((competition) => (
              <Col lg="2" md="4" sm="4" xs="6">
                <Row className="justify-content-center">
                  <div className="competitions-img">
                    <img src={this.tryRequire(competition.img)} alt={competition.name} />
                  </div>
                </Row>
                <Row className="competitions-text">
                  { competition.name }
                </Row>
              </Col>
            )) }
          </Row>
        </Col>
      </Row>
    )
  }
}

export default ContactCompetitions
