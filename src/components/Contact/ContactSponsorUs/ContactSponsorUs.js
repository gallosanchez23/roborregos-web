import './ContactSponsorUs.css';

import React, { Component } from 'react';

import Col from 'react-bootstrap/Col'
import ContactSponsorPackages from './ContactSponsorPackages/ContactSponsorPackages.js';
import Row from 'react-bootstrap/Row'

class ContactSponsorUs extends Component {
  constructor(props) {
    super(props);

    this.sponsorsData = props.sponsorsData;

    this.sponsorUsCallback = this.sponsorUsCallback.bind(this);

  }

  sponsorUsCallback() {
    window.open(this.sponsorsData.url_contact, '_blank');
  }

  render() {
    return(
      <div id='contact-sponsor-us' className='contact-sponsor-us'>
        <h2>
          Would you like to support RoBorregos?
          <br />
          Join our sponsors team!
        </h2>
        <ContactSponsorPackages packagesData={ this.sponsorsData } />
        <Row>
          <Col md={4} xs={12} className='offset-md-4 offset-0'>
            <button onClick={ this.sponsorUsCallback } className='btn contact-sponsor-us-btn mt-4' variant='outline-primary'>
              Sponsor Us!
            </button>
          </Col>
          <Col md={3} xs={12} style={{ alignSelf: "center" }}>
            <button className='btn contact-translate-sponsor-us-btn mt-4' variant='outline-primary'>
              Translate to english
            </button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ContactSponsorUs;
