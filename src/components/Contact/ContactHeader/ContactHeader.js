import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import './ContactHeader.css';

class ContactHeader extends Component {
  scrollToInfo(){
    window.scrollBy(0, 400-window.scrollY);
  }
  render() {
    return (
      <div className='contact-header-container'>
        <Col xs='10'>
          <Col className='contact-header-text'>
            <Row className='contact-header-title'>
              Contact
            </Row>
            <Row className='contact-header-subtitle'>
              Would you like to support RoBorregos?
            </Row>
            <Row className='contact-header-subtitle'>
              Join our sponsors team!
            </Row>
          </Col>
          <Col xs='12' className='contact-header-footer'>
            <Row className='justify-content-center'>
              Learn More
            </Row>
            <Row className='justify-content-center'>
              <FontAwesomeIcon onClick={this.scrollToInfo} icon={faAngleDown} className='mr-2' />
            </Row>
          </Col>
        </Col>
      </div>
    );
  }
}

export default ContactHeader;
