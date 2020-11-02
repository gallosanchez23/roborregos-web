import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import AboutSingleTimelineEvent from './AboutSingleTimelineEvent/AboutSingleTimelineEvent'
import './AboutTimeline.css'

class AboutTimeline extends Component {
  constructor(props) {
    super(props)
    this.events = props.events
  }

  render() {
    return (
      <div className="about-timeline-container">
        <Container fluid>
          <Row className="justify-content-md-center" id="timeline-title">
            <h1>
              Our Story
            </h1>
          </Row>
          <VerticalTimeline>
            { this.events.map((event, index) => (
              <AboutSingleTimelineEvent
                key={index}
                event={event}
              />
            )) }
          </VerticalTimeline>
        </Container>
      </div>
    )
  }
}

export default AboutTimeline
