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
		className='icon-link'
		>
			{ icon }
		</IconButton>
	);
}

class Footer extends Component {

	constructor(props) {
		super(props);

		this.setSizeAtributes = this.setSizeAtributes.bind(this);
		this.largeView = this.largeView.bind(this);
		this.smallView = this.smallView.bind(this);

		this.members = props.members;

		this.state = {
			icon_size: (window.innerWidth > MEDIUM_WIDTH)?30:(window.innerWidth > PHONE_SIZE)?20:10,
			view_size_large: (window.innerWidth > MEDIUM_WIDTH)?true:false,
		}
	}

	componentDidMount() {
		window.addEventListener('resize', this.setSizeAtributes);
	}

	setSizeAtributes(){
		this.setState({
			icon_size : (window.innerWidth >= MEDIUM_WIDTH)?30:(window.innerWidth >= PHONE_SIZE)?20:10,
			view_size_large: (window.innerWidth > MEDIUM_WIDTH)?true:false,
		});
	}

	largeView() {
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
						<Row>
							<p className='goback-button'>
								<IconButton
								component='a'
								href={ '/' }
								color='inherit'
								className='sitemap-link'
								>
									<ExpandLessIcon/>
									<div className='goback-text'>Back to top</div>
								</IconButton>
							</p>
							
						</Row>
						<Row>
							<p className='row-socialMedia'>
								{ sitemapIconButton('https://github.com/RoBorregos/', <GitHubIcon style={{ fontSize: this.state.icon_size }} />) }
								{ sitemapIconButton('https://www.facebook.com/RoBorregos/', <FacebookIcon style={{ fontSize: this.state.icon_size }} />) }
								{ sitemapIconButton('https://www.instagram.com/roborregos/', <InstagramIcon style={{ fontSize: this.state.icon_size }} />) }
								<div className='mark-text'>@2020 RoBorregos</div>
							</p>
						</Row>
					</Col>
				</Row>
			</div>
		);
	}

	smallView() {
		return(
			<div className='footer-container'>
				<Row className='footer-row'>
					
				</Row>
			</div>
		);
	}

	render() {
		return (this.state.view_size_large) ? this.largeView():this.smallView();
	}
}

export default Footer;