import React, { Component } from 'react';
import Footer from 'components/Footer/Footer.js';
import AboutHeader from './AboutHeader/AboutHeader.js'
import AboutTimeline from './AboutTimeline/AboutTimeline.js'
import timelineData from 'data/timeline.json';

class About extends Component {
	render() {
		return (
			<div className='about-container'>
					<AboutHeader/>
					<AboutTimeline events={ timelineData.events }/>
					<Footer/>
			</div>
		);
	}
}

export default About;
