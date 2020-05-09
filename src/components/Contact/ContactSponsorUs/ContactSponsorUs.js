import React, { Component } from 'react';
import ContactSponsorPackages from './ContactSponsorPackages/ContactSponsorPackages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './ContactSponsorUs.css';

class ContactSponsorUs extends Component {
	constructor(props){
		super(props);
		this.sponsorsData=props.sponsorsData;
		this.sponsorUsCallback = this.sponsorUsCallback.bind(this);
	}
	sponsorUsCallback(){
		window.open(this.sponsorsData.url_contact,'_blank');
	}
	render() {
		return(
			<div id='contact-sponsorus' className='contact-sponsorus'>
				<div className='contact-sponsorus-title-container'>
					<div className='contact-sponsorus-title-icon-container'>
						<FontAwesomeIcon icon={faDollarSign}/>
					</div>
					<span>
						Would you like to support RoBorregos?
						<br/>
						Join our sponsors team!
					</span>
				</div>
				<ContactSponsorPackages packagesData={this.sponsorsData}/>
				<div className='contact-sponsorus-btn-container'>
					<button onClick={this.sponsorUsCallback} className="contact-sponsorus-btn" variant='outline-primary'>
						Sponsor Us!
					</button>
				</div>
			</div>
		);
	}
}

export default ContactSponsorUs;
