import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import './ContactHeader.css';

class ContactHeader extends Component {
  scrollToInfo(){
    window.scrollBy(0, 925 - window.scrollY);
  }

  render() {
    return (
      <div className='contact-header-container'>
        <div className='container-legend'>
          <h2 className='title-text-banner'>
            Contact
          </h2>
          <div className='main-text-contact'>
            Would you like to support RoBorregos? Join our sponsors team!
          </div>
        </div>
        <Col xs='12' className='contact-header-footer'>
          <Row className='justify-content-center'>
            Learn More
          </Row>
          <Row className='justify-content-center'>
            <FontAwesomeIcon onClick={ this.scrollToInfo } icon={ faAngleDown } className='mr-2' />
          </Row>
        </Col>
      </div>
    );
  }
}

export default ContactHeader;
