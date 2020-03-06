import React, { Component } from 'react';
import MembersFooter from './MembersFooter/MembersFooter.js';
import MembersGrid from './MembersGrid/MembersGrid.js';
import MembersHeader from './MembersHeader/MembersHeader.js';
import MembersJoinUs from './MembersJoinUs/MembersJoinUs.js';
import Footer from '../Footer/Footer.js';

class Members extends Component {
	constructor(props) {
		super(props);

		this.members = props.membersData.members;
	}

	render() {
		return (
			<div className='members-container'>
				<MembersHeader />
				<MembersGrid members={ this.members } />
				<MembersJoinUs />
				<Footer />
			</div>
		);
	}
}

export default Members;