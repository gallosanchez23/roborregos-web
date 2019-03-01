import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import NoSsr from '@material-ui/core/NoSsr';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

const styles = {
	root: {
		flexGrow: 1,
	},
};

class NavBar extends Component {
	state = {
		tabValue: 0,
	};

	handleTabChange = (event, tabValue) => {
		this.setState({ tabValue });
	};

	render() {
		const { classes } = this.props;
		const { tabValue } = this.state;

		return (
			<NoSsr>
				<div className={classes.root}>
					<AppBar position='static'>
						<Tabs
							centered
							value={ tabValue }
							onChange={ this.handleTabChange }
						>

							<Tab component={ Link } label='Home' to='/' />
							<Tab component={ Link } label='About us' to='/about_us' />
							<Tab label='Texto' disabled />
							<Tab component={ Link } label='Members' to='/members' />

						</Tabs>
					</AppBar>
				</div>
			</NoSsr>
		);
	}

}

NavBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);