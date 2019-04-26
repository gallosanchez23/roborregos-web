import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from 'images/white_logo.png';

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

class HomeFooter extends Component {
	render() {
		return(
			<div className='home-footer-container'>
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
									Equipo representativo...
									Nisi voluptate amet eiusmod incididunt mollit commodo incididunt qui proident laboris laborum do ullamco elit dolor.
								</small>
							</p>
						</Col>
						<Col xs='10' md='3'>
							<h4 className='footer-title'>
								Sitio
							</h4>
							<p>
								{ sitemap_link('/home', 'Home') }
								{ sitemap_link('/about_us', 'About us') }
								{ sitemap_link('/members', 'Members') }
								{ sitemap_link('/contact_us', 'Contact us') }
							</p>
						</Col>
						<Col xs='10' md='3'>
							<h4 className='footer-title'>
								Redes Sociales
							</h4>
							<p>
								{ sitemap_link('https://github.com/', 'Github') }
								{ sitemap_link('https://www.facebook.com/', 'Facebook') }
								{ sitemap_link('https://www.instagram.com/', 'Instagram') }
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default HomeFooter;