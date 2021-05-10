// @flow
import React from 'react'
import AboutHeader from './AboutHeader/AboutHeader'
import AboutTimeline from './AboutTimeline/AboutTimeline'
import './About.css'

const About = () => {
  document.title = 'RoBorregos | About'
  return (
    <>
      <AboutHeader />
      <AboutTimeline />
    </>
  )
}

export default About
