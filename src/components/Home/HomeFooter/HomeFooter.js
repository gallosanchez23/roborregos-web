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
									Instituto Tecnológico de Monterrey’s representative robotics team located in Monterrey, Nuevo León, México.
									<p></p>
									This page was updated on February 2020
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
								{ sitemap_link('https://github.com/RoBorregos', 'Github') }
								{ sitemap_link('https://www.facebook.com/RoBorregos/', 'Facebook') }
								{ sitemap_link('https://www.instagram.com/roborregos/', 'Instagram') }
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default HomeFooter;