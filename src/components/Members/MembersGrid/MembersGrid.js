import React, { Component } from 'react';
import './MembersGrid.css';

class MembersGrid extends Component {
	constructor(props) {
		super(props);

		this.members = props.members;
	}

	render() {
		return (
			<div className='members-grid'>
				{this.members.map(member =>(
					<h3 key={ member.id }>
						{ member.id }
						{ member.name }
					</h3>
				))}
			</div>
		);
	}
}

export default MembersGrid;