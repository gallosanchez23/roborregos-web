import './ContactSponsorUs.css';

import React, { Component } from 'react';

import ContactSponsorPackages from './ContactSponsorPackages/ContactSponsorPackages.js';

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
          <button onClick={ this.sponsorUsCallback } className='btn contact-sponsor-us-btn mt-4' variant='outline-primary'>
            Sponsor Us!
          </button>
          <button className='btn contact-translate-sponsor-us-btn mt-4 offset-lg-1' variant='outline-primary'>
            Translate to english
          </button>
      </div>
    );
  }
}

export default ContactSponsorUs;
