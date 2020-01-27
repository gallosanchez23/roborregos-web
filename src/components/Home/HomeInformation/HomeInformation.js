import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class HomeHeader extends Component {
	render() {
		return (
			<div className='home-information-container'>
				<Row className='information-section background-1'>
					<Col xs='10' md='6' className='information-col'>
						<span>
							<h3>
							Robotics Team in Competition
							</h3>
							<br/>
							<p>
							We  participate in different national and international competitions for autonomous robots such as Mexico's TMR (Torneo Mexicano de Robótica), RoboCup, and IEEE LARC (Latin American Robotics Competition). As a team, want to demonstrate the potential of Mexico in the development and innovation of technology.
							</p>
						</span>
					</Col>
				</Row>
				<Row className='information-section background-2'>
					<Col xs='10' md={{span: 6, offset: 6}} className='information-col'>
						<span>
							<h3>
							Social Projects
							</h3>
							<br/>
							<p>
							We like to share everything we’ve learned with the community, giving free classes, workshops and participating in webinars where we can talk and teach about all the technologies we’ve used and all the experiences we’ve had to try inspiring people to collaborate and develop technology.
							</p>
						</span>
					</Col>
				</Row>
				<Row className='information-section background-3'>
					<Col xs='10' md='6' className='information-col'>
						<span>
							<h3>
							Events and outreach
							</h3>
							<br/>
							<p>
							We participate in congresses and events such as INCMty, Conexión Tec, The International Congress of Mechatronics - Automatization and Technology, Semana i and many more.
							</p>
						</span>
					</Col>
				</Row>
				<Row className='information-section background-2'>
					<Col xs='10' md={{span: 6, offset: 6}} className='information-col'>
						<span>
							<h3>
							Student community
							</h3>
							<br/>
							<p>
							To reach our community we give free workshops about useful technologies such as ROS, Git and Machine Learning, as well as our annually biggest event: Candidates, where the team gives weekly classes of basic programming, mechanics and electronics for anyone in the university interested, and create a robotics tournament to get new members.
							</p>
						</span>
					</Col>
				</Row>
			</div>
		);
	}
}

export default HomeHeader;