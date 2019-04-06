import React, { Component } from 'react';
import MembersHeader from './MembersHeader/MembersHeader.js';
import MembersGrid from './MembersGrid/MembersGrid.js';
import MembersJoinUs from './MembersJoinUs/MembersJoinUs.js';

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
			</div>
		);
	}
}

export default Members;