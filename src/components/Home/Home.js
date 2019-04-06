import React, { Component } from 'react';
import HomeCarousel from './HomeCarousel/HomeCarousel.js';
import HomeHeader from './HomeHeader/HomeHeader.js';
import HomeSponsors from './HomeSponsors/HomeSponsors.js';
import sponsorsData from 'data/sponsors.json';

class Home extends Component {
	render() {
		return (
			<div className='home-container'>
				<HomeHeader />
				<HomeCarousel />
				<HomeSponsors sponsors={ sponsorsData.sponsors } />
			</div>
		);
	}
}

export default Home;
