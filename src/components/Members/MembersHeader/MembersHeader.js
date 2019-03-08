import React, { Component } from 'react';
import './MembersHeader.css';

class MembersHeader extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className='members-header'>
				<div className='header-legend'>
					<h2>
						Miembros
					</h2>
				</div>
			</div>
		);
	}
}

export default MembersHeader;