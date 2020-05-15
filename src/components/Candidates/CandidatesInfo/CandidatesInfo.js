import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './CandidatesInfo.css';

class CandidatesInfo extends Component {
  render() {
    return (
      <div className='candidates-info-container'>
        <Row className='info-container justify-content-center'>
          <Col xs='10'>
            <h2 ref={ this.carouselRef }>
              What is candidates?
            </h2>
            <p>
              Candidates is a program we host during the August-December semester. Where we offer free basic courses for everyone to learn about mechanics, electronics, and software with arduino. Wanting to inspire young college students to get hands-on developing technology. Near the end of the semester, we held a competition to encourage teamwork and new team members are recruited.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CandidatesInfo;
