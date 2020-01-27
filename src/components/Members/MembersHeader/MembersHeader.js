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
						<p>
							Founded in 2015 with only 4 members, we are now a team of 45 full-time students of different semesters and careers, with 2 professors of TI at Tecnológico de Monterrey.
						</p>
						<p>
							Our mission: demonstrate the potential of Mexico in the development and innovation of technology and help develop our community.
						</p>
						<p>
							Our vision: to become, in the next decade, the best robotics team in Latin America in national and international competitions for university students, and be able to promote technological development in Mexico.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default MembersHeader;