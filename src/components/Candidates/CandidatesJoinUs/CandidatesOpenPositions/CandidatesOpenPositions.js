import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import OpenPositionCard from './OpenPositionCard/OpenPositionCard'
import './CandidatesOpenPositions.css';

class CandidatesOpenPostions extends Component {
  constructor(props) {
    super(props);

    this.positions = props.positionsData.positions;
  }

  render() {
    return(
      <Row className='justify-content-center mt-4'>
        <Col xs='10' sm='10' md='10' lg='10' xl='10'>
          <Row>
            { this.positions.map(position => (<OpenPositionCard position={ position } />)) }
          </Row>
        </Col>
      </Row>
    );
  }
}

export default CandidatesOpenPostions;
