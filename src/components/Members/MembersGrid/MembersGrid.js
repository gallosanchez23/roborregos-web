import React, { Component } from 'react';
import MemberModal from './MemberModal/MemberModal.js';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Modal } from 'react-bootstrap';
import placeholder from 'images/placeholder-rectangle.png';
import { LARGE_WIDTH, MEDIUM_WIDTH, MOBILE_WIDTH } from 'constants.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import './MembersGrid.css';

class MembersGrid extends Component {
  constructor(props) {
    super(props);

    this.tryRequire            = this.tryRequire.bind(this);
    this.memberIcon            = this.memberIcon.bind(this);
    this.handleShowModal       = this.handleShowModal.bind(this);
    this.handleHideModal       = this.handleHideModal.bind(this);
    this.numberOfColumns       = this.numberOfColumns.bind(this);
    this.updateNumberOfColumns = this.updateNumberOfColumns.bind(this);
    this.generateGridList      = this.generateGridList.bind(this);

    this.members = props.members;

    this.state = {
      show_modal: false,
      member: this.props.active_members[0],
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
    else if (window.innerWidth >= MOBILE_WIDTH)
      return 3;
    else {
        return 2;
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

  generateGridList(members, title) {
    return (
      <div>
        <div style={{ display: (title === '') ? 'none' : 'block' }} className='grid-title'>
          <h1 className='grid-title-text'>
            { title }
          </h1>
        </div>
        <GridList
          cellHeight={ 'auto' }
          className='members-grid'
          cols={ this.state.number_of_columns }
          spacing={ 3 }
        >
          { members.map(member => (
            <GridListTile
              key={ member.id }
              cols={ 1 }
              className='members-grid-tile'
              onClick={ this.handleShowModal.bind(this, member) }
            >
              <div className='member-image-container'>
                <img
                  className='member-image'
                  src={ this.tryRequire(member.id + '.jpg') }
                  alt={ member.name }
                />
                <div className='member-image-content'>
                  <p>
                    { member.name + ' ' + member.lastname }
                  </p>
                  <div className='member-image-icon'>
                    <FontAwesomeIcon icon={ this.memberIcon(member.role) } size='1x' />
                  </div>
                </div>
              </div>
            </GridListTile>
          )) }
        </GridList>
      </div>
    );
  }

  memberIcon(role) {
    if (role === 'Software Development') {
      return faCode;
    } else if (role === 'Electronics') {
      return faMicrochip;
    } else if (role === 'Mechanical Design') {
      return faCog;
    } else {
      return faBullhorn;
    }
  }

  render() {
    return (
      <div className='members-grid-container'>
        { this.generateGridList(this.props.active_members, '') }
        { this.generateGridList(this.props.inactive_members, 'RoBorregos Legacy') }
        <Modal
          show={ this.state.show_modal }
          onHide={ this.handleHideModal }
          dialogAs={ () => <MemberModal member={ this.state.member } onHide={ () => this.handleHideModal() } /> }
        />
      </div>
    );
  }
}

export default MembersGrid;
