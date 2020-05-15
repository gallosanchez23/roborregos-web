import React, { Component } from 'react';
import ContactHeader from './ContactHeader/ContactHeader.js';
import ContactSponsorUs from './ContactSponsorUs/ContactSponsorUs.js';
import ContactDonations from './ContactDonations/ContactDonations.js';
import ContactCompetitions from './ContactCompetitions/ContactCompetitions.js';
import competitionsData from 'data/competitions.json';
import sponsorsData from 'data/sponsors.json';
import Footer from 'components/Footer/Footer';
import './Contact.css';

class Contact extends Component {
  render() {
    document.title = 'RoBorregos | Contact';

    return (
      <div className='contact-container'>
        <ContactHeader />
        <ContactSponsorUs sponsorsData={ sponsorsData } />
        <ContactDonations />
        <ContactCompetitions competitionsData={ competitionsData } />
        <Footer />
      </div>
    );
  }
}

export default Contact;
