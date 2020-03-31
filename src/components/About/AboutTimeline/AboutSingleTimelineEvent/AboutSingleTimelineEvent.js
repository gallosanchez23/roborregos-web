import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import placeholder from 'images/placeholder-rectangle.png';

class AboutSingleTimelineEvent extends Component{
	constructor(props) {
		super(props);

		this.resolveColor = this.resolveColor.bind(this);
		this.resolvePosition = this.resolvePosition.bind(this);
		this.resolvePropsValues = this.resolvePropsValues.bind(this);

		this.tryRequire = this.tryRequire.bind(this);
		this.handleHover = this.handleHover.bind(this);

		this.id = props.id;
		this.event = props.event;

		this.date = this.event.date;
		this.year = this.date.substr(this.date.length - 4);
		this.backgroundColor = this.resolveColor(this.year);

		this.state = {
			hover: false,
		}
	}

	tryRequire(img_path) {
		try {
			return require('images/' + img_path);
		}
		catch(err) {
			return placeholder;
		}
	}

	resolveColor(year) {
		let colors = ['rgb(0, 178, 154)', 'rgb(238, 77, 122)', 'rgb(255, 130, 0)', 'rgb(155, 0, 250)'];
		return colors[year % 4];
	}

	resolvePosition(year) {
		return parseInt(year) % 2 ? 'right' : 'left';
	}

	handleHover() {
		this.setState({ hover: !this.state.hover });
	}

	resolvePropsValues() {
		if (this.state.hover) {
			this.contentColor = 'rgba(0, 0, 0, 0.0)';
			this.displayContent = 'none';
			this.displayImg = 'block';
		}
		else {
			this.contentColor = this.backgroundColor;
			this.displayContent = 'block';
			this.displayImg = 'none';
		}
	}

	render() {
		this.resolvePropsValues();

		return(
			<VerticalTimelineElement
				date={ this.event.date }
				position={ this.resolvePosition(this.year) }
				iconStyle={{ background: this.backgroundColor, color: '#fff' }}
				contentStyle={{
												background: this.contentColor,
												color: '#fff',
												boxShadow: '0 0',
												padding: '0'
											}}
				contentArrowStyle={{ borderRight: '7px solid ' + this.contentColor }}
			>
				<div onMouseEnter={ this.handleHover } onMouseLeave={ this.handleHover }>
					<img className='timeline-element-img'
						src={ this.tryRequire(this.event.img_path) }
						alt={ this.event.img_description }
						style={{ display: this.displayImg }}
					/>
					<Container
						className='timeline-element-container'
						style={{ display: this.displayContent }}
					>
						<Row>
							<h3>
								{ this.event.title }
							</h3>
							<p>
								{ this.event.description }
							</p>
						</Row>
					</Container>
				</div>
			</VerticalTimelineElement>
		);
	}
}

export default AboutSingleTimelineEvent
