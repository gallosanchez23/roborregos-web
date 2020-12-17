// @flow
import './About.css'

import React from 'react'
import timelineData from '../../data/timeline.json'
import Footer from '../Footer/Footer'
import AboutHeader from './AboutHeader/AboutHeader'
import AboutTimeline from './AboutTimeline/AboutTimeline'

const About = () => {
  document.title = 'RoBorregos | About'
  return (
    <div className="about-container">
      <AboutHeader />
      <AboutTimeline events={timelineData.events} />
      <Footer />
    </div>
  )
}

export default About
