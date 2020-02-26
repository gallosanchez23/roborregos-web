import React, { Component } from 'react';

class MembersHeader extends Component {
	render() {
		return(
			<div className='members-header'>
				<div className='container-legend'>
					<h2>
						Members
					</h2>
					<div className='main-text-members'>
						<br></br>
						<p className='main-text-members-emphasis'>
							Founded in 2015 with only 4 members, we are now a team of 45 full-time students of different semesters and careers, with 2 professors of TI at Tecnológico de Monterrey.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default MembersHeader;