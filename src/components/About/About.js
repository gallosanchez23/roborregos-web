import React, { Component } from 'react';
import AboutTimeline from './AboutTimeline/AboutTimeline.js'
import Footer from 'components/Footer/Footer.js';
import timelineData from 'data/timeline.json';

class About extends Component {
  render() {
    document.title = 'RoBorregos | About';

    return (
      <div className='about-container'>
        <AboutTimeline events={ timelineData.events }/>
        <Footer/>
      </div>
    );
  }
}

export default About;
