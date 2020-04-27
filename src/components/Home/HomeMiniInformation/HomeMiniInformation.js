import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import './HomeMiniInformation.css';

class HomeMiniInformation extends Component {
  render() {
    return (
        <div class='home-mini-information'>
            <Container>
                <Row class='justify-content-md-center'>
                    <Col xs='12' md='3'>
                        <div class='icon-container'>
                            <div class='circle'>
                                <FontAwesomeIcon icon={faUsers} size='5x' />
                            </div>
                        </div>
                        <p>40 members</p>
                    </Col>
                    <Col xs='12' md='1'></Col>
                    <Col xs='12' md='4'>
                        <div class='icon-container'>
                            <div class='circle'>
                                <FontAwesomeIcon icon={faHistory} size='5x' />
                            </div>
                        </div>
                        <p>Since 2015</p>
                    </Col>
                    <Col xs='12' md='1'></Col>
                    <Col xs='12' md='3'>
                        <div class='icon-container'>
                            <div class='circle'>
                                <FontAwesomeIcon icon={faGlobeAmericas} size='5x' />
                            </div>
                        </div>
                        <p>Internationally known</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}

export default HomeMiniInformation;
