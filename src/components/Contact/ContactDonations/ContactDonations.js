import React, { Component } from 'react';
import './ContactDonations.css';
import { Row, Col } from 'react-bootstrap';

class ContactDonations extends Component {
  render() {
    return (
      <div className='contact-donations-container'>
        <Col xs='10'>
          <Row className='donations-title'>
            By providing us an anonymous donation, you can give us the necessary resources for us to develop technology and compete!
          </Row>
          <Row>
            <Col lg='6' md='6' sm='6' xs='12' className='donations-step-container'>
              <Row className='justify-content-center'>
                <div className='donations-step'>1</div>
              </Row>
              <Row className='donations-text'>
                Monetary Donation
              </Row>
            </Col>
            <Col lg='6' md='6' sm='6' xs='12' className='donations-step-container'>
              <Row className='justify-content-center'>
                <div className='donations-step'>2</div>
              </Row>
              <Row className='donations-text'>
                In-Kind Donation
              </Row>
            </Col>
          </Row>
          <Row className='donations-title'>
            For more information <b>&nbsp;Contact us!</b>
          </Row>
        </Col>
      </div>
    );
  }
}

export default ContactDonations;
