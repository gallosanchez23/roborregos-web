import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import logo from '../../../../images/white_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './ContactSponsorPackages.css';

class ContactSponsorPackages extends Component {
	constructor(props) {
		super(props);
		this.packages = props.packagesData.packages;
	}

	render() {
		return(
			<div className='contact-sponsor-packages-grid'>
						{this.packages.map(pkg =>(
								<Card
									className='contact-sponsor-packages-card'
									key={ pkg.id }
								>
									<Card.Body>
										<div className='contact-sponsor-packages-card-content'>
											<div className='contact-sponsor-packages-title-container'>
												<span>{pkg.name}</span>
											</div>
											{pkg.benefits.map(benefit =>(
												<div className='contact-sponsor-packages-benefit-container'>
													<div className='contact-sponsor-packages-benefit-icon'>
														<FontAwesomeIcon icon={ faCheckCircle }/>
													</div>
													<div className='contact-sponsor-packages-benefit-text'>
														{benefit}
													</div>
													
												</div>
											))}
											<div className='contact-sponsor-packages-card-footer'>
												<div className='contact-sponsor-packages-card-footer-whiteBar left'><div /></div>
												<img src={logo} alt="Logo" />;
												<div className='contact-sponsor-packages-card-footer-whiteBar right'><div /></div>
											</div>
										</div>
									</Card.Body>
									
								</Card>
						))}
			</div>
		);
	}
}

export default ContactSponsorPackages;