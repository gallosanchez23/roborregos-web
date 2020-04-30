// This view uses Matrial-UI elements
import React, { Component } from 'react';
import MemberModal from './MemberModal/MemberModal.js';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Modal } from 'react-bootstrap';
import placeholder from 'images/placeholder-rectangle.png';
import { LARGE_WIDTH, MEDIUM_WIDTH } from 'constants.js';
import './MembersGrid.css';

class MembersGrid extends Component {
  constructor(props) {
    super(props);

    this.tryRequire = this.tryRequire.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleHideModal = this.handleHideModal.bind(this);
    this.numberOfColumns = this.numberOfColumns.bind(this);
    this.updateNumberOfColumns = this.updateNumberOfColumns.bind(this);

    this.members = props.members;

    this.state = {
      show_modal: false,
      member: this.members[0],
      number_of_columns: this.numberOfColumns(),
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateNumberOfColumns);
  }

  numberOfColumns(){
    if (window.innerWidth >= LARGE_WIDTH)
      return 5;
    else if (window.innerWidth >= MEDIUM_WIDTH)
      return 4;
    else
      return 3;
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
      member: member,
    });
  }

  handleHideModal() {
    this.setState({
      show_modal: false,
    });
  }

  updateNumberOfColumns() {
    this.setState({
      number_of_columns: this.numberOfColumns(),
    });
  }

  render() {
    return (
      <div className='members-grid-container'>
        <GridList
          cellHeight={ 'auto' }
          className='members-grid'
          cols={ this.state.number_of_columns }
          spacing={ 5 }
        >
          { this.members.map(member =>(
            <GridListTile
              key={ member.id }
              cols={ 1 }
              className='members-grid-tile'
              onClick={ this.handleShowModal.bind(this, member) }
            >
              <img
                className='member-image'
                src={ this.tryRequire(member.id + '.jpg') }
                alt={ member.name }
              />
            </GridListTile>
          )) }
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
