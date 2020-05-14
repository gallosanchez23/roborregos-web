import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMicrochip, faCog, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import './CandidatesOpenPositions.css';

class CandidatesOpenPostions extends Component {
  constructor(props) {
    super(props);

    this.positions = props.positionsData.positions;

    this.state = {
      position: this.positions[0]
    }
  }

  tryRequire(id) {
    id = parseInt(id);
    switch(id){
      case 1:
        return faCode;
      case 2:
        return faMicrochip;
      case 3:
        return faCog;
      default:
        return faBullhorn;
    }
  }

  render() {
    return(
      <Row className='justify-content-center mt-4'>
        <Col xs='10' sm='10' md='10' lg='10' xl='10'>
          { this.positions.map(position => (
            <Card
              className='candidates-open-positions-card'
              key={ position.id }
            >
              <Card.Body>
                <Row>
                  <Col xs='3' sm='3' md='3' lg='3' xl='3' className='candidates-card-column-image-container'>
                    <div className='candidates-card-image-container'>
                      <FontAwesomeIcon icon={ this.tryRequire(position.id) }/>
                    </div>
                  </Col>
                  <Col className='candidates-card-column-text-container-overlay' xs='9' sm='9' md='9' lg='9' xl='9'>
                    <Card.Title className='candidates-card-title'>
                      { position.title }
                    </Card.Title>
                    <Card.Text className='candidates-card-text'>
                      { position.longDescription }
                    </Card.Text>
                  </Col>
                  <Col className='candidates-card-column-text-container-overlay-original' xs='9' sm='9' md='9' lg='9' xl='9'>
                    <Card.Title className='candidates-card-title'>
                      { position.title }
                    </Card.Title>
                    <Card.Text className='candidates-card-text'>
                      { position.shortDescription }
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          )) }
        </Col>
      </Row>
    );
  }
}

export default CandidatesOpenPostions;
