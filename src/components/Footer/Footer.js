import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import logo from 'images/white_logo.png';
import { MEDIUM_WIDTH, PHONE_SIZE } from 'constants.js';

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

	constructor(props) {
		super(props);

		this.setIconSize = this.setIconSize.bind(this);

		this.members = props.members;

		this.state = {
			icon_size: (window.innerWidth > MEDIUM_WIDTH)?40:(window.innerWidth > PHONE_SIZE)?32:20,
		}
	}

	componentDidMount() {
		window.addEventListener('resize', this.setIconSize);
	}

	setIconSize(){
		this.setState({
			icon_size : (window.innerWidth >= MEDIUM_WIDTH)?40:(window.innerWidth >= PHONE_SIZE)?32:20,
		});
	}

	render() {
		return(
			<div className='footer-container'>
				<Container>
					<Row className='footer-row'>
						<Col className='col-logo'>
							<img src={logo} className='footer-logo' alt='logo' />
						</Col>
						<Col className='footer-col'>
							<h4 className='footer-title'>
								RoBorregos
							</h4>
							<p>
								<small>
									RoBorregos 2020 © All rights reserved | ITESM | Monterrey, Nuevo León, México
								</small>
							</p>
						</Col>
						<Col className='footer-col'>
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
						<Col className='col-socialMedia'>
							<p>
								{ sitemapIconButton('https://github.com/RoBorregos/', <GitHubIcon style={{ fontSize: this.state.icon_size }} />) }
								{ sitemapIconButton('https://www.facebook.com/RoBorregos/', <FacebookIcon style={{ fontSize: this.state.icon_size }} />) }
								{ sitemapIconButton('https://www.instagram.com/roborregos/', <InstagramIcon style={{ fontSize: this.state.icon_size }} />) }
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Footer;
