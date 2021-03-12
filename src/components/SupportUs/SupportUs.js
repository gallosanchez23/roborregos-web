// @flow
import React, { useState } from 'react'
import competitionsData from '../../data/competitions.json'
import sponsorsData from '../../data/sponsors.json'
import ContactSponsorUs from './ContactSponsorUs/ContactSponsorUs'
import SupportUsCompetitions from './SupportUsCompetitions/SupportUsCompetitions'
import HeaderBanner from '../Shared/HeaderBanner/HeaderBanner'
import SupportUsTypes from './SupportUsTypes/SupportUsTypes'
import './SupportUs.css'

const Contact = () => {
  const headerTitle = ['Apóyanos', 'Support us']
  const headerMainText = [['Te gustaría apoyarnos? Colabora con nosotros!'], ['Would you like to support RoBorregos? Let’s collaborate!']]
  const headerSubText = [['Ver más'], ['Learn More']]

  document.title = 'RoBorregos | Support us'

  const [language, setLanguage] = useState(1)

  return (
    <>
      <HeaderBanner
        title={headerTitle[language]}
        mainText={headerMainText[language]}
        subText={headerSubText[language]}
        bgColorScheme={{ primary: '#6A2C94E6', secondary: '#141213E6' }}
        iconColorScheme={{ primary: '#6A2C94', secondary: '#CB6CE6' }}
      />
      <button
        type="button"
        onClick={() => setLanguage(!language ? 1 : 0)}
        className="button-sticky-language"
      >
        ES/EN
      </button>
      <SupportUsTypes language={language} />
      <ContactSponsorUs packages={sponsorsData.packages} language={language} />
      <SupportUsCompetitions competitions={competitionsData.competitions} language={language} />
    </>
  )
}

export default Contact
