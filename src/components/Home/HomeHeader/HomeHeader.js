import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import HeaderImg from 'images/header.png'

class HomeHeader extends Component {
	render() {
		return (
			<header className='home-header'>
				<Row className='justify-content-sm-center'>
					<Col sm='6'>
						<img className='header-img' src={ HeaderImg } />
					</Col>
				</Row>
			</header>
		);
	}
}

export default HomeHeader;