import React, { Component } from 'react';
import HomeFooter from './HomeFooter/HomeFooter.js';
import HomeHeader from './HomeHeader/HomeHeader.js';
import HomeInformation from './HomeInformation/HomeInformation.js';
import HomeSponsors from './HomeSponsors/HomeSponsors.js';
import sponsorsData from 'data/sponsors.json';
import Footer from '../Footer/Footer.js';

class Home extends Component {
	render() {
		return (
			<div className='home-container'>
				<HomeHeader />
				<HomeInformation />
				<HomeSponsors sponsors={ sponsorsData.sponsors } />
				<Footer />
			</div>
		);
	}
}

export default Home;
