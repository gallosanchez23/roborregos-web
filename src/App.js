import React, { Component } from 'react';
import Home from 'components/Home/Home.js';
import Members from 'components/Members/Members.js';
import Contact from 'components/Contact/Contact.js';
import NavBar from 'components/NavBar/NavBar.js';
import About from 'components/About/About.js';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routesData from 'data/routes.json';
import membersData from 'data/members.json';

class App extends Component {
	componentDidMount() {
		loadCSS(
			'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
			document.querySelector('#insertion-point-jss'),
		);
	}

	render() {
		return (
			<Router>
				<div className='app-container'>

					<NavBar routes={ routesData.routes } />

					<Route
						exact path='/'
						component={ () => <Home /> }
					/>

					<Route
						path='/about'
						component={ () => <About /> }
					/>

					<Route
						path='/members'
						component={ () => <Members membersData={ membersData } /> }
					/>

					<Route
						path='/contact'
						component={ () => <Contact /> }
					/>
				</div>
			</Router>
		);
	}
}

export default App;
