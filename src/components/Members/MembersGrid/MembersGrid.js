// This view uses Matrial-UI elements
import React, { Component } from 'react';
import MemberModal from './MemberModal/MemberModal.js';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Modal } from 'react-bootstrap';
import placeholder from 'images/placeholder-rectangle.png';

class MembersGrid extends Component {
	constructor(props) {
		super(props);

		this.tryRequire = this.tryRequire.bind(this);
		this.handleShowModal = this.handleShowModal.bind(this);
		this.handleHideModal = this.handleHideModal.bind(this);
		this.updateWindowSizeState = this.updateWindowSizeState.bind(this);

		this.members = props.members;

		this.state = {
			show_modal: false,
			member: this.members[0],
			window_size: (window.innerWidth > 990)?'l':(window.innerWidth > 700)?'m':'s',
		}
	}

	componentDidMount() {
		// Additionally I could have just used an arrow function for the binding `this` to the component...
		window.addEventListener("resize", this.updateWindowSizeState);
	}

	updateWindowSizeState() {
		this.setState({
			window_size: (window.innerWidth > 990)?'l':(window.innerWidth > 600)?'m':'s',
		});
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
					cols={ (window.innerWidth > 990)?5:(window.innerWidth > 600)?4:3 }
					spacing={ 5 }
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
