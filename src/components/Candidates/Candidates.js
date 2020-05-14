import React, { Component } from 'react';
import CandidatesHeader from './CandidatesHeader/CandidatesHeader.js'
import CandidatesCarousel from './CandidatesCarousel/CandidatesCarousel.js'
import CandidatesInfo from './CandidatesInfo/CandidatesInfo.js'
import Footer from 'components/Footer/Footer';
import './Candidates.css';

class Candidates extends Component {
  render() {
    document.title = 'RoBorregos | Candidates';

    return (
      <div className='candidates-container'>
        <CandidatesHeader />
        <CandidatesCarousel />
        <CandidatesInfo />
        <Footer />
      </div>
    );
  }
}

export default Candidates;
