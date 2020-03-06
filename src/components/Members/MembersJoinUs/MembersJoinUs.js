import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class MembersJoinUs extends Component {
	render() {
		return (
			<div className='members-join-us'>
				<div className='container-legend'>
					<Button href="/contact" className='members-join-us-button'>
						<div className='members-join-us-button-contain'>
							<h2 className='members-join-us-button-text'>
								Join Us
							</h2>
						</div>
					</Button>
				</div>
			</div>
		);
	}
}

export default MembersJoinUs;