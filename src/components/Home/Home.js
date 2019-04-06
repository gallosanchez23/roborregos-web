import React, { Component } from 'react';
import HomeHeader from './HomeHeader/HomeHeader.js';
import HomeCarousel from './HomeCarousel/HomeCarousel.js';

class Home extends Component {
	render() {
		return (
			<div className='home-container'>
				<HomeHeader />
				<HomeCarousel />
			</div>
		);
	}
}

export default Home;
