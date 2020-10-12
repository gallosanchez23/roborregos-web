// @flow
import './Home.css'

import React from 'react'
import Footer from '../Footer/Footer'
import HomeHeader from './HomeHeader/HomeHeader'
import HomeInformation from './HomeInformation/HomeInformation'
import HomeMiniInformation from './HomeMiniInformation/HomeMiniInformation'
import HomeSponsors from './HomeSponsors/HomeSponsors'

import sponsorsData from '../../data/sponsors.json'

export const Home = () => {
  document.title = 'RoBorregos'
  return (
    <div className="home-container">
      <HomeHeader />
      <HomeMiniInformation />
      <HomeInformation />
      <HomeSponsors sponsors={sponsorsData.sponsors} />
      <Footer />
    </div>
  )
}

export default Home
