import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class HomeHeader extends Component {
	constructor(props) {
		super(props);

		this.getLargeView = this.getLargeView.bind(this);
		this.getSmallView = this.getSmallView.bind(this);
		this.updateWindowViewState = this.updateWindowViewState.bind(this);

		this.state = {
			largeView: (window.innerWidth > 900)?true:false,
		}
	}

	componentDidMount() {
		window.addEventListener("resize", this.updateWindowViewState);
	}

	updateWindowViewState() {
		this.setState({
			largeView: (window.innerWidth > 900)?true:false,
		});
	}

	getLargeView(){
		return(
		<div className='home-information-container'>
				<Row>
					<Col xs='12' md='6' className='information-section information-col'>
						<span>
							<h3 className='information-title'>
								High-Performance Team
							</h3>
							<p className='information-paragraph'>
								We  participate in different national and international competitions for autonomous robots such as Mexico's TMR (Torneo Mexicano de Robótica), RoboCup, and IEEE LARC (Latin American Robotics Competition). As a team, we are really passionate about new technology and want to demonstrate the potential of Mexico in the development and innovation of technology.
							</p>
						</span>
					</Col>
					<Col xs='12' md='6' className='image-section background-1'></Col>
				</Row>
				<Row>
					<Col xs='12' md='6' className='image-section image-section2 background-2'></Col>
					<Col xs='12' md='6' className='information-section information-col'>
						<span>
							<h3 className='information-title'>
								Social Projects
							</h3>
							<p className='information-paragraph'>
								We like to share everything we’ve learned with the community, giving free classes, workshops and participating in webinars where we can talk and teach about all the technologies we’ve used and all the experiences we’ve had to try inspiring people to collaborate and develop technology.
							</p>
						</span>
					</Col>
				</Row>
				<Row>
					<Col xs='12' md='6' className='information-section information-col'>
						<span>
							<h3 className='information-title'>
								Events and outreach
							</h3>
							<p className='information-paragraph'>
								We participate in congresses and events such as INCMty, Conexión Tec, The International Congress of Mechatronics - Automatization and Technology, Semana i and many more.
							</p>
						</span>
					</Col>
					<Col xs='12' md='6' className='image-section background-3'></Col>
				</Row>
				<Row>
					<Col xs='12' md='6' className='image-section image-section2 background-4'></Col>
					<Col xs='12' md='6' className='information-section information-col'>
						<span>
							<h3 className='information-title'>
								Student community
							</h3>
							<p className='information-paragraph'>
								To reach our community, we give free workshops about useful technologies such as: ROS, Git and Machine Learning, as well as our annual biggest event: Candidates, where the team gives weekly classes of basic programming, mechanics and electronics for anyone in the university interested, and organize a robotics tournament to get new members.
							</p>
						</span>
					</Col>
				</Row>
			</div>
		);
	}

	getSmallView(){
		return(
			<div className='home-information-container'>
					<Row>
						<Col xs='12' md='6' className='information-section information-col'>
							<span>
								<h3 className='information-title'>
									High-Performance Team
								</h3>
								<p className='information-paragraph'>
									We  participate in different national and international competitions for autonomous robots such as Mexico's TMR (Torneo Mexicano de Robótica), RoboCup, and IEEE LARC (Latin American Robotics Competition). As a team, we are really passionate about new technology and want to demonstrate the potential of Mexico in the development and innovation of technology.
								</p>
							</span>
						</Col>
						<Col xs='12' md='6' className='image-section background-1'></Col>
					</Row>
					<Row>
						<Col xs='12' md='6' className='information-section information-col'>
							<span>
								<h3 className='information-title'>
									Social Projects
								</h3>
								<p className='information-paragraph'>
									We like to share everything we’ve learned with the community, giving free classes, workshops and participating in webinars where we can talk and teach about all the technologies we’ve used and all the experiences we’ve had to try inspiring people to collaborate and develop technology.
								</p>
							</span>
						</Col>
						<Col xs='12' md='6' className='image-section image-section2 background-2'></Col>
					</Row>
					<Row>
						<Col xs='12' md='6' className='information-section information-col'>
							<span>
								<h3 className='information-title'>
									Events and outreach
								</h3>
								<p className='information-paragraph'>
									We participate in congresses and events such as INCMty, Conexión Tec, The International Congress of Mechatronics - Automatization and Technology, Semana i and many more.
								</p>
							</span>
						</Col>
						<Col xs='12' md='6' className='image-section background-3'></Col>
					</Row>
					<Row>
						<Col xs='12' md='6' className='information-section information-col'>
							<span>
								<h3 className='information-title'>
									Student community
								</h3>
								<p className='information-paragraph'>
									To reach our community, we give free workshops about useful technologies such as: ROS, Git and Machine Learning, as well as our annual biggest event: Candidates, where the team gives weekly classes of basic programming, mechanics and electronics for anyone in the university interested, and organize a robotics tournament to get new members.
								</p>
							</span>
						</Col>
						<Col xs='12' md='6' className='image-section image-section2 background-4'></Col>
					</Row>
				</div>
			);
	}

	render() {
		return ((this.state.largeView)?this.getLargeView():this.getSmallView());
	}
}

export default HomeHeader;