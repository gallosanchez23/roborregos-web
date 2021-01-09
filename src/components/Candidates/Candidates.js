import React, { Component } from 'react'
import positionsData from '../../data/positions.json'
import Footer from '../Footer/Footer'
import CandidatesCarousel from './CandidatesCarousel/CandidatesCarousel'
import CandidatesInfo from './CandidatesInfo/CandidatesInfo'
import CandidatesJoinUs from './CandidatesJoinUs/CandidatesJoinUs'
import HeaderBanner from '../Shared/HeaderBanner/HeaderBanner'
import './Candidates.css'

class Candidates extends Component {
  headerTitle = 'Candidates'

  headerMainText = ['We want you to be part of our team!', 'Every year, we recruit new members that are studying at Tec of Monterrey, Campus Monterrey, who are passionate in developing robots.']

  headerSubText = ['Are you a candidate?', 'Join us!']

  render() {
    document.title = 'RoBorregos | Candidates'

    return (
      <div className="candidates-container">
        <HeaderBanner
          title={this.headerTitle}
          mainText={this.headerMainText}
          subText={this.headerSubText}
          bgColorScheme={{ primary: '#E84B77E6', secondary: '#141213E6' }}
          iconColorScheme={{ primary: '#E84B77', secondary: '#CC2759' }}
        />
        <CandidatesCarousel />
        <CandidatesInfo />
        <CandidatesJoinUs positionsData={positionsData} />
        <Footer />
      </div>
    )
  }
}

export default Candidates
