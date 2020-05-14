import React, { Component } from 'react';
import CandidatesJoinUs from './CandidatesJoinUs/CandidatesJoinUs.js'
import positionsData from 'data/positions.json';
import './CandidatesInfo.css';

class CandidatesInfo extends Component {
  render() {
    return (
      <div className='candidates-info-container'>
        <div className='info-container'>
          <h2 className='title-text-banner' ref={ this.carouselRef }>
            What is candidates?
          </h2>
          <div className='main-text-candidates'>
            Candidates is a program RoBorregos hosts every year during the August-December semester. The team offers free classes for mechanics, electronics, and software, looking to inspire young college students to get hands-on developing technology. At the end of the semester, a competition is held and new team members are recruited.
          </div>
        </div>
        <CandidatesJoinUs positionsData={ positionsData } />
      </div>
    );
  }
}

export default CandidatesInfo;
