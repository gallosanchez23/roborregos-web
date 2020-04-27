import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import logo from 'images/white_logo.png';
import { MEDIUM_WIDTH, PHONE_SIZE } from 'constants.js';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import './Footer.css';

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
			icon_size: (window.innerWidth > MEDIUM_WIDTH)?30:(window.innerWidth > PHONE_SIZE)?20:10,
		}
	}

	componentDidMount() {
		window.addEventListener('resize', this.setIconSize);
	}

	setIconSize(){
		this.setState({
			icon_size : (window.innerWidth >= MEDIUM_WIDTH)?30:(window.innerWidth >= PHONE_SIZE)?20:10,
		});
	}

	render() {
		return(
			<div className='footer-container'>
				<Row className='footer-row'>
					<Col lg='4' className='col-logo'>
						<img src={logo} className='footer-logo' alt='logo' />
					</Col>
					<Col lg='4' className='footer-col'>
						<div className='sitemap-link'>
							{ sitemapLink('/', 'Home') }
						</div>
						<div className='sitemap-link'>
							{ sitemapLink('/about', 'About') }
						</div>
						<div className='sitemap-link'>
							{ sitemapLink('/members', 'Members') }
						</div>
						<div className='sitemap-link'>
							{ sitemapLink('/contact', 'Contact') }
						</div>
					</Col>
					<Col lg='4'>
						<Row className='goback-button'>
							<IconButton
							component='a'
							href={ '/' }
							color='inherit'
							className='sitemap-link'
							>
								<ExpandLessIcon/>
								<div className='goback-text'>Back to top</div>
							</IconButton>
						</Row>
						<Row className='row-socialMedia'>
							<p>
								{ sitemapIconButton('https://github.com/RoBorregos/', <GitHubIcon style={{ fontSize: this.state.icon_size }} />) }
								{ sitemapIconButton('https://www.facebook.com/RoBorregos/', <FacebookIcon style={{ fontSize: this.state.icon_size }} />) }
								{ sitemapIconButton('https://www.instagram.com/roborregos/', <InstagramIcon style={{ fontSize: this.state.icon_size }} />) }
								@2020 RoBorregos
							</p>
						</Row>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Footer;