import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Footer extends Component {
	render() {
		return(
			<div className='footer-container'>
				<Container>
					<Row className='justify-content-md-center'>
						<Col xs='10' md='6'>
							<h5>
								Columna 1
							</h5>
							<p>
								Contenido de columna 1
							</p>
						</Col>
						<Col xs='10' md='6'>
							<h5>
								Columna 2
							</h5>
							<p>
								Contenido de columna 2
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Footer;