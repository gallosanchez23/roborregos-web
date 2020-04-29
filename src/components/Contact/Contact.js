import React, { Component } from 'react';
import Footer from 'components/Footer/Footer.js';
import './Contact.css';

class Contact extends Component {
  render() {
    document.title = 'RoBorregos | Contact';

    return (
      <div className='contact-container'>
        <h1>
          Contact
        </h1>
        <Footer />
      </div>
    );
  }
}

export default Contact;
