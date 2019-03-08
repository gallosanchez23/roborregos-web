import React, { Component } from 'react';
import NavBar from 'components/NavBar/NavBar.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routesData from 'data/routes.json';
import membersData from 'data/members.json';
import Members from 'components/Members/Members.js';
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

class App extends Component {
	render() {
		return (
			<Router>
				<div className='app-container'>

					<NavBar routes={ routesData.routes } />

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
						component={ () => <Members membersData={ membersData } /> }
					/>

				</div>
			</Router>
		);
	}
}

export default App;
