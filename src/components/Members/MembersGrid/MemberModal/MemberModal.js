import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import placeholder from '../../../../images/placeholder-rectangle.png';
import {MEDIUM_WIDTH} from '../../../../constants.js';
import './MemberModal.css';

/** Component class of Members' grid. */
class MemberModal extends Component {

  /**
  * Class constructor
  * @param {active_members} props: Lists of active and inactive members.
  */
  constructor(props) {
    super(props)

    this.tryRequire = this.tryRequire.bind(this);
    this.memberFullName = this.memberFullName.bind(this);
    this.largeView = this.largeView.bind(this);
    this.smallView = this.smallView.bind(this);
    this.updateSizeView = this.updateSizeView.bind(this);
    this.getContactButton = this.getContactButton.bind(this);
    this.generateDataButtons = this.generateDataButtons.bind(this);

    this.member = props.member;
    this.handleHideModal = props.onHide;

    this.state = {
      show_large: (window.innerWidth >= MEDIUM_WIDTH) ? true : false,
    };
  }

  /** Adds event listeners for modal hiding and responsivity. */
  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false)
    window.addEventListener('resize', this.updateSizeView)
  }

  /**
  * Parses path to member image
  * @param {string} imgPath: Path to member's photographs.
  * @return {path}
  */
  tryRequire(imgPath) {
    try {
      return require('images/members/' + imgPath);
    } catch (err) {
      return placeholder
    }
  }

  /**
  * Parses mamber's full name
  * @return {string}
  */
  memberFullName() {
    return `${this.member.name} ${this.member.lastname}`
  }

  /** Updates state.show_large for responsivity. */
  updateSizeView() {
    this.setState({
      show_large: (window.innerWidth >= MEDIUM_WIDTH),
    })
  }


  /**
  * Parses contact button links for each member.
  * @param {string} platform: Social media platform.
  * @param {string} className: String for classname.
  * @return {Element}
  */
  getContactButton(platform, className) {
    let href; let icon; let user;

    switch (platform) {
      case 'github':
        href = this.member.github
        icon = 'fa-github'
        user = this.member.github_user
        break
      case 'linkedin':
        href = this.member.linkedin
        icon = 'fa-linkedin'
        user = 'LinkedIn'
        break
      case 'resume':
        href = this.member.resume_link
        icon = 'fa-file-pdf'
        user = 'Resume'
        break
      default:
        break
    }
    return (
      <Button href={ href } className={ className }>
        <Icon className={ `fab ${ icon } fa-fw` } />
        <span className='member-username'>
          { user }
        </span>
      </Button>
    );
  }

  /**
  * Generates buttons for member's contact info.
  * @return {Element} Button
  */
  generateDataButtons() {
    let className = '';
    if (this.state.show_large) {
      className = 'member-modal-btn';
    } else {
      className = 'icon-small';
    }
    return (
      <div className='data-buttons'>
        { (this.member.github !== '') ?
          this.getContactButton('github', className) : null }
        <br/>
        { (this.member.linkedin !== '') ?
          this.getContactButton('linkedin', className) : null }
        <br/>
        { (this.member.resume_link !== '') ?
          this.getContactButton('resume', className) : null }
      </div>
    )
  }

  /**
  * Generates large view responsive components
  * @return {Element} Mmember modal
  */
  largeView() {
    return (
      <div className="member-modal-container">
        <div className="container-helper">
          <Row className="justify-content-center main-modal-row">
            <Col lg="3" className="image-col">
              <div className="image-cropper">
                <img
                  className="modal-member-image"
                  src={this.tryRequire(`${this.member.id}.jpg`)}
                  alt={this.memberFullName()}
                />
              </div>
            </Col>
            <Col lg="5" className="information-col">
              <div className="information-container">
                <Row noGutters>
                  <Col xs={{span: 1, offset: 11}}>
                    <IconButton
                      className='closing-btn'
                      onClick={ this.handleHideModal }
                    >
                      <CloseIcon />
                    </IconButton>
                  </Col>
                </Row>
                <Row noGutters>
                  <div className="member-titles">
                    <h2>
                      { this.memberFullName() }
                    </h2>
                    <strong> { this.member.role } </strong>
                    <div
                      className='member-subtitles'
                      style={{display: (this.member.status === 'inactive') ?
                      'block' : 'none'}}
                    >
                      <h6>
                        <div> { this.member.subtitle } </div>
                        <div>
                          {'Since ' + this.member.class +
                          ', ' + this.member.semesters +
                          ' semesters' }
                        </div>
                      </h6>
                    </div>
                  </div>

                </Row>
                <Row noGutters>
                  <p className="member-data">
                    { this.member.description }
                  </p>
                </Row>
                <Row noGutters className="justify-content-center">
                  { this.generateDataButtons() }
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }

  /**
  * Generates small view responsive components
  * @return {Element} Mmember modal
  */
  smallView() {
    return (
      <div className="member-modal-container">
        <div className="container-helper">
          <Row className="main-modal-row">
            <div className="close-button">
              <Col>
                <IconButton
                  className='icon-small'
                  onClick={ this.handleHideModal}
                >
                  <CloseIcon />
                </IconButton>
              </Col>
            </div>
            <Row noGutters className="image-col-small">
              <div className="image-cropper">
                <img
                  className="modal-member-image"
                  src={this.tryRequire(`${this.member.id}.jpg`)}
                  alt={this.memberFullName()}
                />
              </div>
            </Row>
            <div className="description-small">
              <Row noGutters>
                <div className="member-titles">
                  <h2 className="name-small">
                    { this.memberFullName() }
                  </h2>
                  <strong> { this.member.role } </strong>
                  <div
                    className='member-subtitles'
                    style={{display: (this.member.status === 'inactive') ?
                    'block' : 'none'}}>
                    <h6>
                      <div> { this.member.subtitle } </div>
                      <div>
                        {'Since ' + this.member.class + ', ' +
                        this.member.semesters + ' semesters' }
                      </div>
                    </h6>
                  </div>
                </div>
              </Row>
              <Row noGutters>
                <div className="member-data">
                  { this.member.description }
                </div>
              </Row>
              <Row noGutters className="justify-content-center">
                { this.generateDataButtons() }
              </Row>
            </div>
          </Row>
        </div>
      </div>
    )
  }

  /**
  * Render funciton of member modal
  * @return {components} Memmebr modal
  */
  render() {
    if (this.state.show_large) {
      return this.largeView()
    }
    return this.smallView()
  }
}

export default MemberModal;
