// View using Matrial-UI
import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import placeholder from 'images/placeholder.png';
import './MembersGrid.css';

class MembersGrid extends Component {
	constructor(props) {
		super(props);

		this.tryRequire = this.tryRequire.bind(this);

		this.members = props.members;
	}

	tryRequire(img_path) {
	  try {
	   return require('images/members/' + img_path);
	  } catch (err) {
	   return placeholder;
	  }
	}

	render() {
		return (
			<div className='members-grid-container'>
				<GridList
					cellHeight={ 'auto' }
					className='members-grid'
					cols={ 5 }
					spacing={ 0 }
				>

					{this.members.map(member =>(
						<GridListTile
							key={ member.id }
							cols={ 1 }
							className='members-grid-tile'
						>
							<img
								className='member-image'
								src={ this.tryRequire(member.img) }
								alt={ member.name }
							/>
						</GridListTile>
					))}

				</GridList>
			</div>
		);
	}
}


export default MembersGrid;
