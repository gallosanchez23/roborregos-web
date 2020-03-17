import React, { Component } from 'react';

class MembersHeader extends Component {
	render() {
		return(
			<div className='members-header'>
				<div className='container-legend'>
					<h2 className='title-text-banner'>
						Members
					</h2>
					<div className='main-text-members'>
						RoBorrego’s community is made by students with different skills in robotics, logistics and networking, all joined with a passion for exploring new technologies and sharing their knowledge with everybody.
						<p className='main-text-members-emphasis'>
							Scroll down and meet the team!
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default MembersHeader;
