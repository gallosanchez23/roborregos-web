import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import HeaderImg from 'images/header.png';

var ReactRotatingText = require('react-rotating-text');

class HomeHeader extends Component {
	render() {
		return (
			<header className='home-header'>
				<Row className='justify-content-sm-center'>
					<Col sm='5' className='header-img-col'>
						<span>
							<img className='header-img' src={ HeaderImg } alt='logo' />
							<br/>
							<br/>
							<h1>
								<ReactRotatingText
									items={['We create', 'We build', 'We design', 'We code', 'We connect', 'We compete', 'We learn', 'We teach', 'We drink...']}
									pause={ 2500 }
									typingInterval={ 70 }
								/>
							</h1>
						</span>
					</Col>
				</Row>
			</header>
		);
	}
}

export default HomeHeader;