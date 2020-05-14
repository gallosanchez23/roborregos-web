import React, { Component } from 'react';
import CandidatesOpenPositions from './CandidatesOpenPositions/CandidatesOpenPositions.js';
import './CandidatesJoinUs.css';

class CandidatesJoinUs extends Component {
  constructor(props) {
    super(props);

    this.positionsData = props.positionsData;

    this.joinUsCallback = this.joinUsCallback.bind(this);
  }

  joinUsCallback() {
    window.open(this.positionsData.url_facebook, '_blank');
  }

  render() {
    return(
      <div id='candidates-joinus' className='candidates-joinus'>
        <div className='candidates-joinus-title-container'>
          <h2>
            Hello there! Are you a candidate?
            <br />
            Join Us!
          </h2>
        </div>
        <CandidatesOpenPositions positionsData={ this.positionsData } />
        <div className='candidates-joinus-btn-container'>
          <button onClick={ this.joinUsCallback } className='candidates-joinus-btn' variant='outline-primary'>
            Join Us!
          </button>
        </div>
      </div>
    );
  }
}

export default CandidatesJoinUs;
