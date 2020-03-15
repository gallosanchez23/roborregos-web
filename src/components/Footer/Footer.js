import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from 'images/white_logo.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

function sitemap_link(link, legend) {
	return (
		<span>
			<a href={ link } className='sitemap-link'>
				{ legend }
			</a>
			<br/>
		</span>
	);
}

class Footer extends Component {
	render() {
		return(
			<div className='footer-container'>
				<Container>
					<Row className='justify-content-md-center'>
						<Col xs='10' md='2'>
							<img src={logo} className='footer-logo' alt='logo' />
						</Col>
						<Col xs='10' md='4'>
							<h4 className='footer-title'>
								RoBorregos
							</h4>
							<p>
								<small>
									RoBorregos 2020 © All rights reserved | ITESM | Monterrey, Nuevo León, México
								</small>
							</p>
						</Col>
						<Col xs='10' md='3'>
							<h4 className='footer-title'>
								Site
							</h4>
							<p>
								{ sitemap_link('/', 'Home') }
								{ sitemap_link('/about', 'About') }
								{ sitemap_link('/members', 'Members') }
								{ sitemap_link('/contact', 'Contact') }
							</p>
						</Col>
						<Col xs='10' md='3'>
							<h4 className='footer-title'>
								Social media
							</h4>
							<p>
							<div className='social-media'>
									<GitHubIcon></GitHubIcon>
									<div className='social-media-link'>
										{ sitemap_link('https://github.com/RoBorregos', 'GitHub') }
									</div>
								</div>
								<div className='social-media'>
									<FacebookIcon></FacebookIcon>
									<div className='social-media-link'>
										{ sitemap_link('https://www.facebook.com/RoBorregos/', 'Facebook') }
									</div>
								</div>
								<div className='social-media'>
									<InstagramIcon></InstagramIcon>
									<div className='social-media-link'>
										{ sitemap_link('https://www.instagram.com/roborregos/', 'Instagram') }
									</div> 
								</div>

								{/* <div className='social-media'>
									<GitHubIcon></GitHubIcon>
									<div className='social-media-link'>
										{ sitemap_link('https://github.com/RoBorregos', '/RoBorregos') }
									</div>
								</div>
								<div className='social-media'>
									<FacebookIcon></FacebookIcon>
									<div className='social-media-link'>
										{ sitemap_link('https://www.facebook.com/RoBorregos/', '@RoBorregos') }
									</div>
								</div>
								<div className='social-media'>
									<InstagramIcon></InstagramIcon>
									<div className='social-media-link'>
										{ sitemap_link('https://www.instagram.com/roborregos/', '@roborregos') }
									</div> 
								</div> */}
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Footer;