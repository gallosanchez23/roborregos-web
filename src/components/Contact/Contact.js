import React, { Component } from 'react';
import ContactFooter from './ContactFooter/ContactFooter.js'
import ContactHeader from './ContactHeader/ContactHeader.js'

class Contact extends Component {
	render() {
		return (
			<div className='contact-container'>
				< ContactHeader />
				< ContactFooter />
			</div>
		);
	}
}

export default Contact;
