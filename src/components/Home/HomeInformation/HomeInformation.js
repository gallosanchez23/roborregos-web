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
								Competencias Internacionales
							</h3>
							<br/>
							<p>
								Aliqua nisi ea occaecat incididunt ex reprehenderit consequat dolore qui occaecat eu ad sunt fugiat ut velit ex pariatur dolore irure dolor veniam excepteur minim non labore id aliquip.
							</p>
						</span>
					</Col>
				</Row>
				<Row className='information-section background-2'>
					<Col xs='10' md={{span: 6, offset: 6}} className='information-col'>
						<span>
							<h3>
								Proyectos Sociales
							</h3>
							<br/>
							<p>
								Qui labore nisi eiusmod eiusmod minim dolor occaecat occaecat ut excepteur esse deserunt aliquip dolor minim nulla in magna minim consectetur dolore ut dolore in consequat veniam amet velit.
							</p>
						</span>
					</Col>
				</Row>
				<Row className='information-section background-3'>
					<Col xs='10' md='6' className='information-col'>
						<span>
							<h3>
								Colaboraciones Profesionales
							</h3>
							<br/>
							<p>
								Magna incididunt commodo sit proident labore nulla ut dolor qui sint velit consectetur amet enim incididunt ea laborum nostrud ex est in sunt ad velit laborum eu sunt dolore ad sint dolor nulla magna adipisicing.
							</p>
						</span>
					</Col>
				</Row>
				<Row className='information-section background-2'>
					<Col xs='10' md={{span: 6, offset: 6}} className='information-col'>
						<span>
							<h3>
								Comunidad estudiantil
							</h3>
							<br/>
							<p>
								Qui labore nisi eiusmod eiusmod minim dolor occaecat occaecat ut excepteur esse deserunt aliquip dolor minim nulla in magna minim consectetur dolore ut dolore in consequat veniam amet velit.
							</p>
						</span>
					</Col>
				</Row>
			</div>
		);
	}
}

export default HomeHeader;