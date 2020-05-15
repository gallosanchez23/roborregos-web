import React, { Component } from 'react';
import CandidatesHeader from './CandidatesHeader/CandidatesHeader.js'
import CandidatesCarousel from './CandidatesCarousel/CandidatesCarousel.js'
import CandidatesInfo from './CandidatesInfo/CandidatesInfo.js'
import CandidatesJoinUs from './CandidatesJoinUs/CandidatesJoinUs.js'
import Footer from 'components/Footer/Footer';
import positionsData from 'data/positions.json';
import './Candidates.css';

class Candidates extends Component {
  render() {
    document.title = 'RoBorregos | Candidates';

    return (
      <div className='candidates-container'>
        <CandidatesHeader />
        <CandidatesCarousel />
        <CandidatesInfo />
        <CandidatesJoinUs positionsData={ positionsData } />
        <Footer />
      </div>
    );
  }
}

export default Candidates;
