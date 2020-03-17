import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import logo from 'images/white_logo.png';

function sitemapLink(link, legend) {
	return (
		<span>
			<a href={ link } className='sitemap-link'>
				{ legend }
			</a>
			<br/>
		</span>
	);
}

function sitemapIconButton(link, icon) {
	return (
		<IconButton
		component='a'
		href={ link }
		color='inherit'
		className='sitemap-link'
		>
			{ icon }
		</IconButton>
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
								{ sitemapLink('/', 'Home') }
								{ sitemapLink('/about', 'About') }
								{ sitemapLink('/members', 'Members') }
								{ sitemapLink('/contact', 'Contact') }
							</p>
						</Col>
						<Col xs='10' md='3'>
							<h4 className='footer-title'>
								Social media
							</h4>
							<p>
								{ sitemapIconButton('https://github.com/RoBorregos/', <GitHubIcon fontSize='small' />) }
								{ sitemapIconButton('https://www.facebook.com/RoBorregos/', <FacebookIcon fontSize='small' />) }
								{ sitemapIconButton('https://www.instagram.com/roborregos/', <InstagramIcon fontSize='small' />) }
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Footer;
