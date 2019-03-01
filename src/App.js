import React, { Component } from 'react';

import NavBar from 'components/NavBar/NavBar.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import routes from 'data/routes.json';

import './App.css';

function Home() {
	return (
		<h2>
			Home
		</h2>
	);
}

function AboutUs() {
	return (
		<h2>
			About us
		</h2>
	);
}

function Members() {
	return (
		<h2>
			Members
		</h2>
	);
}

class App extends Component {
	render() {
		return (
			<Router>
				<div className='app-container'>

					<NavBar />

					<Route
						exact path='/'
						component={ Home }
					/>

					<Route
						path='/about_us'
						component={ AboutUs }
					/>

					<Route
						path='/members'
						component={ Members }
					/>

				</div>
			</Router>
		);
	}
}

export default App;
