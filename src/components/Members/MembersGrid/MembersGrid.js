// This view uses Matrial-UI elements
import React, { Component } from 'react';
import MemberModal from './MemberModal/MemberModal.js';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import placeholder from 'images/placeholder-rectangle.png';
import { Modal } from 'react-bootstrap';

class MembersGrid extends Component {
	constructor(props) {
		super(props);

		this.tryRequire = this.tryRequire.bind(this);
		this.handleShowModal = this.handleShowModal.bind(this);
		this.handleHideModal = this.handleHideModal.bind(this);

		this.members = props.members;

		this.state = {
			show_modal: false,
			member: this.members[0]
		}
	}

	tryRequire(img_path) {
		try {
			return require('images/members/' + img_path);
		} catch (err) {
			return placeholder;
		}
	}

	handleShowModal(member, event) {
		this.setState({
			show_modal: true,
			member: member
		});
	}

	handleHideModal() {
		this.setState({
			show_modal: false
		});
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
							onClick={ this.handleShowModal.bind(this, member) }
						>
							<img
								className='member-image'
								src={ this.tryRequire(member.img) }
								alt={ member.name }
							/>
						</GridListTile>
					))}

				</GridList>

				<Modal
					show={ this.state.show_modal }
					onHide={ this.handleHideModal }
          dialogAs={ () => <MemberModal member={ this.state.member } onHide={ () => this.handleHideModal() } /> }
				>
				</Modal>
			</div>
		);
	}
}


export default MembersGrid;
