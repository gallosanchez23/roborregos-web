import './ContactSponsorPackages.css';

import { Col, Row } from 'react-bootstrap';
import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import logo from 'images/white_logo.png';

class ContactSponsorPackages extends Component {
  constructor(props) {
    super(props);

    this.packages = props.packagesData.packages;
  }

  render() {
    return(
      <Row className='justify-content-center'>
        <Col xs='10' sm='10' md='10' lg='10' xl='10'>
          <Row className='justify-content-center mt-4'>
            { this.packages.map(pkg => (
              <Col xs='10' sm='6' md='6' lg='3' xl='3' className='mt-4'>
                <Card
                  className='packages-card'
                  key={ pkg.id }
                >
                  <Card.Body>
                    <h4>
                      { pkg.name }
                    </h4>
                    <hr />
                    { pkg.benefits.es.map(benefit => (
                      <div className='benefit-container'>
                        <div className='benefit-icon'>
                          <FontAwesomeIcon icon={ faCheckCircle } className='mr-2' />
                        </div>
                        <div className='benefit-text'>
                          { benefit }
                        </div>
                      </div>
                    )) }
                    <Row className='justify-content-center mt-4 package-card-footer'>
                      <Col xs='4' sm='4' md='4' lg='4' xl='4' className='no-padding'><hr /></Col>
                      <Col xs='3' sm='3' md='3' lg='3' className='no-padding'>
                        <img src={ logo } alt='Logo' />
                      </Col>
                      <Col xs='4' sm='4' md='4' lg='4' xl='4' className='no-padding'><hr /></Col>
                    </Row>
                  </Card.Body>

                </Card>
              </Col>
            )) }
          </Row>
        </Col>
      </Row>
    );
  }
}

export default ContactSponsorPackages;
