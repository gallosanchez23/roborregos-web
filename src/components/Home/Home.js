import React, { Component } from 'react';
import HomeHeader from './HomeHeader/HomeHeader.js';
import HomeInformation from './HomeInformation/HomeInformation.js';
import HomeSponsors from './HomeSponsors/HomeSponsors.js';
import Footer from 'components/Footer/Footer.js';
import sponsorsData from 'data/sponsors.json';

class Home extends Component {
	render() {
		document.title = 'RoBorregos';

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
