import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import CandidatesOpenPositions from './CandidatesOpenPositions/CandidatesOpenPositions.js';
import './CandidatesJoinUs.css';

class CandidatesJoinUs extends Component {
  constructor(props) {
    super(props);

    this.positionsData = props.positionsData;

    this.joinUsCallback = this.joinUsCallback.bind(this);
  }

  joinUsCallback() {
    window.open(this.positionsData.url_facebook, '_blank');
  }

  render() {
    return(
      <div className='candidates-join-us'>
        <Row>
          <Col className='candidates-join-us-title-container'>
            <h2>
              Get to know our main positions!
            </h2>
          </Col>
        </Row>
        <CandidatesOpenPositions positionsData={ this.positionsData } />
        <Row>
          <Col className='candidates-join-us-btn-container'>
            <button onClick={ this.joinUsCallback } className='candidates-join-us-btn' variant='outline-primary'>
              Talk with us!
            </button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CandidatesJoinUs;
