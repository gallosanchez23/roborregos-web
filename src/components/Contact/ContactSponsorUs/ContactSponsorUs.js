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
    this.translate = this.translate.bind(this);

    this.state = {
      /** @type { string } */
      language: 'en',
      /** @type { string } */
      translateLabel: 'Traducir a español',
      /** @type { string } */
      sponsorButtonLabel: 'Sponsor us!',
      /** @type { string } */
      title: ['Would you like to support RoBorregos?', 'Join our sponsors team!']
    };
  }

  sponsorUsCallback() {
    window.open(this.sponsorsData.url_contact, '_blank');
  }

  translate() {
    if(this.state.language === 'en') {
      this.setState({ 
        language: 'es', 
        translateLabel: 
        'Translate to english', 
        sponsorButtonLabel: 'Patrocinanos!', 
        title: ['Te gustaría apoyar a RoBorregos?', 'Sé uno de nuestros patrocinadores!']
      });
    } else {
      this.setState({ language: 'en', 
      translateLabel: 'Traducir a español', 
      sponsorButtonLabel: 'Sponsor Us!',
      title: ['Would you like to support RoBorregos?', 'Join our sponsors team!']
     });
    }
  }

  render() {
    return(
      <div id='contact-sponsor-us' className='contact-sponsor-us'>
        <h2>
        { this.state.title[0] }
        <br/>
        { this.state.title[1] }
        </h2>
        <ContactSponsorPackages packagesData={ this.sponsorsData } language={ this.state.language } />
        <Row>
          <Col md={ 4 } xs={ 12 } className='offset-md-4 offset-0'>
            <button onClick={ this.sponsorUsCallback } className='btn contact-sponsor-us-btn mt-4' variant='outline-primary'>
              { this.state.sponsorButtonLabel }
            </button>
          </Col>
          <Col md={ 3 } xs={ 12 } style={{ alignSelf: "center" }}>
            <button onClick={ this.translate } className='btn contact-translate-sponsor-us-btn mt-4' variant='outline-primary'>
              { this.state.translateLabel }
            </button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ContactSponsorUs;
