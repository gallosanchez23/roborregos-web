import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './CandidatesHeader.css';

class CandidatesHeader extends Component {
  scrollToInfo(){
    window.scrollBy(0, window.innerHeight - 48 - window.scrollY);
  }

  render() {
    return(
      <div className='candidates-header'>
        <div className='container-legend'>
          <h2 className='title-text-banner'>
            Candidates
          </h2>
          <div className='main-text-candidates'>
            <p>
              <strong>
                We want you to be part of our team!
              </strong>
              <br />
              Every year, we recruit new members that are studying at Tec of Monterrey, Campus Monterrey, who are passionate in developing robots.
            </p>
          </div>
        </div>
        <div className='candidates-header-footer'>
          <p>
            Are you a candidate?
            <br />
            Join us!
          </p>
          <FontAwesomeIcon onClick={ this.scrollToInfo } icon={ faAngleDown } className='icon-btn' />
        </div>
      </div>
    );
  }
}

export default CandidatesHeader;
