// @flow
import React from 'react'
import HomeHeader from './HomeHeader/HomeHeader'
import HomeInformation from './HomeInformation/HomeInformation'
import HomeMiniInformation from './HomeMiniInformation/HomeMiniInformation'
import HomeSponsors from './HomeSponsors/HomeSponsors'
import HomeMisionVision from './HomeMisionVision/HomeMisionVision'
import sponsorsData from '../../data/sponsors.json'

const Home = () => {
  document.title = 'RoBorregos | Home'

  return (
    <>
      <HomeHeader />
      <HomeMiniInformation />
      <HomeMisionVision />
      <HomeSponsors sponsors={sponsorsData.sponsors} />
    </>
  )
}

export default Home
