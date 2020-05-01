import React, { Component } from 'react';
import ContactJoinUs from './ContactJoinUs/ContactJoinUs.js';
import ContactSponsorUs from './ContactSponsorUs/ContactSponsorUs.js';
import positionsData from 'data/positions.json';
import packagesData from 'data/sponsors.json';
import Footer from '../Footer/Footer';
import './Contact.css';

class Contact extends Component {
  constructor(props){
		super(props);
	}
  render() {
    document.title = 'RoBorregos | Contact';

    return (
      <div className='contact-container'>
        <ContactSponsorUs packagesData={packagesData} />
        <ContactJoinUs positionsData={positionsData}/>
        <Footer />
      </div>
    );
  }
}

export default Contact;
