import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './ContactHeader.css';

class ContactHeader extends Component {
  scrollToInfo(){
    window.scrollBy(0, window.innerHeight - 48 - window.scrollY);
  }

  render() {
    return (
      <div className='contact-header'>
        <div className='container-legend'>
          <h2 className='title-text-banner'>
            Contact
          </h2>
          <div className='main-text-contact'>
            <p>
              Would you like to support RoBorregos? Join our sponsors team!
            </p>
          </div>
        </div>
        <div className='contact-header-footer'>
          <p>
            Learn More
          </p>
          <FontAwesomeIcon onClick={ this.scrollToInfo } icon={ faAngleDown } className='icon-btn' />
        </div>
      </div>
    );
  }
}

export default ContactHeader;
