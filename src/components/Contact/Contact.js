import React, { Component } from 'react';
import ContactJoinUs from './ContactJoinUs/ContactJoinUs.js';
import ContactSponsorUs from './ContactSponsorUs/ContactSponsorUs.js';
import positionsData from 'data/positions.json';
import Footer from 'components/Footer/Footer';
import './Contact.css';

class Contact extends Component {
  render() {
    document.title = 'RoBorregos | Contact';

    return (
      <div className='contact-container'>
        <ContactSponsorUs />
        <ContactJoinUs positionsData={ positionsData }/>
        <Footer />
      </div>
    );
  }
}

export default Contact;
