import React, { Component } from 'react';
import AboutHeader from './AboutHeader/AboutHeader.js';
import AboutTimeline from './AboutTimeline/AboutTimeline.js'
import Footer from 'components/Footer/Footer.js';
import timelineData from 'data/timeline.json';
import './About.css';

class About extends Component {
  render() {
    document.title = 'RoBorregos | About';

    return (
      <div className='about-container'>
        <AboutHeader />
        <AboutTimeline events={ timelineData.events } />
        <Footer />
      </div>
    );
  }
}

export default About;
