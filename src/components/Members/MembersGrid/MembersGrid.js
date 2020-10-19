import React, {Component} from 'react';
import MemberModal from './MemberModal/MemberModal.js';
import Carousel from 'react-material-ui-carousel';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {Modal} from 'react-bootstrap';
import placeholder from 'images/placeholder-rectangle.png';
import {LARGE_WIDTH, MEDIUM_WIDTH, MOBILE_WIDTH} from 'constants.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog, faCode, faBullhorn, faMicrochip, faRocket}
  from '@fortawesome/free-solid-svg-icons';
import './MembersGrid.css';

/** Component class of Members' grid. */
class MembersGrid extends Component {
  /**
  * Class constructor
  * @param {active_members} props Lists of active and inactive members.
  */
  constructor(props) {
    super(props);

    this.tryRequire = this.tryRequire.bind(this);
    this.memberIcon = this.memberIcon.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleHideModal = this.handleHideModal.bind(this);
    this.numberOfColumns = this.numberOfColumns.bind(this);
    this.updateNumberOfColumns = this.updateNumberOfColumns.bind(this);
    this.generateGridList = this.generateGridList.bind(this);
    this.keyFunction = this.keyFunction.bind(this);
    this.carouselItem = this.carouselItem.bind(this);
    this.updateMember = this.updateMember.bind(this);
    this.changeMemberUIArrows = this.changeMemberUIArrows.bind(this);

    this.active_members_keys =
      this.props.active_members.map((member) => (member.id));
    this.inactive_members_keys =
      this.props.inactive_members.map((member) => (member.id));

    this.state = {
      show_modal: false,
      member: this.props.active_members[0],
      active: true,
      number_of_columns: this.numberOfColumns(),
    };
  }

  /**
  * Adds key and resizing listeners
  */
  componentDidMount() {
    document.addEventListener('keydown', this.keyFunction, false);
    window.addEventListener('resize', this.updateNumberOfColumns);
  }

  /**
  * Calculates how many members per row to display on the member's grid.
  * @return {int} Number of members per row for grid.
  */
  numberOfColumns() {
    if (window.innerWidth >= LARGE_WIDTH) {
      return 5;
    }
    if (window.innerWidth >= MEDIUM_WIDTH) {
      return 4;
    }
    if (window.innerWidth >= MOBILE_WIDTH) {
      return 3;
    }
    return 2;
  }

  /**
  * Parses path to member image
  * @param {string} imgPath Path to member's photographs.
  * @return {path}
  */
  tryRequire(imgPath) {
    try {
      return require('images/members/' + imgPath);
    } catch (err) {
      return placeholder;
    }
  }

  /**
  * Key operations to hide and change modals.
  * @param {event} event
  */
  keyFunction(event) {
    if (event.keyCode === 27) {
      this.handleHideModal();
    }
    const difference = (event.keyCode === 37)?-1:(event.keyCode === 39)?1:0;
    this.updateMember(difference);
  }

  /**
  * Function called from carrousel's change of view to update state.member
  * @param {int} next Id of next view to be displayed.
  * @param {int} current Id of current view in display.
  */
  changeMemberUIArrows(next, current) {
    const difference = (next > current)? 1 : -1;
    this.updateMember(difference);
  }

  /**
  * Shows member's modal by updating state
  * @param {prop} member Member to be shown.
  */
  handleShowModal(member) {
    this.setState({
      show_modal: true,
      member: member,
      active: this.active_members_keys.includes(member.id),
    });
  }

  /**
  * Hides member's modal by updating state.show_modal
  */
  handleHideModal() {
    this.setState({
      show_modal: false,
    });
  }

  /**
  * Updates state.number_of_columns
  */
  updateNumberOfColumns() {
    this.setState({
      number_of_columns: this.numberOfColumns(),
    });
  }

  /**
  * Generates member grid component.
  * @param {prop} members Member to be shown.
  * @param {string} title Member to be shown.
  * @return {component} Grid of member list data.
  */
  generateGridList(members, title) {
    return (
      <div>
        <div
          style={{display: (title === '') ? 'none' : 'block'}}
          className='grid-title'
        >
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
          { members.map((member) => (
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
                    <FontAwesomeIcon
                      icon={ this.memberIcon(member.role) }
                      size='1x' />
                  </div>
                </div>
              </div>
            </GridListTile>
          )) }
        </GridList>
      </div>
    );
  }

  /**
  * Returns member icon according to role specified.
  * @param {string} role Member role.
  * @return {icon}
  */
  memberIcon(role) {
    if (role === 'Software Development') {
      return faCode;
    } else if (role === 'Electronics') {
      return faMicrochip;
    } else if (role === 'Mechanical Design') {
      return faCog;
    } else if (role === 'Logistics & Sponsorship') {
      return faBullhorn;
    } else {
      return faRocket;
    }
  }

  /**
  * Returns Component MemberModal with specified member atributes.
  * @param {prop} member Member object.
  * @return {icon}
  */
  carouselItem(member) {
    return (
      <MemberModal
        onClick={this.updateXMouse}
        member={ member }
        onHide={ this.handleHideModal }
      />
    );
  }

  /**
  * Updates member state.
  * @param {int} difference States if the shown member has to
  * be the next or previous member on the list.
  */
  updateMember(difference) {
    let newId;
    if (this.state.active) {
      newId = (this.active_members_keys.indexOf(this.state.member.id) +
        difference < 0) ? this.props.active_members.length - 1 :
        (this.active_members_keys.indexOf(this.state.member.id) + difference) %
        this.props.active_members.length;
      this.setState({
        member: this.props.active_members[newId],
      });
    } else {
      newId = (this.inactive_members_keys.indexOf(this.state.member.id) +
      difference < 0) ?this.props.inactive_members.length - 1 :
      (this.inactive_members_keys.indexOf(this.state.member.id) + difference) %
      this.props.inactive_members.length;
      this.setState({
        member: this.props.inactive_members[newId],
      });
    }
  }

  /**
  * Render funciton of grid and member
  * @return {components} Active and inactive members grid, as well as carousel.
  */
  render() {
    return (
      <div className='members-grid-container'>
        { this.generateGridList(this.props.active_members, '') }
        { this.generateGridList(this.props.inactive_members,
            'RoBorregos Legacy') }
        <Modal
          className='modal-container'
          show={ this.state.show_modal }
          dialogAs={ () =>
            <Carousel
              className='member-carrousel'
              navButtonsAlwaysVisible={true}
              autoPlay={false}
              timeout={200}
              fullHeightHover={true}
              indicators={false}
              onChange={ (next, active) => {
                this.changeMemberUIArrows(next, active);
              }}
              startAt={(this.state.active) ?
                this.active_members_keys.indexOf(this.state.member.id) :
                this.inactive_members_keys.indexOf(this.state.member.id)}
            >
              {
              (this.state.active) ?
              this.props.active_members.map( (member, i) =>
                this.carouselItem(member) ) :
              this.props.inactive_members.map( (member, i) =>
                this.carouselItem(member) )
              }
            </Carousel>
          }
        />
      </div>
    );
  }
}

export default MembersGrid;
