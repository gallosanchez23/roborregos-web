import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { MEDIUM_WIDTH } from 'constants.js';
import './HomeInformation.css'

class HomeHeader extends Component {
	constructor(props) {
		super(props);

		this.largeView = this.largeView.bind(this);
		this.smallView = this.smallView.bind(this);
		this.updateWindowViewState = this.updateWindowViewState.bind(this);

		this.state = {
			large_view: (window.innerWidth >= MEDIUM_WIDTH) ? true : false,
		}
	}

	componentDidMount() {
		window.addEventListener('resize', this.updateWindowViewState);
	}

	updateWindowViewState() {
		this.setState({
			large_view: (window.innerWidth >= MEDIUM_WIDTH) ? true : false,
		});
	}

	largeView(){
		return(
		  <div className='home-information-container'>
				<Row>
					<Col className='information-section information-col'>
						<span>
							<h3 className='information-title'>
								High-Performance Team
							</h3>
							<p className='information-paragraph'>
								We  participate in different national and international competitions for autonomous robots such as Mexico's TMR (Torneo Mexicano de Robótica), RoboCup, and IEEE LARC (Latin American Robotics Competition). As a team, want to demonstrate the potential of Mexico in the development and innovation of technology.
							</p>
						</span>
					</Col>
					<Col className='image-section image-section-right background-1'></Col>
				</Row>
				<Row>
					<Col className='image-section image-section-left background-2'></Col>
					<Col className='information-section information-col'>
						<span>
							<h3 className='information-title'>
								Social Projects
							</h3>
							<p className='information-paragraph'>
								We like to share everything we’ve learned with the community, giving free classes, workshops and participating in webinars where we can talk and teach about all the technologies we’ve used and all the experiences we’ve had that inspire us.
							</p>
						</span>
					</Col>
				</Row>
				<Row>
					<Col className='information-section information-col'>
						<span>
							<h3 className='information-title'>
								Events and outreach
							</h3>
							<p className='information-paragraph'>
								We participate in congresses and events such as INCMty, Conexión Tec, The International Congress of Mechatronics - Automatization and Technology, Semana i and many more.
							</p>
						</span>
					</Col>
					<Col className='image-section image-section-right background-3'></Col>
				</Row>
				<Row>
					<Col className='image-section image-section-left background-4'></Col>
					<Col className='information-section information-col'>
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

	smallView(){
		return(
			<div className='home-information-container'>
				<Row>
					<Col className='information-section information-col'>
						<span>
							<h3 className='information-title'>
								High-Performance Team
							</h3>
							<p className='information-paragraph'>
								We  participate in different national and international competitions for autonomous robots such as Mexico's TMR (Torneo Mexicano de Robótica), RoboCup, and IEEE LARC (Latin American Robotics Competition). As a team, want to demonstrate the potential of Mexico in the development and innovation of technology.
							</p>
						</span>
					</Col>
				</Row>
				<Row>
					<Col className='image-section image-section-right background-1'></Col>
				</Row>
				<Row>
					<Col className='information-section information-col'>
						<span>
							<h3 className='information-title'>
								Social Projects
							</h3>
							<p className='information-paragraph'>
								We like to share everything we’ve learned with the community, giving free classes, workshops and participating in webinars where we can talk and teach about all the technologies we’ve used and all the experiences we’ve had that inspire us.
							</p>
						</span>
					</Col>
				</Row>
				<Row>
					<Col className='image-section image-section-left background-2'></Col>
				</Row>
				<Row>
					<Col className='information-section information-col'>
						<span>
							<h3 className='information-title'>
								Events and outreach
							</h3>
							<p className='information-paragraph'>
								We participate in congresses and events such as INCMty, Conexión Tec, The International Congress of Mechatronics - Automatization and Technology, Semana i and many more.
							</p>
						</span>
					</Col>
				</Row>
				<Row>
					<Col className='image-section image-section-right background-3'></Col>
				</Row>
				<Row>
					<Col className='information-section information-col'>
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
				<Row>
					<Col className='image-section image-section-left background-4'></Col>
				</Row>
			</div>
		);
	}

	render() {
		return ((this.state.large_view) ? this.largeView() : this.smallView());
	}
}

export default HomeHeader;
