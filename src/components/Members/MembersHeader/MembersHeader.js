import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import './MembersHeader.css';

class MembersHeader extends Component {
  scrollToInfo(){
    window.scrollBy(0, 900 - window.scrollY);
  }

  render() {
    return(
      <div className='members-header'>
        <div className='container-legend'>
          <h2 className='title-text-banner'>
            Members
          </h2>
          <div className='main-text-members'>
            RoBorrego’s community is made by students with different skills in robotics, logistics and networking, all joined with a passion for exploring new technologies and sharing their knowledge with everybody.
          </div>
        </div>
        <Col xs='12' className='members-header-footer'>
          <Row className='justify-content-center'>
            Scroll down and meet the team!
          </Row>
          <Row className='justify-content-center'>
            <FontAwesomeIcon onClick={ this.scrollToInfo } icon={ faAngleDown } className='mr-2' />
          </Row>
        </Col>
      </div>
    );
  }
}

export default MembersHeader;
