import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import HomeSingleSponsor from './HomeSingleSponsor/HomeSingleSponsor.js';

class HomeSponsors extends Component {
	constructor(props) {
		super(props);

		this.sponsors = props.sponsors;
	}

	render() {
		return (
			<div className='home-sponsors-container'>
				<div className='container-helper'>
					<Row className='justify-content-sm-center'>
						<Col sm='10'>
							<h3>
								Patrocinadores
							</h3>
							<Row>
								{this.sponsors.map((sponsor, index) =>(
									<Col sm='4' md='3' key={ index } className='sponsor-col' >
										<HomeSingleSponsor
											sponsor={ sponsor }
										/>
									</Col>
								))}
							</Row>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default HomeSponsors;