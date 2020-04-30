import React, { Component } from 'react';
import ContactOpenPositions from './ContactOpenPositions/ContactOpenPositions.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import './ContactJoinUs.css';

class ContactJoinUs extends Component {
	constructor(props){
		super(props);
		this.positionsData=props.positionsData;
		this.joinUsCallback = this.joinUsCallback.bind(this);
	}
	joinUsCallback(){
		window.open(this.positionsData.url_facebook,'_blank');
	}
	render() {
		return(
			<div id='contact-joinus' className='contact-joinus'>
				<div className='contact-joinus-title-container'>
					<div className='contact-joinus-title-icon-container'>
						<FontAwesomeIcon icon={faPuzzlePiece}/>
					</div>
					<span>
						Hello there! Are you a candidate?
						<br/>
						Join Us!
					</span>
				</div>
				<ContactOpenPositions positionsData={this.positionsData} />
				<div className='contact-joinus-btn-container'>
					<button onClick={this.joinUsCallback} className="contact-joinus-btn" variant='outline-primary'>
						Join Us!
					</button>
				</div>
			</div>
		);
	}
}

export default ContactJoinUs;