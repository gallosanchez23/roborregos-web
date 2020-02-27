import React, { Component } from 'react';
import CandidatesInfo from './CandidatesInfo/CandidatesInfo.js';

class Contact extends Component {
	render() {
		return (
			<div className='contact-container'>
				<h1>
					Contact
					<CandidatesInfo />
				</h1>
			</div>
		);
	}
}

export default Contact;
