import React, { Component } from 'react';
import MembersGrid from './MembersGrid/MembersGrid.js';
import MembersHeader from './MembersHeader/MembersHeader.js';
import MembersJoinUs from './MembersJoinUs/MembersJoinUs.js';
import Footer from 'components/Footer/Footer.js';

class Members extends Component {
	constructor(props) {
		super(props);

		this.members = props.membersData.members;
	}

	render() {
		return (
				<div className='members-container'>
					<MembersHeader />
					<MembersGrid 
						members={ this.members.filter(member => member.status == "comitee") } title="Leadership"
						description="The head of the team."
					/>
					<MembersGrid members={ 
						this.members.filter(member => member.status == "active") } 
						title="Active members" 
						description="Members that are currently on the team."
					/>
					<MembersGrid 
						members={ this.members.filter(member => member.status == "inactive") } title="Legacy"
						description="Members that aready graduated."
					/>
					<MembersJoinUs />
					<Footer />
				</div>
		);
	}
}

export default Members;