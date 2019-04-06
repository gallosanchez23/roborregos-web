import React, { Component } from 'react';
import HomeHeader from './HomeHeader/HomeHeader.js';
import HomeSponsors from './HomeSponsors/HomeSponsors.js';
import sponsorsData from 'data/sponsors.json';

class Home extends Component {
	render() {
		return (
			<div className='home-container'>
				<HomeHeader />
				<HomeSponsors sponsors={ sponsorsData.sponsors } />
			</div>
		);
	}
}

export default Home;
